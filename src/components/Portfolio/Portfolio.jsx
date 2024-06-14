import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
  {
    id: 1,
    title: "e commerce",
    img: "https://images.pexels.com/photos/25655961/pexels-photo-25655961/free-photo-of-clouds-over-dark-mountains-in-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam temporibus reprehenderit sint id rerum consequatur voluptates et laboriosam? Odio, recusandae architecto? Itaque, distinctio. Inventore corrupti soluta laudantium id quas.",
  },
  {
    id: 2,
    title: "food delivery ",
    img: "https://images.pexels.com/photos/15672781/pexels-photo-15672781/free-photo-of-cloud-over-mountain-peak-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam temporibus reprehenderit sint id rerum consequatur voluptates et laboriosam? Odio, recusandae architecto? Itaque, distinctio. Inventore corrupti soluta laudantium id quas.",
  },
  {
    id: 3,
    title: "landing page",
    img: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam temporibus reprehenderit sint id rerum consequatur voluptates et laboriosam? Odio, recusandae architecto? Itaque, distinctio. Inventore corrupti soluta laudantium id quas.",
  },
  {
    id: 4,
    title: "portfolio",
    img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam temporibus reprehenderit sint id rerum consequatur voluptates et laboriosam? Odio, recusandae architecto? Itaque, distinctio. Inventore corrupti soluta laudantium id quas.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const Y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="flex flex-col md:flex-row w-full h-screen relative top-24 md:top-0 items-center justify-center   md:gap-5 ">
        <div className="flex-1 flex items-center justify-center md:justify-end object-cover w-full md:w-1/2 " ref={ref}>
          <img src={item.img} alt="" className="w-3/4 h-auto md:w-3/4 md:h-full border-[white] border-[2px]" />
        </div>
        <motion.div className="flex-1 px-10 flex flex-col gap-3 lg:gap-6  text-center md:text-left  animated-div" style={{ y: Y }}>
          <h2 className="text-3xl  lg:text-start md:text-5xl">{item.title}</h2>
          <p className="  text-sm md:text-md text-gray-500 w-full md:w-full mx-auto md:mx-0">{item.desc}</p>
          <button className="w-[150px] h-[50px]  bg-orange-500 rounded-lg text-black/70 font-semibold mx-auto md:mx-0">See Demo</button>
        </motion.div>
      </div>
    </section>
  );
};



const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 left-0  pt-[50px]  text-center text-[orange] text-[22px]">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="h-[10px] bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
