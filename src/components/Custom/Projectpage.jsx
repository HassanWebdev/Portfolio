"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import About from "./About2";
import { LinkPreview } from "../ui/link-preview";
import mockmaster from "@/components/ui/MockMaster.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { BorderBeam } from "../ui/border-beam";
import Vyafac from "@/app/img/vyafac.png";
import career from "@/app/img/career.png";
import Vyalux from "@/app/img/vyalux.png";
import Servia from "@/app/img/servia.png";
import ExpertOne from "@/app/img/expertone.png";

function Projectpage() {
  const responsive = gsap.matchMedia();
  const projects = [
    {
      project: "Servia",
      url: "https://serviahelpdesk.com/",
      text: "B2B SaaS & Integrations",
      img: Servia,
      isStatic: true,
      year: 2025,
      location: "Pakistan",
    },
    {
      project: "Expert One",
      url: "https://expert.one/",
      text: "Booking Platform Frontend",
      img: ExpertOne,
      isStatic: true,
      year: 2025,
      location: "Remote",
    },
    {
      project: "VYALUX",
      url: "https://vyalux.com/",
      text: "Interaction & Development",
      img: Vyalux,
      isStatic: true,
      year: 2025,
      location: "USA",
    },
    {
      project: "VAYAFAC",
      url: "https://vyafac.com/",
      text: "Payments & Secure UI",
      img: Vyafac,
      isStatic: true,
      year: 2024,
      location: "USA",
    },
    {
      project: "Career Year",
      url: "https://career-years.com/",
      text: "Full Stack Quiz Ecosystem",
      img: career,
      year: 2025,
      location: "Japan",
    },
    {
      project: "MockMaster",
      url: "https://mockmaster-inky.vercel.app/",
      text: "Realtime & AI Interviews",
      img: mockmaster,
      year: 2024,
      location: "Remote",
    },
  ];
  useGSAP(() => {
    gsap.from(".title", {
      duration: 0.7,
      y: 600,
      stagger: 0.4,
      ease: "power2.out",
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
  const [mobile, setmobile] = useState(false);
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
  return (
    <>
      <Navbar background={"bg-white text-gray-600"} />
      <div className="w-full h-auto px-5 md:px-10 ">
        <div className=" flex  sm:justify-center sm:pt-40 pt-20 pb-20 ">
          <h1 className="overflow-hidden font-neue_montreal text-5xl sm:text-7xl md:text-8xl">
            <span className="title leading-tight inline-block">
              Creating next level
            </span>
            <br />
            <span className="title leading-none inline-block">
              digital products
            </span>
          </h1>
        </div>
        <div className="w-full mt-12">
          {mobile ? (
            ""
          ) : (
            <div className="flex justify-between pb-5">
              <h1 className="text-sm opacity-80 uppercase">client</h1>
              <h1 className="text-sm opacity-80 uppercase">Location</h1>
              <h1 className="text-sm opacity-80 uppercase">Services</h1>
              <h1 className="text-sm opacity-80 uppercase">year</h1>
            </div>
          )}

          {mobile ? (
            <div className="flex flex-wrap justify-center items-center gap-5 py-5">
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
                        <h1 className="font-neue_montreal_Medium uppercase">
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
                      <div className="w-10">
                        <h1 className="text-2xl font-neue_montreal_Medium uppercase">
                          {item.project}
                        </h1>
                      </div>
                      <div className="w-10">
                        <h1 className="text-xl opacity-70">{item.location}</h1>
                      </div>
                      <div className="w-10">
                        <h1 className="text-xl opacity-70">{item.text}</h1>
                      </div>
                      <div className="w-10">
                        <h1 className="text-xl opacity-70">{item.year}</h1>
                      </div>
                    </div>
                  </LinkPreview>
                </div>
              );
            })
          )}
        </div>
      </div>
      <About />
    </>
  );
}

export default Projectpage;
