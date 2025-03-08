import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Curtains, Plane } from 'curtainsjs';

// Vertex shader for the distortion effect
const vertexShader = `
  precision mediump float;
  
  // Default attributes from Curtains.js
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  // Custom uniforms
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  
  uniform float uTime;
  uniform vec2 uMousePosition;
  uniform float uDisplacementStrength;
  
  // Varying variables (passed to fragment shader)
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  
  void main() {
    vec3 vertexPosition = aVertexPosition;
    
    // Distortion based on mouse position
    float distX = distance(uMousePosition.x, 0.5);
    float distY = distance(uMousePosition.y, 0.5);
    
    // Apply distortion effect
    vertexPosition.x += sin(vertexPosition.x * 10.0 + uTime * 0.1) * distX * uDisplacementStrength;
    vertexPosition.y += cos(vertexPosition.y * 10.0 + uTime * 0.1) * distY * uDisplacementStrength;
    
    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    
    // Varyings
    vTextureCoord = aTextureCoord;
    vVertexPosition = vertexPosition;
  }
`;

// Fragment shader for the distortion effect
const fragmentShader = `
  precision mediump float;
  
  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;
  
  uniform float uTime;
  uniform float uTransitionProgress;
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform sampler2D uDisplacement;
  
  void main() {
    // Sample the displacement map
    vec4 displacementTexture = texture2D(uDisplacement, vTextureCoord);
    
    // Calculate distorted texture coordinates for transition
    vec2 distortedPosition1 = vec2(vTextureCoord.x + displacementTexture.r * uTransitionProgress * 0.1, 
                                 vTextureCoord.y + displacementTexture.g * uTransitionProgress * 0.1);
                                 
    vec2 distortedPosition2 = vec2(vTextureCoord.x - displacementTexture.r * (1.0 - uTransitionProgress) * 0.1, 
                                 vTextureCoord.y - displacementTexture.g * (1.0 - uTransitionProgress) * 0.1);
    
    // Sample both textures with distorted coordinates
    vec4 texture1 = texture2D(uTexture1, distortedPosition1);
    vec4 texture2 = texture2D(uTexture2, distortedPosition2);
    
    // Mix the two textures based on transition progress
    gl_FragColor = mix(texture1, texture2, uTransitionProgress);
  }
`;

const CurtainsEffect = forwardRef(({ 
  images, 
  currentIndex = 0, 
  className
}, ref) => {
  const containerRef = useRef(null);
  const curtainsRef = useRef(null);
  const planeRef = useRef(null);
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const currentTime = useRef(0);
  const transitionActive = useRef(false);
  const currentImageIndex = useRef(currentIndex);
  const nextImageIndex = useRef((currentIndex + 1) % images.length);
  const activeImagesRef = useRef({
    current: images[currentImageIndex.current],
    next: images[nextImageIndex.current]
  });

  // Setup Curtains.js instance and plane
  useEffect(() => {
    if (!containerRef.current || !images.length) return;

    // Initialize Curtains
    curtainsRef.current = new Curtains({
      container: containerRef.current,
      pixelRatio: Math.min(1.5, window.devicePixelRatio), // optimize for performance
    });

    // Handle resizing and errors
    curtainsRef.current.onError(() => {
      // Handle WebGL context error or not supported
      console.error("Curtains.js encountered an error");
    }).onContextLost(() => {
      curtainsRef.current.restoreContext();
    });

    // Add mouse move event for interactive distortion
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate normalized mouse position
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mousePosition.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        };
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Create plane
    createPlane();

    // Animation loop
    curtainsRef.current.onRender(() => {
      currentTime.current += 0.01;
      
      if (planeRef.current) {
        // Update uniforms
        planeRef.current.uniforms.uTime.value = currentTime.current;
        planeRef.current.uniforms.uMousePosition.value = [mousePosition.current.x, mousePosition.current.y];

        // If transition is active, update progress
        if (transitionActive.current && planeRef.current.uniforms.uTransitionProgress) {
          planeRef.current.uniforms.uTransitionProgress.value += 0.01;
          
          // If transition is complete
          if (planeRef.current.uniforms.uTransitionProgress.value >= 1) {
            transitionActive.current = false;
            planeRef.current.uniforms.uTransitionProgress.value = 0;
            
            // Update indices and textures
            currentImageIndex.current = nextImageIndex.current;
            nextImageIndex.current = (currentImageIndex.current + 1) % images.length;

            // Update textures
            if (planeRef.current.textures.length > 0) {
              planeRef.current.textures[0].setSource(images[currentImageIndex.current]);
              planeRef.current.textures[1].setSource(images[nextImageIndex.current]);
            }
          }
        }
      }
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (curtainsRef.current) {
        curtainsRef.current.dispose();
      }
    };
  }, [images]);

  // Create the WebGL plane with images
  const createPlane = () => {
    if (!curtainsRef.current || !containerRef.current) return;

    // Add a plane element
    const planeElement = document.createElement('div');
    planeElement.classList.add('curtains-plane');
    planeElement.style.width = '100%';
    planeElement.style.height = '100%';
    containerRef.current.appendChild(planeElement);

    // Add images to the plane element
    const img1 = document.createElement('img');
    img1.src = images[currentImageIndex.current];
    img1.style.display = 'none';
    
    const img2 = document.createElement('img');
    img2.src = images[nextImageIndex.current];
    img2.style.display = 'none';

    const displacementImg = document.createElement('img');
    displacementImg.src = '/displacement/displacement.jpg';
    displacementImg.style.display = 'none';

    planeElement.appendChild(img1);
    planeElement.appendChild(img2);
    planeElement.appendChild(displacementImg);

    // Create the plane
    planeRef.current = new Plane(curtainsRef.current, planeElement, {
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: {
          name: "uTime",
          type: "1f",
          value: 0
        },
        uMousePosition: {
          name: "uMousePosition",
          type: "2f",
          value: [0.5, 0.5]
        },
        uDisplacementStrength: {
          name: "uDisplacementStrength",
          type: "1f",
          value: 0.15
        },
        uTransitionProgress: {
          name: "uTransitionProgress",
          type: "1f",
          value: 0
        }
      },
      widthSegments: 10,
      heightSegments: 10,
      texturesOptions: { premultiplyAlpha: true },
      uniforms: {
        transitionProgress: {
          name: "uTransitionProgress",
          type: "1f",
          value: 0,
        },
      },
    });
  };

  // Expose the transition method to parent
  useImperativeHandle(ref, () => ({
    nextImage: () => {
      if (planeRef.current && !transitionActive.current) {
        transitionActive.current = true;
        planeRef.current.uniforms.uTransitionProgress.value = 0;
      }
    }
  }));

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ 
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: '#f0f0f0'
      }}
    />
  );
});

CurtainsEffect.displayName = 'CurtainsEffect';

export default CurtainsEffect;
