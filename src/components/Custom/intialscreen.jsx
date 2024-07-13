'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const InitialLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const screenRef = useRef(null)
  const textRef = useRef(null)
  const loaderRef = useRef(null)

  const nameVersions = [
    "Hassan Raza",
    "حسن رضا",
    "हसन रज़ा",
    "Хасан Раза",
    
  ]

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false)
    })

    

    tl.set(textRef.current, { opacity: 0, y: 20 })
    tl.set(loaderRef.current, { opacity: 0 })

    
    tl.to(screenRef.current, {
      duration: 0.5,
      scaleY: 1,
      ease: 'power3.inOut'
    })
    .to(loaderRef.current, {
      duration: 0.5,
      opacity: 1,
      ease: 'power3.out'
    }, '-=0.3')

    
    nameVersions.forEach((name, index) => {
      if (index > 0) {
        tl.to(textRef.current, {
          duration: 0.3,
          opacity: 0,
          y: -20,
          ease: 'power2.in'
        })
      }
      tl.set(textRef.current, { innerHTML: name })
      tl.to(textRef.current, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      })
      tl.to({}, { duration: .3 })
    })

    
    tl.to([textRef.current, loaderRef.current], {
      duration: 0.5,
      opacity: 0,
      y: -20,
      ease: 'power3.in'
    })
    .to(screenRef.current, {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'power3.inOut'
    }, '-=0.2')

  }, [])

  if (!isLoading) return null

  return (
    <div 
      ref={screenRef}
      className="fixed inset-0 bg-black flex flex-col justify-center cursor-wait items-center z-[9999]"
    >
      <h1 
        ref={textRef}
        className="text-white text-4xl font-bold mb-8 text-center"
      ></h1>
      <div 
        ref={loaderRef}
        className="relative w-24 h-24"
      >
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 border-4 border-green-500 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-red-500 rounded-full animate-ping"></div>
        <div className="absolute inset-6 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

export default InitialLoadingScreen
