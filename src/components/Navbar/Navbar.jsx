import { motion } from "framer-motion";
import React from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className=" h-[100px] w-full px-24 lg:px-40 flex justify-between  items-center z-10 relative">
      <div className="flex justify-between items-center">
        <Sidebar />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl "
        >
          Peyush
        </motion.span>
      </div>

      <div className=" hidden md:flex gap-5">
        <a href="#">
          <img className="navbar-img" src="/facebook.png" alt="facebook" />
        </a>
        <a href="#">
          <img className="navbar-img" src="/instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img className="navbar-img" src="/youtube.png" alt="youtube" />
        </a>
        <a href="#">
          <img className="navbar-img" src="/dribbble.png" alt="dribbble" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
