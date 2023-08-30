"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const AnimatedIconsBg = () => {
  return (
    <div className="container h-[600px] -z-10 absolute top-4 overflow-x-hidden overflow-y-visible">
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [10, 50, 10],
        }}
        transition={{
          duration: 9.3,
          repeat: Infinity,
          delay: 3,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/css-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [50, 30, 50],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          delay: 0,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/dart-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [100, 180, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/firebase-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [300, 200, 250],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 0,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/flutter-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [250, 300, 280],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 4,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/git-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [200, 300, 380],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 8,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/html-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [100, 200, 180],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 5,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/javascript-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [80, 130, 70],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 3,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/mongodb-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [40, 20, 60],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 7,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/mysql-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [-100, -60, -100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 4,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/nextjs-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [-70, -30, -70],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 6,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/npm-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [-120, -100, -130],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 7.5,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/postgresql-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [-150, -100, -160],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1.8,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/react-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [200, 180, 115],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 8.3,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/supabase-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [100, 180, 50],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 1.6,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/tailwindcss-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{
          x: "100%",
          opacity: [0, 0.7, 0],
          y: [180, 50, 180],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          delay: 1.6,
          ease: "easeIn",
        }}
      >
        <Image
          src="/code-icons/typescript-icon.png" // Replace with your image path
          alt="CSS Icon"
          width={24}
          height={24}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedIconsBg;
