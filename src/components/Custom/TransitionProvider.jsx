'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

const TransitionProvider = ({ children }) => {
  const pathname = usePathname()
  const transitionRef = useRef(null)
  const textRef = useRef(null)
  const [currentPath, setCurrentPath] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setCurrentPath(pathname)
    const setname = ()=>{
        if(pathname.includes('/About')){
          setCurrentPath('About')
        } else if(pathname.includes('/Projects')){
          setCurrentPath('Projects')
        } else if(pathname.includes('/Contact')){
          setCurrentPath('Contact')
        } else {
          setCurrentPath('Home')
        }
    }
    setname()
    setIsTransitioning(true)

    if (transitionRef.current && textRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setIsTransitioning(false)
      })

      tl.set(transitionRef.current, { scaleY: 0 })
        .to(transitionRef.current, {
          duration: 0.5,
          scaleY: 1,
          transformOrigin: 'bottom',
          ease: 'power4.Out',
        })
        .to(textRef.current, {
          duration: 0.4,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }, '-=0.3')
        .to(textRef.current, {
          duration: 0.4,
          opacity: 0,
          y: -20,
          ease: 'power3.in',
        }, '+=0.5')
        .to(transitionRef.current, {
          duration: 0.5,
          scaleY: 0,
          transformOrigin: 'top',
          ease: 'power4.Out',
          delay:.5
        }, '-=0.5')
    }
  }, [pathname])

  return (
    <>
      <div
        ref={transitionRef}
        className='text-white rounded-bl-xl rounded-br-xl'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'black',
          transform: 'scaleY(0)',
          zIndex: 9980,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          ref={textRef}
          className='font-neue_montreal_Medium uppercase tracking-wider '
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            fontSize: '2rem',
          }}
        >
          {currentPath}
        </h2>
      </div>
      {!isTransitioning && children}
    </>
  )
}

export default TransitionProvider