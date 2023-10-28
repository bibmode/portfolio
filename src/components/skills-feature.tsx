"use client";
import { ThemeContext } from "@/utilities/constants";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useContext } from "react";

const SkillsFeature = () => {
  const theme = useContext(ThemeContext);

  const childVariants = {
    hidden: { y: "50%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0 }}
      animate={{
        y: "0%",
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1.5,
          ease: "easeInOut",
        },
      }}
      transition={{
        duration: 1,
        delay: 1.5,
        ease: "easeInOut",
        staggerChildren: 0.5,
      }}
      className="md:container mx-8 md:mx-auto z-50 -mb-40"
    >
      <div
        className={`${
          theme?.theme == "light"
            ? "bg-white border-slate-300"
            : "bg-gray-800 border-slate-700"
        } py-20 px-12 md:px-20 xl:px-28 rounded-4xl   border  grid md:grid-cols-2 xl:grid-cols-4 gap-20 xl:gap-28`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1.6,
            ease: "easeInOut",
          }}
          variants={childVariants}
          className="flex flex-col"
        >
          <div>
            <DevicePhoneMobileIcon
              className={`h-12 w-12 -ml-2  ${
                theme?.theme == "light" ? "text-violet-700" : "text-white"
              }`}
            />
          </div>
          <h3 className="text-2xl my-4 font-semibold">Mobile Development</h3>
          <h4>
            Adept in Flutter, I engineer captivating mobile experiences,
            seamlessly harmonizing form and function to engage users
            effectively.
          </h4>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1.7,
            ease: "easeInOut",
          }}
          variants={childVariants}
          className="flex flex-col"
        >
          <GlobeAltIcon
            className={`h-12 w-12 -ml-1  ${
              theme?.theme == "light" ? "text-violet-700" : "text-white"
            }`}
          />
          <h3 className="text-2xl my-4 font-semibold">
            Web
            <br />
            Development
          </h3>
          <h4>
            Mastery of Next.js and Flask empowers me to architect streamlined
            web solutions, ensuring optimal user interactions and performance.
          </h4>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1.8,
            ease: "easeInOut",
          }}
          variants={childVariants}
          className="flex flex-col"
        >
          <PaintBrushIcon
            className={`h-12 w-12 ${
              theme?.theme == "light" ? "text-violet-700" : "text-white"
            }`}
          />
          <h3 className="text-2xl my-4 font-semibold">Eye for Design</h3>
          <h4 className={`${theme?.theme == "dark" && ""}`}>
            My design prowess amplifies user engagement through aesthetically
            pleasing interfaces, enriched with intuitive interactions and
            animations.
          </h4>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1.9,
            ease: "easeInOut",
          }}
          variants={childVariants}
          className="flex flex-col"
        >
          <PresentationChartLineIcon
            className={`h-12 w-12 -ml-1  ${
              theme?.theme == "light" ? "text-violet-700" : "text-white"
            }`}
          />
          <h3 className="text-2xl my-4 font-semibold">Startup Experience</h3>
          <h4>
            Champion of the StartU Hackathon and TECHpreneurs StartUp
            Championship, I excel in high-paced environments, infusing
            innovation and adaptability into every project.
          </h4>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsFeature;
