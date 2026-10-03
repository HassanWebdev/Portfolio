"use client";
import React, { useEffect, useState } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import mockmaster from "@/components/ui/MockMaster.png";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import gsap from "gsap";
import career from "@/app/img/career.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Vyafac from "@/app/img/vyafac.png";
import Vyalux from "@/app/img/vyalux.png";
import Servia from "@/app/img/servia.png";
import ExpertOne from "@/app/img/expertone.png";

gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const [mobile, setmobile] = useState(false);
  const responsive = gsap.matchMedia();
  useEffect(() => {
    const getwidth = () => {
      if (window.innerWidth > 650) {
        setmobile(false);
      } else {
        setmobile(true);
      }
    };
    getwidth();
    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) {
        setmobile(false);
      } else {
        setmobile(true);
      }
    });
    responsive.add("(max-width: 650px)", () => {
      gsap.from(".mobilelinks", {
        scale: 0,
        ease: "power1.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".desklinks",
          start: "top 78%",
          end: "bottom bottom",
        },
      });
    });
    return () => {
      window.removeEventListener("resize", getwidth);
    };
  });
  const projects = [
    {
      project: "Servia",
      url: "https://serviahelpdesk.com/",
      text: "B2B SaaS & Integrations",
      year: 2025,
      location: "Pakistan",
      img: Servia,
      isStatic: true,
    },
    {
      project: "Expert One",
      url: "https://expert.one/",
      text: "Booking Platform Frontend",
      year: 2025,
      location: "Remote",
      img: ExpertOne,
      isStatic: true,
    },
    {
      project: "VYALUX",
      url: "https://vyalux.com/",
      text: "Interaction & Development",
      year: 2025,
      location: "USA",
      img: Vyalux,
      isStatic: true,
    },
    {
      project: "VAYAFAC",
      url: "https://vyafac.com/",
      text: "Payments & Secure UI",
      year: 2024,
      location: "USA",
      img: Vyafac,
      isStatic: true,
    },
    {
      project: "Career Year",
      url: "https://career-years.com/",
      text: "Full Stack Quiz Ecosystem",
      year: 2025,
      location: "Japan",
      img: career,
    },
    {
      project: "MockMaster",
      url: "https://mockmaster-inky.vercel.app/",
      text: "Realtime & AI Interviews",
      year: 2024,
      location: "Remote",
      img: mockmaster,
    },
  ];
  useGSAP(() => {
    responsive.add("(min-width: 651px)", () => {
      gsap.from("#desklinks", {
        opacity: 0,
        ease: "power4.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".desklinks",
          start: "top 65%",
          end: "bottom bottom",
        },
      });
    });
  });
  return (
    <div className="bg-zinc-50 font-neue_montreal w-full  pt-5 px-5 md:px-10">
      <div className="bg-white mt-0 p-5 rounded-lg">
        <div className="py-10">
          <h1 className="text-3xl font-neue_montreal_Bold text-gray-900  tracking-widest opacity-85 uppercase ">
            Projects
          </h1>
        </div>
        <div className="desklinks w-full  ">
          {mobile ? (
            <div className="flex flex-wrap justify-center items-center gap-5">
              {projects.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative  mobilelinks bg-zinc-200  px-2 py-2 border-black  hover:border-1  rounded-xl"
                  >
                    <div>
                      <Image
                        src={item.img}
                        width="100%"
                        alt={item.project}
                        className="rounded-xl"
                      />
                      <div className="flex justify-between items-center py-3">
                        <h1 className="font-neue_montreal_Medium uppercase mr-5">
                          {item.project}
                        </h1>
                        <p className=" text-[.7rem] uppercase opacity-75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <BorderBeam
                      size={200}
                      duration={3}
                      delay={2}
                      borderWidth={2}
                      colorFrom="#D448EE"
                      colorTo="#19ADD7"
                    />
                  </a>
                );
              })}
            </div>
          ) : (
            projects.map((item, index) => {
              return (
                <div key={index} id="desklinks">
                  <LinkPreview
                    url={`${item.url}`}
                    width={400}
                    height={300}
                    quality={100}
                    className="z-50"
                    isStatic={item.isStatic}
                    imageSrc={item.isStatic ? item.img?.src : undefined}
                  >
                    <div className="w-full h-32 border-y-1 flex justify-between items-center transition-all  hover:px-5 hover:opacity-50">
                      <div>
                        <h1 className="text-2xl font-neue_montreal_Medium uppercase">
                          {item.project}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-xl opacity-70">{item.text}</h1>
                      </div>
                    </div>
                  </LinkPreview>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
