'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceTimeline = [
    {
      year: 2024,
      role: "Senior React.js Developer",
      company: "Rev9-Solution",
      achievements: "Implementing advanced React patterns",
      technologies: ["React.js", "Redux", "TypeScript", "Next.js"],
    },
    {
      year: 2022,
      role: "React.js Developer",
      company: "TechInnovate Systems",
      achievements: "Developed scalable React applications",
      technologies: ["React.js", "Redux", "Jest", "Webpack"],
    },
    {
      year: 2020,
      role: "Frontend Developer",
      company: "WebSphere Solutions",
      achievements: "Built responsive web applications",
      technologies: ["JavaScript", "Vue.js", "CSS3", "Git"],
    },
    {
      year: 2018,
      role: "Junior Web Developer",
      company: "Digital Creations Co.",
      achievements: "Assisted in UI/UX improvements",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    },
    {
      year: 2017,
      role: "Web Design Intern",
      company: "StartUp Innovations",
      achievements: "Learned basics of web development",
      technologies: ["Adobe Photoshop", "HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mainexperience",
        start: "top 65%",
        end: "bottom bottom",
      }
    });

    tl.from('.experience-card', {
      x: (index, target) => {
        if (window.innerWidth < 768) return 0; 
        return index % 2 === 0 ? '-200%' : '200%';
      },
      y: (index, target) => {
        if (window.innerWidth >= 768) return 0;
        return '100%';
      },
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.4
    });
  }, []);

  return (
    <div id="mainexperience" className="bg-gray-100 min-h-screen p-5 sm:p-10 font-neue_montreal">
      <h1 className="text-3xl sm:text-4xl font-neue_montreal_Bold text-center mb-8 sm:mb-12 text-gray-800 tracking-wide">Professional Journey</h1>
      <div className="max-w-6xl mx-auto">
        {experienceTimeline.map((experience, index) => (
          <div key={index} className="experience-card mb-16 flex flex-col md:flex-row">
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:order-1' : 'md:pl-8 md:order-2'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <h2 className="text-xl font-neue_montreal_Bold text-gray-800 mb-2">{experience.role}</h2>
                <h3 className="text-lg font-neue_montreal_Medium text-gray-600 mb-2">{experience.company}</h3>
                <p className="text-gray-600 mb-4">{experience.achievements}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <button 
                      key={techIndex} 
                      className="relative overflow-hidden font-neue_montreal tracking-wider px-3 py-1 rounded-full text-gray-700 border border-gray-300 group"
                    > 
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {tech}
                      </span>
                      <span className="absolute inset-0 bg-gray-700 transform scale-y-0 origin-top group-hover:origin-bottom-right group-hover:scale-y-100 transition-transform duration-300 ease-out"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 0 ?  'md:justify-start' : 'md:justify-end'} items-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} mt-4 md:mt-0`}>
              <span className="font-neue_montreal_Bold text-3xl md:text-4xl text-gray-600">{experience.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;