"use client";
import React, { useEffect, useState } from "react";
import mypic from "@/app/img/profile.png";
import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { BorderBeam } from "@/components/ui/border-beam";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Mouse({ children }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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
    if (!isLargeScreen) return; // Only activate on large screens
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const existingMouse = document.getElementById("mouse");
    if (existingMouse) {
      existingMouse.remove();
    }

    const cursor = document.createElement("div");
    cursor.id = "mouse";
    cursor.style.width = "16px";
    cursor.style.height = "16px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    cursor.style.position = "fixed";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
    cursor.style.zIndex = "99";
    cursor.style.pointerEvents = "none";
    container.appendChild(cursor);

    const trailCount = 4;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      trail.style.width = `${12 - i * 2}px`;
      trail.style.height = `${12 - i * 2}px`;
      trail.style.borderRadius = "50%";
      trail.style.backgroundColor = `rgba(255, 255, 255, ${0.7 - i * 0.15})`;
      trail.style.position = "fixed";
      trail.style.transform = "translate(-50%, -50%)";
      trail.style.mixBlendMode = "difference";
      trail.style.zIndex = "98";
      trail.style.pointerEvents = "none";
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
      const velocity = Math.min(
        Math.sqrt(velocityX * velocityX + velocityY * velocityY) * 0.05,
        1
      );

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
      const interactiveElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            width: 40,
            height: 40,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            duration: 0.3,
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            width: 16,
            height: 16,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            duration: 0.3,
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

  return <div>{children}</div>;
}

export default Mouse;
