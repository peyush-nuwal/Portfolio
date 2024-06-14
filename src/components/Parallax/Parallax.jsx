import {  motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const Parallax = ({type}) => {
  const ref=useRef()

    const bgAssest=type==='services'?'bg-planets':'bg-sun';
const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start","end start"]
})

const ybg=useTransform(scrollYProgress,[0,1],["0%","250%"])
const yText=useTransform(scrollYProgress,[0,1],["0%","150%"])
const yPlanets=useTransform(scrollYProgress,[0,1],["0%","10%"])
 
  return (
    <div 
    ref={ref}
     className='w-full h-full relative flex justify-center  items-center overflow-hidden'
    style={{background:type==="services "? "linear-gradient(180deg,#111132,#0c0c1d":"linear-gradient(180deg,#111132,#5050564)"}}>
        <motion.h1
         style={{y:ybg}}
        className='text-5xl lg:text-8xl'>{type==="services"?"What We Do?":"What We Did?"}</motion.h1>
        <motion.div className='bg-mountains bg-contain bg-no-repeat lg:bg-cover bg-bottom lg:bg-center w-full h-screen absolute top-0 left-0 z-[3]'></motion.div>b
        <motion.div style={{x:yText}} className='bg-stars bg-cover bg-bottom lg:bg-center w-full h-screen absolute top-0 left-0 z-[1]'></motion.div>
        <motion.div style={{y:yPlanets ,x:yPlanets}} className={`${bgAssest} bg-contain bg-no-repeat lg:bg-cover bg-center lg:bg-center w-full h-screen absolute top-0 left-0 z-[2]`}></motion.div>
    </div>
  )
}

export default Parallax