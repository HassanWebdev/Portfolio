"use client";

import React, { useState } from "react";
import { Download, FileText, Sparkles } from "lucide-react";

const ResumeFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "/img/Hassan Resume.pdf";
    link.download = "Hassan_Raza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset downloading state after animation
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group font-neue_montreal_Bold">
      {/* Floating Button Container */}
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isDownloading}
        className="relative flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden border border-gray-300 bg-white"
        aria-label="Download Resume"
      >
        {/* Split Background - Black Left, White Right */}
        <div
          className={`absolute inset-0 flex transition-all duration-700 ease-in-out ${
            isHovered ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="w-1/2 h-full bg-black" />
          <div className="w-1/2 h-full bg-white" />
        </div>

        {/* Inverted Split Background for Hover - White Left, Black Right */}
        <div
          className={`absolute inset-0 flex transition-all duration-700 ease-in-out ${
            isHovered ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-1/2 h-full bg-white" />
          <div className="w-1/2 h-full bg-black" />
        </div>

        {/* Content with mix-blend-mode */}
        <div className="relative z-10 flex items-center gap-3 mix-blend-difference">
          {isDownloading ? (
            // Loading Animation
            <>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="font-semibold text-white text-sm whitespace-nowrap">
                  Preparing...
                </span>
              </div>
            </>
          ) : (
            // Normal State
            <>
              <div>
                <FileText className="w-5 h-5 text-white" />
              </div>

              {/* Text Label */}
              <span className="font-semibold text-white text-sm whitespace-nowrap">
                Know Me Better
              </span>

              {/* Sparkle Icon */}
              <Sparkles
                className={`w-4 h-4 text-white transition-all duration-300 ${
                  isHovered ? "scale-125 rotate-12" : "scale-100"
                }`}
              />
            </>
          )}
        </div>
      </button>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-2 px-4 py-2 bg-black text-white text-xs rounded-lg whitespace-nowrap transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Download My Resume
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
      </div>
    </div>
  );
};

export default ResumeFloat;
