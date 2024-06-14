import React, { useState } from "react";
import ToggleButton from "./SideCom/ToggleButton";
import Links from "./SideCom/Links";
import { delay, motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 20,
      },
    },
    close: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "close"}
      className="flex flex-col  items-center justify-center bg-white text-white"
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 bottom-0 w-[400px] bg-white text-black"
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
