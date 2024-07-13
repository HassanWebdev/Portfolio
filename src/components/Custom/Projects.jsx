"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import bloging from "@/app/img/Screenshot 2024-07-07 121628.png";
import ecommerce from "@/app/img/Screenshot 2024-07-07 121658.png";
import ochi from "@/app/img/Screenshot 2024-07-07 121719.png";
import scss from "@/app/img/Screenshot 2024-07-07 121743.png";
import tailwind from "@/app/img/Screenshot 2024-07-07 121803.png";
import jquery from "@/app/img/Screenshot 2024-07-07 125308.png";
import bootstrap from "@/app/img/Screenshot 2024-07-07 121846.png";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
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
    responsive.add("(max-width: 650px)",()=>{
      gsap.from('.mobilelinks',{
        scale:0,
        ease:'power1.inOut',
        stagger:.2,
        scrollTrigger:{
          trigger: '.desklinks',
          start: "top 78%", 
          end: "bottom bottom",
        }
      })
    })
    return () => {
      window.removeEventListener("resize", getwidth);
    };
  });
  const projects = [
    {
      project: "Bloging",
      url: "https://next-js-drab-chi.vercel.app/",
      text: " Interaction & Development",
      img: bloging,
    },
    {
      project: "E-commerce",
      url: "https://reactproject0896.netlify.app/",
      text: "Design & Development",
      img: ecommerce,
    },
    {
      project: "Ochi-Design",
      url: "https://ochiclone0896.netlify.app/",
      text: "Design & Development",
      img: ochi,
    },
    {
      project: "Scss",
      url: "https://scss-project0896.netlify.app/",
      text: " Interaction & Development",
      img: scss,
    },
    {
      project: "Tailwind",
      url: "https://tailwind-project0896.netlify.app/",
      text: "Design & Development",
      img: tailwind,
    },
    {
      project: "J-Query",
      url: "https://jquery-project0896.netlify.app/",
      text: " Interaction & Development",
      img: jquery,
    },
    {
      project: "Bootstrap",
      url: "https://bootstrap-project011.netlify.app/",
      text: " Interaction & Development",
      img: bootstrap,
    },
  ];
  useGSAP(()=>{
    responsive.add("(min-width: 651px)",()=>{
      gsap.from('#desklinks',{
        opacity:0,
        ease:'power4.out',
        stagger:.4,
        scrollTrigger:{
          trigger: '.desklinks',
          start: "top 65%", 
          end: "bottom bottom",
        }
      })
    })
  })
  return (
    <div className="bg-zinc-50 font-neue_montreal w-full  pt-5 px-5 md:px-10">
      <div className="pb-10">
        <h1 className="text-xl font-neue_montreal tracking-wide opacity-85 uppercase ">
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
                  <BorderBeam size={200} duration={3} delay={2} borderWidth={2} colorFrom="#D448EE" colorTo="#19ADD7" />
                </a>
              );
            })}       
          </div>
        ) : (
          projects.map((item, index) => {
            return (
              <div key={index} id="desklinks" >
                <LinkPreview
                  url={`${item.url}`}
                  width={400}
                  height={300}
                  quality={100}
                  className="z-50"
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
  );
}

export default Projects;
