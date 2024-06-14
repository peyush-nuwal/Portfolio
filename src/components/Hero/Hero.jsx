import { animate, motion } from "framer-motion";
import React from "react";

const Hero = () => {
  const textVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildern: 0.1,
      },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
  };


  const slideVariants={
        initial:{
            x:0
        },
        animate:{
            x:"-220%",
            transition:{
                 repeat:Infinity,
                 repeatType:'mirror',
                 duration:20
            }

        }
  }
  return (
    <div className="Hero overflow-hidden relative lg:flex-row sm:flex-col ">
      <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end  gap-[40px]  ">
        <motion.div variants={textVarients}
         initial='initial'
         animate='animate'
        className=" w-2/3 ">
          <motion.h2
            variants={textVarients}
            className=" text-xl md:text-[30px] text-[rebeccapurple] font-bold tracking-[10px] text-nowrap "
          >
            PEYUSH NUWAL
          </motion.h2>
          <motion.h1
            variants={textVarients}
            className="font-bold  text-3xl md:text-[40px] lg:text-[55px] leading-[57px]  "
          >
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVarients} className="flex gap-5 my-2 flex-col md:flex-row">
            <motion.button variants={textVarients} className="buttons  whitespace-nowrap">
              see the Latest Work
            </motion.button>
            <motion.button variants={textVarients} className="buttons whitespace-nowrap">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
          animate="scrollButton"
            variants={textVarients}
            src="/scroll.png"
            alt=""
            className="w-10"
          />
        </motion.div>
      </div>
      <motion.div variants={slideVariants} initial="initial" animate="animate" className="absolute w-full text-[50vh] bottom-[-10vh] whitespace-nowrap text-[#ffffff09] ">
        Writer Content Creator Influence
      </motion.div>
      <div className="h-full    absolute    lg:top-22 lg:right-16">
        <img src="/hero.png" alt="" className=" h-0 lg:h-[500px] " />
      </div>
    </div>
  );
};

export default Hero;
