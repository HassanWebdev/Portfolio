'use client'
import React, { useState } from 'react';
import mypic from '@/app/img/asli.png';
import Image from 'next/image';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import { BorderBeam } from "@/components/ui/border-beam";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function Hero() {
  useGSAP(()=>{
    window.addEventListener('mousemove',(e)=>{
      gsap.to('#mouse',{
        x:e.clientX,
        y:e.clientY,
        duration:.4,
        ease:'none'
      })
    })
  })
  return (
    <div className=''>
      <div id='mouse' className={`w-5 h-5 bg-black fixed top-0  left-0 z-[99] rounded-full pointer-events-none `}></div>
      <div  className='w-[50%] md:w-[35%] md:h-56 h-40 top-20 md:top-14 bg-white absolute rounded-tr-full rounded-br-full z-10 mix-blend-difference '></div>
      <div  className='w-[35%] md:h-56 h-40  md:bg-white absolute right-0 bottom-0  rounded-tl-full rounded-bl-full z-40 mix-blend-difference '></div>
      <div className='text-white w-full flex justify-center items-center'>
        <div className='relative z-10 mix-blend-normal'>
        <Image
          src={mypic}
          alt='no img'
          width={400}
          height={600}
          className='grayscale-[95%] '
        />
        <BorderBeam size={250} duration={5} delay={5} borderWidth={4} />
        </div>
       
      </div>
      <div className='absolute md:bottom-0 bottom-16 w-full  overflow-hidden z-20  pointer-events-none'>
        <VelocityScroll
          text='Hassan__Raza__'
          default_velocity={5}
          className=' text-white text-[10rem] md:text-[15rem] font-neue_montreal leading-none'
        />
      </div>
      <div className='absolute md:top-10 top-20 w-full  overflow-hidden pointer-events-none '>
        <VelocityScroll
          text='MERN - Developer -'
          default_velocity={5}
          className=' text-white text-[10rem] md:text-[15rem] font-neue_montreal  leading-none'
        />
      </div>
    </div>
  );
}

export default Hero;
