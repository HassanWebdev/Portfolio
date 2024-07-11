'use client'
import { useGSAP } from "@gsap/react";
import { BorderBeam } from "../ui/border-beam";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export default function MeteorDemo() {
  useGSAP(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top 65%", // Adjust as needed
        end: "bottom bottom", // Adjust as needed
        scrub:2
      },
    });
  
    animate
      .from('#left', {
        scale: 0,
        duration: 1.1,
        ease: 'power4.out'
      })
      .from('#right', {
        scale: 0,
        duration: 1.1,
        delay:.5,
        ease: 'power4.out'
      }, "<"); // This makes the right animation start at the same time as the left
  
  }, []); // Empty dependency array to run only once on component mount

  const words = [
    {
      text: "Hi,",
      className:'font-neue_montreal'
    },
    {
      text: "I,m",className:'font-neue_montreal'
    },
    {
      text: "a",className:'font-neue_montreal'
    },
    {
      text: "MERN",
      className: "text-[#D448EE] font-neue_montreal_Medium ",
    },
    {
      text: "Stack",
      className: "text-[#19ADD7] font-neue_montreal_Medium ",
    },
    {
      text: "Developer .",
      className: "text-[#3e8e8e] font-neue_montreal_Medium",
    },
    
  ];
  return (
    <div id="main" className=" bg-white  w-full py-24 px-5 md:px-10 rounded-tr-3xl rounded-tl-3xl">
      <div>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="relative w-full flex flex-col md:flex-row gap-14 py-2 px-2 items-center ">
        <p id="left" className="font-neue_montreal_Medium text-3xl opacity-90">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>
        <p id="right" className="font-neue_montreal opacity-70">
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>{" "}
        <BorderBeam
          size={400}
          duration={5}
          delay={5}
          borderWidth={3}
          colorFrom="#D448EE"
          colorTo="#19ADD7"
        />
      </div>
    </div>
  );
}
