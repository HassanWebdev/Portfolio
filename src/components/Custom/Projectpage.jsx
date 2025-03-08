"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import About from "./About2";
import bloging from "@/app/img/Screenshot 2024-07-07 121628.png";
import ecommerce from "@/app/img/Screenshot 2024-07-07 121658.png";
import ochi from "@/app/img/Screenshot 2024-07-07 121719.png";
import scss from "@/app/img/Screenshot 2024-07-07 121743.png";
import tailwind from "@/app/img/Screenshot 2024-07-07 121803.png";
import jquery from "@/app/img/Screenshot 2024-07-07 125308.png";
import bootstrap from "@/app/img/Screenshot 2024-07-07 121846.png";
import { LinkPreview } from "../ui/link-preview";
import mockmaster from "@/components/ui/MockMaster.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { BorderBeam } from "../ui/border-beam";

function Projectpage() {
  const responsive = gsap.matchMedia();
  const projects = [
    {
      project: "MockMaster.AI",
      url: "https://mockmaster-inky.vercel.app/",
      text: " Interaction & Development",
      img: mockmaster,
      year: 2025,
      location: "My Own",
    },,
    {
      project: "Bloging Platform",
      url: "https://next-js-drab-chi.vercel.app/",
      text: "Interaction & Development",
      img: bloging,
      year: 2024,
      location: "Japan",
    },
    {
      project: "Nexcent",
      url: "https://tailwind-project0896.netlify.app/",
      text: "Design & Development",
      img: tailwind,
      year: 2024,
      location: "Australia",
    },
    {
      project: "Fitness Depot",
      url: "https://reactproject0896.netlify.app/",
      text: "Design & Development",
      img: ecommerce,
      year: 2023,
      location: "Germany",
    },
    {
      project: "Ochi-Design",
      url: "https://ochiclone0896.netlify.app/",
      text: "Design & Development",
      img: ochi,
      year: 2021,
      location: "Canada",
    },
    {
      project: "BookMark",
      url: "https://bootstrap-project011.netlify.app/",
      text: "Interaction & Development",
      img: bootstrap,
      year: 2021,
      location: "South Africa",
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
        <div
          id="mouse"
          className={`w-5 h-5 bg-black fixed top-0  left-0 z-[99] rounded-full pointer-events-none `}
        ></div>

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
        <div className="p-5 bg-zinc-200 rounded-lg">
          <div className="relative w-max p-5 items-center ">
            {" "}
            <h1 className="text-3xl  text-gray-900 font-neue_montreal_Bold tracking-wide opacity-85 uppercase mb-7 ">
              Biggest achievements
            </h1>
            <p className="font-neue_montreal opacity-70">
              MockMaster – Your ultimate AI-powered interview platform for
              business cases. 🚀 <br /> Conduct real-time, intelligent mock
              interviews with instant feedback. 📊 <br /> Sharpen your
              problem-solving skills with dynamic, case-based AI evaluation. 💡{" "}
              <br /> Ace your next big interview with MockMaster – Practice.
              Perform. Succeed! 🎯
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
          <div >
            <LinkPreview
              url={`https://mockmaster-inky.vercel.app/`}
              width={700}
              height={400}
              quality={100}
              className="z-50"
            >
              <div className="w-full relative h-80 border-y-1 border-gray-300  flex justify-between items-center transition-all   hover:px-5 hover:opacity-50">
                <div>
                  <h1 className="text-2xl font-neue_montreal_Medium uppercase">
                    MockMaster.AI
                  </h1>
                </div>

                <div>
                  <Image
                    src={mockmaster}
                    width={600}
                    height={600}
                    alt=""
                    className="rounded-lg "
                  />
                </div>
                <div>
                  <h1 className="text-xl opacity-70">
                    Interaction & Development
                  </h1>
                </div>
              </div>
            </LinkPreview>
          </div>
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
