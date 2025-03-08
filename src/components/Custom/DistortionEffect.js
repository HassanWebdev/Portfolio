import * as THREE from 'three';
import gsap from 'gsap';

export default class DistortionEffect {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      intensity: options.intensity || 0.2,
      speedIn: options.speedIn || 1.6,
      speedOut: options.speedOut || 1.2,
      easing: options.easing || 'expo.out',
      hover: options.hover !== undefined ? options.hover : true,
    };

    this.initThreeJS();
    
    if (this.options.hover) {
      this.initEvents();
    }
  }

  initThreeJS() {
    // Initialize Three.js setup here
    // This would involve creating a WebGL renderer, scene, camera,
    // and setting up shader materials for the distortion effect
    
    // This is a placeholder. For actual implementation, you'd need
    // to set up proper Three.js components and shaders
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    
    // Additional setup code would go here
  }

  initEvents() {
    this.element.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.element.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.element.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseEnter(ev) {
    if (!this.options.hover) return;
    
    gsap.to(this.uniforms.uIntensity, {
      duration: this.options.speedIn,
      value: this.options.intensity,
      ease: this.options.easing
    });
  }

  onMouseLeave(ev) {
    if (!this.options.hover) return;
    
    gsap.to(this.uniforms.uIntensity, {
      duration: this.options.speedOut,
      value: 0,
      ease: this.options.easing
    });
  }

  onMouseMove(ev) {
    if (!this.options.hover) return;
    
    // Calculate normalized mouse position
    const rect = this.element.getBoundingClientRect();
    const x = (ev.clientX - rect.left) / rect.width;
    const y = 1 - (ev.clientY - rect.top) / rect.height;
    
    // Update uniforms for shader
    if (this.uniforms) {
      this.uniforms.uMouse.value.set(x, y);
    }
  }

  setImage(newImage) {
    // Update the texture/image
    // Implementation would depend on how images are handled
    if (this.texture) {
      this.texture.dispose();
      this.texture = new THREE.Texture(newImage);
      this.texture.needsUpdate = true;
    }
  }

  destroy() {
    // Clean up resources and event listeners
    if (this.options.hover) {
      this.element.removeEventListener('mouseenter', this.onMouseEnter.bind(this));
      this.element.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
      this.element.removeEventListener('mousemove', this.onMouseMove.bind(this));
    }
    
    // Dispose Three.js resources
    // This is just a placeholder for cleanup logic
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
