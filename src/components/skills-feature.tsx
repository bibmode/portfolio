"use client";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const SkillsFeature = () => {
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
      className="container mx-auto"
    >
      <div className="flex justify-around py-16 px-2 rounded-4xl bg-[#FFF2CC]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
            delay: 1.6,
            ease: "easeInOut",
          }}
          variants={childVariants}
          className="flex flex-col w-56"
        >
          <div>
            <DevicePhoneMobileIcon className="h-12 w-12 -ml-2  " />
          </div>
          <h3 className="text-2xl my-4 font-medium">Mobile Development</h3>
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
          className="flex flex-col w-56"
        >
          <GlobeAltIcon className="h-12 w-12 -ml-1  " />
          <h3 className="text-2xl my-4 font-medium">
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
          className="flex flex-col w-56"
        >
          <PaintBrushIcon className="h-12 w-12  " />
          <h3 className="text-2xl my-4 font-medium">Eye for Design</h3>
          <h4>
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
          className="flex flex-col w-56"
        >
          <PresentationChartLineIcon className="h-12 w-12 -ml-1  " />
          <h3 className="text-2xl my-4 font-medium">Startup Experience</h3>
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
