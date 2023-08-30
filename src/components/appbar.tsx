"use client";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const AppBar = () => {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: "0%",
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
        ease: "easeInOut",
      }}
      className="w-full py-6 z-20"
    >
      <div className="flex w-full container mx-auto ">
        <div className="flex-none w-60 flex justify-between items-center">
          <a
            className=""
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className=""
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Works
          </a>
          <a
            className=""
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <a
            className="font-handwriting text-2xl"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Genevieve Navales
          </a>
        </div>
        <div className="flex-none w-60 flex items-center justify-between">
          <button className="flex ">
            <SunIcon className="h-6 w-6 mr-2 " />
            <h6>Mode</h6>
          </button>
          <button className="flex bg-violet-500 py-2 px-4 text-slate-50 rounded-lg">
            <EnvelopeIcon className="h-6 w-6 mr-2 text-slate-50 fill-current" />
            Hire Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AppBar;
