"use client";
import IconCloud from "@/components/magicui/icon-cloud.jsx";
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
  useGSAP(() => {
    const time = gsap.timeline({
      scrollTrigger: {
        trigger: "#globe",
        start: "top 65%",
        end: "bottom bottom",
      },
    });

    time
      .from("#globe h1", {
        x: -200,
        duration: 0.7,
        ease: "power4.out",
      })
      .from("#mainglobe", {
        scale: 0,
        duration: 0.7,
        ease: "power4.out",
      })
      .from(".skills", {
        x: "-120%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });
  });
  const skills = [
    {
      skill: "JavaScript",
      description: "Proficient in writing clean and efficient JavaScript code.",
    },
    {
      skill: "React",
      description:
        "Experienced in building dynamic user interfaces with React.",
    },
    {
      skill: "Next.js",
      description:
        "Experienced in developing modern web applications with Next.js.",
    },
    {
      skill: "Nest.js",
      description:
        "Experienced in developing modern web applications backedns with Nest.js framework.",
    },

    {
      skill: "Node.js",
      description:
        "Skilled in developing scalable server-side applications using Node.js.",
    },
    {
      skill: "Express",
      description: "Adept at creating robust back-end APIs with Express.",
    },
    {
      skill: "MongoDB",
      description:
        "Knowledgeable in using MongoDB for efficient database management.",
    },

    {
      skill: "TypeScript",
      description:
        "Capable of enhancing JavaScript projects with strong typing using TypeScript.",
    },
  ];

  return (
    <div id="globe" className=" relative bg-white w-full py-5 md:px-10 px-5 ">
      <h1 className="font-neue_montreal text-3xl tracking-wider opacity-85  uppercase">
        My Skills
      </h1>
      <div className="w-full flex flex-col gap-2 md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-2 mt-3">
          {skills.map((data, index) => {
            return (
              <div
                key={index}
                className="skills w-full cursor-pointer rounded-full border-1 border-[#1D1D21] pl-5 md:px-6 py-2 relative overflow-hidden group"
              >
                <div className="">
                  <h2 className="text-xl font-neue_montreal_Bold text-gray-800 relative z-10 group-hover:text-white transition-colors duration-300">
                    {data.skill}
                  </h2>
                  <p className="text-gray-600 relative z-10 group-hover:text-white transition-colors duration-300">
                    {data.description}
                  </p>
                </div>
                <span
                  className={`absolute inset-0 bg-[#1D1D21] rounded-full transform ${
                    index % 2 === 0
                      ? "scale-x-0 origin-left"
                      : "scale-y-0 origin-bottom"
                  }    group-hover:${
                    index % 2 === 0
                      ? "scale-x-100 origin-right duration-400"
                      : "scale-y-100 origin-top"
                  } transition-transform duration-300 ease-out`}
                ></span>
              </div>
            );
          })}
        </div>
        <div
          id="mainglobe"
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
