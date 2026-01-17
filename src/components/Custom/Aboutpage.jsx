"use client";
import Navbar from "@/components/Custom/Navbar";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import img from "@/app/img/pro.jpg";
import About from "./About2";
import img2 from "@/app/img/profi.jpeg"
import { ScrollTrigger } from 'gsap/all'
import dynamic from "next/dynamic";

// Import hover-effect with dynamic import to avoid SSR issues
const HoverEffect = dynamic(() => import('../Custom/HoverEffectWrapper'), { ssr: false });

gsap.registerPlugin(ScrollTrigger)

function Page() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img,img2];
  const imageUrls = images.map(img => typeof img === 'object' ? img.src : img);
  
  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = (prev + 1) % images.length;
        
        if (containerRef.current) {
          // Trigger the next image transition
          containerRef.current.nextImage();
        }
        
        return next;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: ".events",
        start: "top 65%",
        end: "bottom bottom",
      }
    })
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: "#main",
        start: "20% 65%",
        end: "bottom bottom",
      }
    })

    tl.from('.spanny',{
      duration: .5,
      x: "-200%",
      ease: "power4.out",
    })
    tl.from('.me',{
      scale:0,
      duration: 1,
      ease: "power2.out",
    }) 
    tl2.from('.boxes',{
      scale:0,
      duration: 1,
      ease: "power4.out",
      stagger:.3,
    })

    gsap.from('.title',{
      duration: .7,
      y: 600,
      stagger:.4,
      ease: "power2.out",
    })

    window.addEventListener("mousemove", (e) => {
      gsap.to("#mouse", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "none",
      });
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  });

  return (
    <>
      <Navbar background={"bg-white text-gray-600"} />
      <div className="w-full h-auto px-5 md:px-10 ">
    
        <div className=" flex sm:justify-center sm:pt-40 pt-20 pb-20 ">
          <h1 className="overflow-hidden font-neue_montreal text-5xl sm:text-7xl md:text-8xl">
            <span className="title leading-tight inline-block">Helping brands thrive</span>
            <br />
            <span className="title leading-none inline-block pb-4">in the digital world.</span>
          </h1>
        </div>
        <div className="w-full border-t-2 py-10 sm:flex justify-center ">
          <div className="w-full md:w-1/2 h-auto flex justify-center pb-5">
            <p className="spanny font-neue_montreal text-gray-600 sm:w-72 ">
              I help companies from all over the world with tailor-made
              solutions. With each project, I push my work to new horizons,
              always putting quality first
            </p>
          </div>
          <div className="me w-full md:w-1/2 overflow-hidden">
            <div ref={imageRef} className="transform-gpu" style={{ perspective: "1000px" }}>
              <Image 
                src={images[currentImageIndex]} 
                width={1000} 
                alt="Profile image" 
                className="rounded-xl border-4 border-black object-cover"
              />
            </div>
          </div>
        </div>
        <div className="events h-auto w-full pt-5 pb-20">
          <h1 className=" text-4xl font-neue_montreal pb-10 sm:pl-9">
            I can help you with...
          </h1>
          <div className="sm:flex justify-between gap-14  w-full">
            {[
              {
                num: "01",
                title: "Design",
                para: "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
              },
              {
                num: "02",
                title: "Development",
                para: "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Build with Kirby CMS or Webflow.",
              },
              {
                num: "03",
                title: "The full package",
                para: "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
              },
            ].map((data, index) => {
              return (
              <div key={index} className="relative boxes font-neue_montreal  px-3 sm:px-10 group pb-10">
                <h2 className="text-sm group-hover:text-white relative z-10 text-gray-400 py-5 transition-all w-full border-b-2">{data.num}</h2>
                <h1 className="text-3xl group-hover:text-white relative z-10 pt-5 text-gray-600   transition-all">{data.title}</h1>
                <p className="font-neue_montreal group-hover:text-white relative z-10 pt-5 text-gray-600 transition-all">{data.para}</p>
                <div className="absolute inset-0 rounded-3xl transform bg-gray-600 scale-y-0 origin-bottom group-hover:scale-y-100 transition-all "></div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Page;
