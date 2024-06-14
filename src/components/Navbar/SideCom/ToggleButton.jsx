import { motion } from "framer-motion";
import React from "react";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] bg-transparent border-none  flex place-content-center pt-[15px] "
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        < motion.path
          d="M3 6H20"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
           variants={{
              close:{ d:"M 2 2.5 L 20 2.5" },
              open:{ d:"M 3 16.5 L 17 2.5" }
           }}
        />
        <motion.path
          d="M 2 9.423 L 20 9.423 "
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"

             variants={{

               close:{opacity:1},
               open:{opacity:0},
            }
             }
        />
        <motion.path
          d="M3 18H20"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            close:{ d:"M 2 16.346 L 20 16.346" },
            open:{ d:"M 3 2.5 L 17 16.346" }
         }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
