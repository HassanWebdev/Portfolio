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
            className="w-full z-50 h-screen overflow-hidden fixed top-0 right-0 backdrop-blur-lg bg-black/30 text-white font-neue_montreal translate-x-full"
          >
            <div className="relative w-full h-full px-8 py-20 flex flex-col justify-center items-start overflow-y-auto">
              {/* Close Button */}
              <button 
                onClick={drawer} 
                className="fixed top-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <AiOutlineClose className="text-white text-xl" />
              </button>

              {/* Navigation Links */}
              <nav className="w-full space-y-6">
                {[
                  { name: "Home", url: "/" },
                  { name: "About", url: "/About" },
                  { name: "Projects", url: "/Projects" },
                  { name: "Contact", url: "/Contact" },
                ].map((item, index) => {
                  const isActive = pathname === item.url;
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      onClick={drawer}
                      className={`block w-full group ${isActive ? "opacity-100" : "opacity-70"}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-neue_montreal_Medium text-white/50">
                          0{index + 1}
                        </span>
                        <div className="relative flex-1">
                          <span className={`text-4xl font-neue_montreal_Medium block transition-all duration-300 ${
                            isActive 
                              ? "text-white translate-x-2" 
                              : "text-white group-hover:translate-x-4 group-hover:text-white"
                          }`}>
                            {item.name}
                          </span>
                          <span className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                            isActive 
                              ? "w-full" 
                              : "w-0 group-hover:w-full"
                          }`}></span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* Footer Text */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm text-white/40 font-neue_montreal">
                  © Code by Hassan Raza
                </p>
              </div>
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
