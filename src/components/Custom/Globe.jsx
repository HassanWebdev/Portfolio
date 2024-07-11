"use client";
import IconCloud from "@/components/magicui/icon-cloud";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export default function IconCloudDemo() {
  useGSAP(()=>{
    const time   = gsap.timeline({
      scrollTrigger: {
        trigger: "#globe",
        start: "top 65%", // Adjust as needed
        end: "bottom bottom", // Adjust as needed
      },
    })
  
    time.from('#globe h1',{
      scale:0,
      duration: 1,
      ease: "power4.out",
    }).from('#mainglobe',{
      scale:0,
      duration: 1.3,
      ease: "power4.out",
    })
})
  return (
    <div id="globe" className="relative bg-white w-full py-5 px-10 ">
      <h1   className="font-neue_montreal text-xl tracking-wider opacity-85  uppercase">
        My Skills
      </h1>
      <div id="mainglobe">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
