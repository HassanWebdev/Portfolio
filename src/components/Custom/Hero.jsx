"use client";
import React, { useEffect, useState } from "react";
import mypic from "@/app/img/asli.png";
import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { BorderBeam } from "@/components/ui/border-beam";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  // Check screen size on component mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Tablet and above
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener("resize", checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useGSAP(() => {
    // Only create the custom cursor if on large screens
    if (!isLargeScreen) return;
    
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    const existingMouse = document.getElementById('mouse');
    if (existingMouse) {
      existingMouse.remove();
    }

    const cursor = document.createElement('div');
    cursor.id = 'mouse';
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    cursor.style.position = 'fixed';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.mixBlendMode = 'difference';
    cursor.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    cursor.style.zIndex = '99';
    cursor.style.pointerEvents = 'none';
    container.appendChild(cursor);

    const trailCount = 4;
    const trails = [];
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.width = `${12 - i * 2}px`;
      trail.style.height = `${12 - i * 2}px`;
      trail.style.borderRadius = '50%';
      trail.style.backgroundColor = `rgba(255, 255, 255, ${0.7 - i * 0.15})`;
      trail.style.position = 'fixed';
      trail.style.transform = 'translate(-50%, -50%)';
      trail.style.mixBlendMode = 'difference';
      trail.style.zIndex = '98';
      trail.style.pointerEvents = 'none';
      container.appendChild(trail);
      trails.push(trail);
    }

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const velocityX = Math.abs(mouseX - prevMouseX);
      const velocityY = Math.abs(mouseY - prevMouseY);
      const velocity = Math.min(Math.sqrt(velocityX * velocityX + velocityY * velocityY) * 0.05, 1);
      
      gsap.to(cursor, {
        width: 16 + velocity * 20,
        height: 16 + velocity * 20,
        duration: 0.3,
      });
      
      prevMouseX = mouseX;
      prevMouseY = mouseY;
    };

    const render = () => {
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      });
      
      trails.forEach((trail, index) => {
        gsap.to(trail, {
          x: mouseX,
          y: mouseY,
          duration: 0.5 + index * 0.1,
          ease: "power3.out",
          delay: index * 0.04,
        });
      });
      
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    render();

    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, {
            width: 40,
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            duration: 0.3
          });
        });
        
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            width: 16,
            height: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            duration: 0.3
          });
        });
      });
    };
    
    addHoverEffects();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container && document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [isLargeScreen]); // Add isLargeScreen as a dependency

  return (
    <div className="h-screen relative overflow-hidden">

      <div className="w-[50%] md:w-[35%] md:h-56 h-40 top-20 md:top-14 bg-white absolute rounded-tr-full rounded-br-full z-10 mix-blend-difference"></div>
      <div className="w-[35%] md:h-56 h-40 bg-white absolute right-0 bottom-0 rounded-tl-full rounded-bl-full z-40 mix-blend-difference"></div>
      

      <div className="text-white absolute bottom-0 lg:top-0 md:top-0 z-10 left-1/2 -translate-x-1/2 w-full md:w-auto flex justify-center">
        <div className="relative mix-blend-normal px-5 md:px-10 pt-5 md:pt-10">
          <Image
            src={mypic}
            alt="Hassan Raza"
            width={400}
            height={900}
            className="grayscale-[95%] w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain"
            priority
          />
          <BorderBeam 
            size={typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 250} 
            duration={5} 
            delay={5} 
            borderWidth={typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 4} 
          />
        </div>
      </div>
      

      <div className="absolute md:bottom-0 bottom-8 w-full overflow-hidden z-20 pointer-events-none">
        <VelocityScroll
          text="__HASSAN__RAZA "
          default_velocity={5}
          className="text-white text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-neue_montreal leading-none"
        />
      </div>
      
      {/* Top scrolling text */}
      <div className="absolute md:top-10 top-20 w-full overflow-hidden pointer-events-none">
        <VelocityScroll
          text="MERN - Developer -"
          default_velocity={5}
          className="text-white text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-neue_montreal leading-none"
        />
      </div>
    </div>
  );
}

export default Hero;