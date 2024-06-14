import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Services = () => {
  const info = [
    {
      id: 1,
      title: "Branding",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ab incidunt, inventore quae obcaecati repellat vel veniam est odio blanditiis nesciunt.",
    },
    {
      id: 2,
      title: "Branding",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ab incidunt, inventore quae obcaecati repellat vel veniam est odio blanditiis nesciunt.",
    },
    {
      id: 3,
      title: "Branding",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ab incidunt, inventore quae obcaecati repellat vel veniam est odio blanditiis nesciunt.",
    },
    {
      id: 4,
      title: "Branding",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, ab incidunt, inventore quae obcaecati repellat vel veniam est odio blanditiis nesciunt.",
    },
  ];

  const firstVariant = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const secondVariant = {
    right: {
      initial: {
        x: -400,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      },
    },
    left: {
      initial: {
        x: 400,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      },
    },
  };

  const thirdVariant = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "stagger",
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  const ref = useRef();
  const inView = useInView(ref, { margin: "-50%" });
  
  return (
    <motion.div
      initial="initial"
      animate={inView ? "animate" : ""}
      ref={ref}
      className=" h-[98vh]  md:h-screen flex reltive flex-col justify-between items-center gap-10 overflow-hidden p-10"
      style={{ background: "linear-gradient(180deg,#111132,#0c0c1d) " }}
    >
      <motion.div
        initial="initial"
        animate={inView ? "animate" : ""}
        variants={firstVariant}
        className="flex-1 w-1/2 lg:w-[470px] self-end flex  justify-end items-center  g  "
      >
        <p className="font-extralight  text-md text-nowrap text-[gray] text-right ">
          I focus on helping your brand grow <br />
          and more forword
        </p>
        <hr
          className="  border-t-0.5 border-gray-300 w-full sm:w-0 md:w-[200px] mx-auto "
          
        />
      </motion.div>
      <motion.div className="flex-2 flex flex-col gap-3">
        <motion.div
          initial="initial"
          animate={inView ? "animate":""}
          variants={secondVariant.left}
          className="flex items-center gap-2"
        >
          <img
            src="/people.webp"
            alt=""
            className="w-[150px] h-[60px]  md:w-[250px] md:h-[80px] object-cover rounded-full"
          />
          <h1 className="text-xl md:text-3xl font-thin  ">
            <motion.b whileHover={{ color: "orange" }} className="font-bold ">
              Unique
            </motion.b>{" "}
            ideas
          </h1>
        </motion.div>
        <motion.div
          initial="initial"
          animate={inView ? "animate":""}
          variants={secondVariant.right}
          className="flex items-center gap-2"
        >
          <h1 className="  text-xl md:text-3xl font-thin text-nowrap ">
            <motion.b whileHover={{ color: "orange" }} className="font-bold ">
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button className="w-[150px] h-[60px]   md:w-[250px] md:h-[80px] bg-[orange] rounded-full 
          text-sm  md:text-2xl md:font-medium font-bold text-black/60 ">
            WHAT WE DO?
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "animate":""}
        variants={thirdVariant}
        className="flex-2 grid  p-10 lg:0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[600px] w-screen lg:max-w-[1000px]  -mt-12 md:-mt-[10px]"
      >
        {info.map((item, index) => (
          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            variants={thirdVariant}
            key={item.id}
            className=" border-gray border-[1px] flex flex-col gap-2 px-3 py-4"
          >
            <h2 className="text-base md:text-xl font-bold">{item.title}</h2>
            <p className=" text-sm md:text-base  ">{item.desc}</p>
            <button className="bg-[orange] w-full text-black p-1">Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
