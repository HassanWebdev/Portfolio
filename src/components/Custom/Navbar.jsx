"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";
import { AiOutlineMenu } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const [mobile, setmobile] = useState(false);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const getwidth = () => {
      if (window.innerWidth > 768) {
        setmobile(false);
      } else {
        setmobile(true);
      }
    };
    getwidth();
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setmobile(false);
      } else {
        setmobile(true);
      }
    });
  });

  useGSAP(() => {
    tl.current.to(
      ".jk",
      {
        x: -60,
        duration: 0.4,
        ease: "none",
      },
      0
    );
    tl.current.to(
      ".cd",
      {
        rotate: 720,
        duration: 0.4,
        ease: "none",
      },
      0
    );
  });

  const startanimate = () => {
    tl.current.play();
  };
  const stopanimate = () => {
    tl.current.reverse();
  };

  const drawer = () => {
    setshow((prevShow) => {
      const newShow = !prevShow;
      gsap.to("#drawer", {
        duration: 0.5,
        translateX: newShow ? "0%" : "100%",
        ease: "power1.inOut",
      });
      return newShow;
    });
  };
  return (
    <div
      className={`w-full ${
        mobile ? "px-4" : "px-10"
      }   font-neue_montreal py-4 flex justify-between text-white z-50`}
    >
      <div
        className="logo flex"
        onMouseEnter={startanimate}
        onMouseLeave={stopanimate}
      >
        <div>
          <span className="cd px-1 inline-block">©</span>
        </div>
        <div className="w-[7.2rem] whitespace-nowrap overflow-hidden">
          <h1 className="jk font-neue_montreal_Medium ">Code by Hassan Raza</h1>
        </div>
      </div>
      {mobile ? (
        <div className=" fixed top-3 right-5 bg-black transition-all hover:text-black hover:border-black hover:border-[1px] hover:bg-white rounded-full z-50 ">
          <button
            onClick={drawer}
            className="px-4 py-4 rounded-full flex justify-center items-center"
          >
            {" "}
            <AiOutlineMenu />{" "}
          </button>
          <div
            id="drawer"
            className={`w-full z-50 h-full overflow-hidden fixed top-0 right-0 backdrop-blur-lg text-white font-neue_montreal translate-x-full`}
          >
            <div className="text-white relative w-screen h-screen px-4  flex  flex-col justify-center items-center gap-5">
              <a
                id="about"
                className="z-10 overflow-hidden text-xl relative flex after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:rounded-full after:scale-x-1 after:duration-300 after:origin-right after:transition after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
                href="about"
              >
                About
              </a>
              <div className=" fixed left-5 top-10 rounded-full  transition-all bg-red-400  hover:text-red-400 hover:bg-white hover:border-red-400 hover:border-[1px]">
                <button onClick={drawer} className="p-4">
                  {" "}
                  <AiOutlineClose />
                </button>
              </div>
              <div className="w-40 h-40   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BorderBeam
                  size={250}
                  duration={3}
                  delay={3}
                  borderWidth={2}
                  colorFrom="#D448EE"
                  colorTo="#19ADD7"
                />
              </div>
              <Link
                id="projects"
                className="text-xl overflow-hidden relative flex after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:rounded-full after:scale-x-1 after:duration-300 after:origin-right after:transition after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                id="contact"
                className="text-xl overflow-hidden relative flex after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:rounded-full after:scale-x-1 after:duration-300 after:origin-right after:transition after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="links flex gap-5">
          {
            [{
              name:'About',
              url:'/About'
            },{
              name:'Projects',
              url:'/Projects'
            },{
              name:'Contact',
              url:'/Contact'
            }].map((item,indx)=>{
              return (
                 <Link
                 key={indx}
                id="projects"
                className="text-xl overflow-hidden relative flex group px-2  rounded-full"
                href={`${item.url}`}
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
              </Link>
              )
            })
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
