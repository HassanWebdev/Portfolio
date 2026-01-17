"use client";
import React, { useEffect, useState } from "react";
import mypic from "@/app/img/profile.png";
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


  return (
    <div className="h-[calc(100vh-2.8rem)] relative overflow-hidden ">
      <div className="w-[55%] md:w-[30%] md:h-[14.5rem] h-40 top-20 md:top-3 bg-white absolute rounded-tr-full rounded-br-full z-10 mix-blend-difference"></div>
      <div className="w-[26%] md:w-[30%] md:h-56 h-40 bg-white absolute right-0 bottom-10 md:bottom-0 rounded-tl-full rounded-bl-full z-40 mix-blend-difference"></div>
      <div className="text-white absolute bottom-0 z-10 left-1/2 -translate-x-1/2 w-full md:w-auto flex justify-center">
        <div className=" px-5 md:px-10 pt-5 md:pt-10 ">
          <img
            src={mypic.src}
            alt="Hassan Raza"
            className=" grayscale-[60%] mix-blend-normal hover:grayscale-0 transition-all relative top-[30%] h-[120vh]  lg:h-[130vh] object-contain z-50"
          />
        </div>
      </div>

      <div className="absolute md:bottom-0 bottom-14 w-full overflow-hidden z-20 pointer-events-none">
        <VelocityScroll
          text="__HASSAN__RAZA "
          default_velocity={5}
          className="text-white text-[8rem] md:text-[12rem] lg:text-[15rem] font-neue_montreal leading-none"
        />
      </div>

      {/* Top scrolling text */}
      <div className="absolute md:top-0 top-24 w-full overflow-hidden pointer-events-none">
        <VelocityScroll
          text="MERN - Developer -"
          default_velocity={5}
          direction="right"
          className="text-white text-[8rem]  md:text-[12rem] lg:text-[15rem] font-neue_montreal leading-none"
        />
      </div>
    </div>
  );
}

export default Hero;
