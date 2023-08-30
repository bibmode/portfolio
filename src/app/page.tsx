"use client";
import {
  ArrowUpRightIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import AppBar from "../components/appbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import AnimatedIconsBg from "@/components/animated-icons-bg";
import { motion } from "framer-motion";
import SkillsFeature from "@/components/skills-feature";
import ProjectsCarousel from "@/components/projects-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center scroll-smooth">
      <AppBar />
      <div className="w-full flex flex-col justify-center scroll-smooth">
        {/* header */}
        <div className="pt-28 pb-20 relative flex flex-col items-center">
          {/* moving background */}
          <AnimatedIconsBg />

          {/* center header */}
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeIn",
            }}
            className="w-40 h-40 bg-[url('/profile-picture.jpg')] bg-cover rounded-full mb-12 border-4 border-black"
          ></motion.div>
          <motion.h2
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="text-4xl text-center leading-relaxed"
          >
            Welcome to my digital domain! I'm a{" "}
            <em className="not-italic p-2 bg-[#FFE99A] rounded-lg">
              Fullstack Developer
            </em>
            <br />
            with a flair for <b>UI/UX Design.</b>
          </motion.h2>
          <motion.a
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: "easeIn",
            }}
            className="flex border-b-2 border-black py-3 mt-8"
            href="http://"
          >
            CHECK OUT MY FULL RESUME{" "}
            <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
          </motion.a>
        </div>

        {/* skills feature */}
        <SkillsFeature />

        {/* projects header*/}
        <div className="bg-violet-500 py-20 mt-24 text-center font-extrabold  text-[40px] text-white tracking-wider">
          <h2 className="flex justify-center">
            PROJECTS{" "}
            <WrenchScrewdriverIcon className="text-white mx-3 h-12 w-12" />{" "}
            SPEAK
          </h2>
          <h2 className="flex justify-center ml-4">
            LOUDER THAN WORDS{" "}
            <SparklesIcon className="text-white ml-2 h-10 w-10" />{" "}
          </h2>
        </div>

        {/* projects carousel */}
        <ProjectsCarousel />

        {/* contact form */}
        <div className="bg-slate-50 w-full h-screen flex justify-center items-center ">
          <div className="mr-12">
            <h3 className="text-xl text-violet-500">CONTACT</h3>
            <h2 className="text-[40px] font-bold">
              Looking for a reliable
              <br />
              developer?
            </h2>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="flex mt-8 mb-6 w-fit"
            >
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              <h4>vievenavales29@gmail.com</h4>
            </a>
            <a
              className="flex border-b-2 border-black py-1 w-fit"
              href="http://"
            >
              CHECK OUT MY FULL RESUME{" "}
              <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
