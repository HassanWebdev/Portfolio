'use client'
import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";

function Playfull() {
  const[mobile,setmobile] = useState(false)
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
    const getwidth = ()=>{
      if(window.innerWidth > 768){
        setmobile(false)
      }
      else{
        setmobile(true)
      }
    }
    getwidth()
    window.addEventListener("resize",()=>{
      if(window.innerWidth > 768){
        setmobile(false)
      }
      else{
        setmobile(true)
      }
    })
  });
  return (
<div>
  {
    mobile ? '':(<div className="w-full h-64 relative overflow-hidden bg-white px-10">
      <div  className="Eyes  relative  ">
        <div className="Eye1 absolute  w-40 h-40 bg-gradient-to-l from-zinc-900 to-gray-50 rounded-full left-0">
          <div className="Blackpart w-32 h-32 bg-gradient-to-r from-zinc-900 to-gray-50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="line  w-full h-[5vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="whitepart w-10 h-10 rounded-full bg-gradient-to-b from-zinc-900 to-gray-50 flex items-center justify-center">
                <div className="w-[3vw] h-[3vw] md:w-[1vw] md:h-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Eye2 absolute w-40 h-40 bg-gradient-to-l from-zinc-900 to-gray-50 rounded-full right-0">
          <div className="Blackpart  w-32 h-32 bg-gradient-to-r from-zinc-900 to-gray-50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg) ` }}
              className="line w-full h-[5vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 "
            >
              <div className="whitepart w-10 h-10 rounded-full bg-gradient-to-b from-zinc-900 to-gray-50 flex justify-center items-center">
                <div className="w-[3vw] h-[3vw] md:w-[1vw] md:h-[1vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
</div>
  );
}

export default Playfull;