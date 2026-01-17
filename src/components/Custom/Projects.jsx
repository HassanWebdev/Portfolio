"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import mockmaster from "@/components/ui/MockMaster.png";
import bloging from "@/app/img/Screenshot 2024-07-07 121628.png";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import gsap from "gsap";
import career from "@/app/img/career.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Case from "@/app/img/Case.png";
import Vyafac from "@/app/img/vyafac.png";
import Vyalux from "@/app/img/vyalux.png";


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
      project: "VYALUX",
      url: "https://vyalux.com/",
      text: " Interaction & Development",
      year: 2025,
      location: "USA",
      img: Vyalux,
      isStatic: true,
    },
    {
      project: "Vyafac",
      url: "https://vyafac.com/",
      text: " Interaction & Development",
      img: Vyafac,
      isStatic: true,
    },
    {
      project: "Career Year",
      url: "https://career-years.com/",
      text: " Interaction & Development",
      img: career,
    },
    {
      project: "MockMaster AI",
      url: "https://mockmaster-inky.vercel.app/",
      text: " Interaction & Development",
      img: mockmaster,
    },
    {
      project: "Case Solver AI",
      url: "https://casesolver.ai/login",
      text: " Interaction & Development",
      img: Case,
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
      <div className="p-3 md:p-5 bg-zinc-200 rounded-lg">
        <div className="relative w-full md:w-max p-3 md:p-5 items-center">
          {" "}
          <h1 className="text-2xl md:text-3xl text-gray-900 font-neue_montreal_Bold tracking-wide opacity-85 uppercase mb-4 md:mb-7">
            Biggest achievements
          </h1>
          <p className="font-neue_montreal opacity-70 text-sm md:text-base">
            MockMaster – Your ultimate AI-powered interview platform for
            business cases. 🚀 <br className="hidden sm:block" /> Conduct
            real-time, intelligent mock interviews with instant feedback. 📊{" "}
            <br className="hidden sm:block" /> Sharpen your problem-solving
            skills with dynamic, case-based AI evaluation. 💡{" "}
            <br className="hidden sm:block" /> Ace your next big interview with
            MockMaster – Practice. Perform. Succeed! 🎯
          </p>{" "}
          <BorderBeam
            size={mobile ? 250 : 400}
            duration={5}
            delay={5}
            borderWidth={mobile ? 2 : 3}
            colorFrom="#D448EE"
            colorTo="#19ADD7"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <LinkPreview
            url={`https://mockmaster-inky.vercel.app/`}
            width={mobile ? 350 : 700}
            height={mobile ? 250 : 400}
            quality={100}
            className="z-50"
          >
            <div className="w-full relative h-auto md:h-80 border-y-1 border-gray-300 flex flex-col md:flex-row justify-between items-center transition-all gap-4 md:gap-0 py-4 md:py-0 hover:px-2 md:hover:px-5 hover:opacity-50">
              <div>
                <h1 className="text-xl md:text-2xl font-neue_montreal_Medium uppercase text-center md:text-left">
                  MockMaster.AI
                </h1>
              </div>

              <div className="w-full md:w-auto px-4 md:px-0">
                <Image
                  src={mockmaster}
                  width={mobile ? 300 : 600}
                  height={mobile ? 300 : 600}
                  alt="MockMaster.AI"
                  className="rounded-lg max-w-full h-auto mx-auto"
                />
              </div>
              <div>
                <h1 className="text-base md:text-xl opacity-70 text-center md:text-left">
                  Interaction & Development
                </h1>
              </div>
            </div>
          </LinkPreview>
        </div>
      </div>
      <div className="bg-white mt-8 p-5 rounded-lg">
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
                    imageSrc={item.isStatic ? item.img : undefined}
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
