"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "@/app/img/asli4.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function getCurrentTimePST() {
  const now = new Date();
  const options = {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return now.toLocaleString("en-US", options).toLowerCase() + " pst";
}

function About() {
  const [currentTime, setCurrentTime] = useState(getCurrentTimePST());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimePST());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const person = [
    {
      id: 1,
      name: "Hassan Raza",
      designation: "MERN Developer",
      image: img,
    },
  ];
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".foot",
        start: "top 65%", 
        end: "bottom bottom", 
      },
    })
    tl.from('.fot',{
      y: 200,
      duration: 1,
      ease: "power2.Out",
      stagger:.3,
    })
    tl.from('.btn',{
      scale:0,
      duration: 1,
      ease: "elastic.out",
      stagger:.3,
    })
  })
  return (
    <div className="w-full foot  bg-[#1D1D21] px-5  py-5">
      <div className="w-full  pt-36 flex flex-col gap-20 md:px-32">
        <div className="flex justify-between items-center w-full">
          <div id="text " className="text-white">
            <div className="flex items-center gap-5 overflow-hidden">
              <Image
                className="fot rounded-full md:h-20 md:w-20 h-16 w-16 border-2 bg-[#989D9F] grayscale-[70%]"
                src={person[0].image}
                alt={person[0].name}
              />
              <h1 className="fot font-neue_montreal_Medium text-4xl md:text-8xl leading-none ">
                Let’s work
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="fot font-neue_montreal_Medium text-4xl md:text-8xl leading-none">
                together
              </h1>
            </div>
          </div>
          <div 
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => {
              const arrow = document.querySelector('.arrow-svg');
              gsap.timeline()
                .to(arrow, {
                  rotate: 45,
                  scale: 1.5,
                  y: -10,
                  x: 10,
                  duration: 0.3,
                  ease: "power2.out"
                })
                .to(arrow, {
                  rotate: 0,
                  scale: 1,
                  y: 0,
                  x: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.3)"
                });
            }}
          >
            <svg
              className="arrow-svg"
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>arrow-up-right</title>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-1019.000000, -279.000000)"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                >
                  <g transform="translate(1026.000000, 286.000000) rotate(180.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                    <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                    <line x1="12" y1="0" x2="0" y2="12"></line>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <hr />
      </div>
      <div className="md:px-32 py-10 flex flex-col md:flex-row gap-5">
        <button className="btn relative overflow-hidden font-neue_montreal tracking-wider px-4 py-5 rounded-full text-white border border-gray-200 group">
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            hassanwebdev0896@gmail.com
          </span>
          <span className="absolute inset-0 bg-white transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
        </button>
        <button className="btn relative overflow-hidden font-neue_montreal tracking-wider px-4 py-5 rounded-full text-white border border-gray-200 group">
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            +923265527246
          </span>
          <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
        </button>
      </div>
      <div id="social media" className="md:px-32 px-5 pt-12 ">
        <div className="flex justify-between flex-wrap ">
          <div className="flex w-full md:w-auto justify-between ">
            <div className="flex flex-col gap-2 pr-5">
              <h1 className="uppercase font-neue_montreal_Medium text-[#7B7A7C] text-[.6rem] ">
                version
              </h1>
              <h1 className="btn font-neue_montreal_Medium text-white tracking-wide">
                2025 © Edition
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="uppercase font-neue_montreal_Medium text-[#7B7A7C] text-[.6rem] ">
                LOCAL TIME
              </h1>
              <h1 className="btn font-neue_montreal_Medium text-white tracking-wide">
                {currentTime}
              </h1>{" "}
            </div>
          </div>
          <div className="flex w-full md:w-auto justify-between gap-5">
            <div className="flex flex-col gap-2 w-full   pt-3 md:pt-0">
              <h1 className="uppercase font-neue_montreal_Medium text-[#7B7A7C] text-[.6rem]  ">
                social
              </h1>
              <div className="flex gap-3 justify-between md:justify-normal w-full">
                <a
                  className="btn font-neue_montreal_Medium text-white relative overflow-hidden group px-2 py-1 rounded-full"
                  href="https://twitter.com/HassanR089"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="  relative z-10 group-hover:text-black transition-colors duration-300">
                    Twitter
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                </a>
                <a
                  className="btn font-neue_montreal_Medium text-white relative overflow-hidden group  px-2 py-1 rounded-full"
                  href="https://linkedin.com/in/muhammad-hassan-raza-a64b9b306"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    LinkedIn
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                </a>

                <a
                  className="btn font-neue_montreal_Medium text-white relative overflow-hidden group  px-2 py-1 rounded-full"
                  href="https://instagram.com/hassan__0__1__0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Instagram
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                </a>
                <a
                  className="btn font-neue_montreal_Medium text-white relative overflow-hidden group  px-2 py-1 rounded-full"
                  href="https://dev.to/hassanwebdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Dev
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
