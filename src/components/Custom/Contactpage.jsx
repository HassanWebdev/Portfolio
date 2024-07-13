"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import img from "@/app/img/asli4.png";
import About from "./About2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Contactpage() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".title", {
      duration: 0.7,
      y: 600,
      stagger: 0.4,
      ease: "power4.out",
    });
    tl.from(".rot", {
      scale: 0,
      stagger:.2,
      duration: 0.3,
      ease: "power4.out",
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to("#mouse", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "none",
      });
    });
  });
  return (
    <>
      <Navbar background={"bg-[#1D1D21] text-white"} />
      <div className="w-full bg-[#1D1D21] text-white px-5 md:px-10">
      <div id='mouse' className={`w-5 h-5 bg-white fixed top-0  left-0 z-[99] rounded-full pointer-events-none `}></div>

        <div className=" flex  sm:justify-start sm:pt-40 pt-20 pb-20 ">
          <h1 className="overflow-hidden font-neue_montreal text-5xl sm:text-7xl md:text-8xl">
            <span className="title leading-tight inline-block">
              Let's start a
            </span>
            <br />
            <div className="w-full flex items-center gap-6">
              <span className="title leading-none inline-block">
                project together
              </span>
              <Image
                className=" rot rounded-full md:h-20 md:w-20 h-16 w-16 border-2 bg-[#989D9F] grayscale-[70%]"
                src={img}
                alt={img}
              />
            </div>
          </h1>
        </div>
        <hr />
      </div>
      <About />
    </>
  );
}

export default Contactpage;
