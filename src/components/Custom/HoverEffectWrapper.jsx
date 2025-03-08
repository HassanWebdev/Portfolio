import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import hoverEffect from 'hover-effect';

const HoverEffectWrapper = forwardRef(({ 
  images, 
  displacementImage, 
  intensity = 0.2, 
  className,
  currentIndex = 0
}, ref) => {
  const containerRef = useRef(null);
  const effectRef = useRef(null);
  const currentImgIndex = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any previous effect
    if (effectRef.current) {
      containerRef.current.innerHTML = '';
    }
    
    const img1 = images[currentImgIndex.current % images.length];
    const img2 = images[(currentImgIndex.current + 1) % images.length];
    
    effectRef.current = new hoverEffect({
      parent: containerRef.current,
      intensity: intensity,
      image1: img1,
      image2: img2,
      displacementImage: displacementImage || '/displacement/stripe1.jpg',
      hover: true,
      imagesRatio: 1.5 // Adjust this ratio based on your image dimensions
    });

    // Add custom mouse move effect for more interactive distortion
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is over the element
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const relX = ((e.clientX - rect.left) / rect.width) - 0.5;
        const relY = ((e.clientY - rect.top) / rect.height) - 0.5;
        
        // Apply additional effects based on mouse position
        if (effectRef.current && effectRef.current.material) {
          effectRef.current.material.uniforms.intensity.value = 0.2 + Math.abs(relX) * 0.3;
          
          // If the effect has these properties, modify them
          if (effectRef.current.scene && effectRef.current.camera) {
            effectRef.current.camera.position.z = 1 - Math.abs(relX) * 0.1;
            effectRef.current.scene.rotation.y = relX * 0.05;
            effectRef.current.scene.rotation.x = relY * 0.05;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [images, displacementImage, intensity]);

  // Expose next image method to parent
  useImperativeHandle(ref, () => ({
    nextImage: () => {
      if (!effectRef.current) return;

      currentImgIndex.current = (currentImgIndex.current + 1) % images.length;
      const nextImgIndex = (currentImgIndex.current + 1) % images.length;
      
      // Manually dispose and reinitialize effect for transition
      effectRef.current.next();
      
      // After transition, update the images
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          
          effectRef.current = new hoverEffect({
            parent: containerRef.current,
            intensity: intensity,
            image1: images[currentImgIndex.current],
            image2: images[nextImgIndex],
            displacementImage: displacementImage || '/displacement/stripe1.jpg',
            hover: true,
            imagesRatio: 1.5
          });
        }
      }, 1000); // Wait for transition to complete
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
        borderRadius: '12px'
      }}
    />
  );
});

HoverEffectWrapper.displayName = 'HoverEffectWrapper';

export default HoverEffectWrapper;
