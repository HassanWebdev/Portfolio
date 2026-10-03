"use client";
import IconCloud from "@/components/magicui/icon-cloud.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "nestjs",
  "express",
  "graphql",
  "mongodb",
  "postgresql",
  "amazonaws",
  "shopify",
  "docker",
  "git",
  "github",
  "vercel",
  "html5",
  "css3",
  "visualstudiocode",
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
      skill: "TypeScript",
      description:
        "Strong typing across frontend and backend for safer, maintainable SaaS codebases.",
    },
    {
      skill: "Next.js & React",
      description:
        "Building high-performance product UIs, dashboards, and booking experiences.",
    },
    {
      skill: "NestJS & Node.js",
      description:
        "Scalable APIs, auth, and service layers for B2B platforms and quiz ecosystems.",
    },
    {
      skill: "GraphQL & REST",
      description:
        "Designing and consuming APIs, including Shopify GraphQL and partner integrations.",
    },
    {
      skill: "PostgreSQL & MongoDB",
      description:
        "Modeling and optimizing data for transactional and document-heavy workloads.",
    },
    {
      skill: "Shopify & Third-Party APIs",
      description:
        "Integrating Shopify, TikTok Shop, AfterShip, and Microsoft Outlook into product workflows.",
    },
    {
      skill: "Solutions Architecture",
      description:
        "Learning AWS Solutions Architect via Udemy — scalable cloud and B2B SaaS infrastructure.",
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
