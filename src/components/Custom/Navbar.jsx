"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ background }) => {
  const [show, setshow] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const tl = useRef(gsap.timeline({ paused: true }));
  const pathname = usePathname();

  useEffect(() => {
    const getwidth = () => {
      setmobile(window.innerWidth <= 768);
    };
    getwidth();
    window.addEventListener("resize", getwidth);
    return () => window.removeEventListener("resize", getwidth);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  useGSAP(() => {
    tl.current.to(".jk", { x: -60, duration: 0.4, ease: "none" }, 0);
    tl.current.to(".cd", { rotate: 720, duration: 0.4, ease: "none" }, 0);
  });

  const startanimate = () => tl.current.play();
  const stopanimate = () => tl.current.reverse();

  const drawer = () => {
    setshow((prevShow) => {
      const newShow = !prevShow;
      setIsDrawerOpen(newShow);
      gsap.to("#drawer", {
        duration: 0.5,
        translateX: newShow ? "0%" : "100%",
        ease: "power1.inOut",
      });
      return newShow;
    });
  };

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`text-xl overflow-hidden relative flex group px-4 rounded-full ${
          isActive ? "bg-black text-white" : ""
        }`}
      >
        <span
          className={`relative z-10 ${
            isActive
              ? "text-white"
              : "group-hover:text-white transition-colors duration-300"
          }`}
        >
          {children}
        </span>
        {!isActive && (
          <span className="absolute inset-0 bg-black transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
        )}
      </Link>
    );
  };

  return (
    <div
      className={`w-full ${
        mobile ? "px-5" : "px-10"
      } font-neue_montreal overflow-hidden py-4 flex justify-between ${background}  z-50`}
    >
      <Link href="/">
        {" "}
        <div
          className="logo flex"
          onMouseEnter={startanimate}
          onMouseLeave={stopanimate}
        >
          <div>
            <span className="cd px-1 inline-block">©</span>
          </div>
          <div className="w-[7.2rem] whitespace-nowrap overflow-hidden">
            <h1 className="jk font-neue_montreal_Medium">
              Code by Hassan Raza
            </h1>
          </div>
        </div>
      </Link>

      {mobile ? (
        <div className="fixed top-3 right-5 bg-black transition-all text-white hover:text-black hover:border-black hover:border-[1px] hover:bg-white rounded-full z-50">
          <button
            onClick={drawer}
            className="px-4 py-4 rounded-full flex justify-center items-center"
          >
            <AiOutlineMenu />
          </button>
          <div
            id="drawer"
            className="w-full z-50 h-screen overflow-hidden fixed top-0 right-0 backdrop-blur-lg text-white font-neue_montreal translate-x-full"
          >
            <div className="text-white relative w-full h-full px-4 flex flex-col justify-center items-center gap-5 overflow-y-auto">
            <Link
                className="btn font-neue_montreal_Medium text-black relative overflow-hidden group  px-2 py-1 rounded-full"
                href="/"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Home
                </span>
                <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
              <Link
                className="btn font-neue_montreal_Medium text-black relative overflow-hidden group  px-2 py-1 rounded-full"
                href="/About"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  About
                </span>
                <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
              <div className="fixed left-5 top-10 rounded-full transition-all bg-red-400 hover:text-red-400 hover:bg-white hover:border-red-400 hover:border-[1px]">
                <button onClick={drawer} className="p-4">
                  <AiOutlineClose />
                </button>
              </div>
              <Link
                className="btn font-neue_montreal_Medium text-black relative overflow-hidden group  px-2 py-1 rounded-full"
                href="/Projects"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Projects
                </span>
                <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
              <Link
                className="btn font-neue_montreal_Medium text-black relative overflow-hidden group  px-2 py-1 rounded-full"
                href="/Contact"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Contact
                </span>
                <span className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="links flex gap-5">
          {[
            { name: "Home", url: "/" },
            { name: "About", url: "/About" },
            { name: "Projects", url: "/Projects" },
            { name: "Contact", url: "/Contact" },
          ].map((item, indx) => (
            <NavLink key={indx} href={item.url}>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
