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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyntheticEvent, useRef, useState } from "react";
import { ThemeContext } from "@/utilities/constants";

const Home = () => {
  const [theme, setTheme] = useState<string>("light");
  const contactRef = useRef<null | HTMLDivElement>(null);
  const worksRef = useRef<null | HTMLDivElement>(null);

  const changeTheme = (value: string) => {
    setTheme(value);
  };

  const scrollToContact = () => {
    if (contactRef && contactRef.current /* + other conditions */) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToWorks = () => {
    if (worksRef && worksRef.current /* + other conditions */) {
      worksRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <main
        className={`flex min-h-screen flex-col items-center ${
          theme == "light" ? "bg-violet-50" : "bg-slate-900 text-white"
        }`}
      >
        <ToastContainer />
        <AppBar
          changeTheme={changeTheme}
          scrollToContact={scrollToContact}
          scrollToWorks={scrollToWorks}
        />
        <div className="w-full flex flex-col justify-center ">
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
              className="w-40 h-40 bg-[url('/profile-picture.png')] z-40 bg-cover rounded-full mb-12 border-4 border-black"
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
              className="text-2xl md:text-4xl text-center leading-relaxed z-40 mx-8"
            >
              Welcome to my digital domain! I&apos;m a{" "}
              <em
                className={`not-italic p-2  ${
                  theme == "light" ? "bg-[#FFE99A]" : "bg-violet-600"
                } rounded-lg`}
              >
                Fullstack Developer
              </em>
              <br />
              with a flair for <b>UI/UX Design.</b>
            </motion.h2>
            <motion.a
              href="https://drive.google.com/file/d/1DBw8dEVKVNqNDubI9re-Rx6nvwGUH-ma/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
              className={`flex border-b-2 ${
                theme == "light"
                  ? "border-black hover:border-violet-600 hover:text-violet-600"
                  : "border-white hover:border-violet-500 hover:text-violet-400"
              } z-40 py-3 mt-8 hover:tracking-widest transition-all duration-200`}
            >
              CHECK OUT MY FULL RESUME{" "}
              <ArrowUpRightIcon className={`h-6 w-6 ml-2 `} />
            </motion.a>
          </div>

          <div className="relative">
            {/* skills feature */}
            <SkillsFeature />

            {/* projects header*/}
            <div className="bg-violet-600 pb-24 pt-72 text-center font-extrabold flex flex-col items-center text-3xl lg:text-[40px] text-white tracking-wider">
              <h2 className="sm:flex justify-center">
                PROJECTS{" "}
                <WrenchScrewdriverIcon className="text-white mx-3 h-12 w-12 hidden sm:block" />{" "}
                SPEAK
              </h2>
              <h2 className="flex justify-center ml-4">
                LOUDER THAN WORDS{" "}
                <SparklesIcon className="text-white ml-2 h-10 w-10  hidden sm:block" />{" "}
              </h2>
              <p className="font-medium text-lg lg:text-xl tracking-normal lg:w-[800px] my-6 mx-8 text-center">
                Dive into a collection of my recent projects that demonstrate my
                skills and passion. Each project tells a story of innovation,
                creativity, and problem-solving.
              </p>
            </div>
          </div>

          {/* projects carousel */}
          <ProjectsCarousel carouselRef={worksRef} />

          {/* contact form */}
          <div
            ref={contactRef}
            className={`${
              theme == "light" ? "bg-violet-50/50" : "bg-gray-800"
            }  w-full h-screen flex flex-col lg:flex-row justify-center items-center px-12 xl:px-0`}
          >
            <div className="lg:mr-12 w-full px-8 mb-16 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-lg">
              <h3 className="text-lg lg:text-xl text-violet-500 lg:mb-4">
                CONTACT
              </h3>
              <h2 className="text-3xl lg:text-[40px] font-bold leading-normal">
                Looking for a reliable developer?
              </h2>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vievenavales@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm lg:text-base flex mt-8 mb-6 w-fit hover:text-violet-600"
              >
                <EnvelopeIcon className="h-6 w-6 mr-2 " />
                <h4>vievenavales29@gmail.com</h4>
              </a>
              <a
                href="https://drive.google.com/file/d/1DBw8dEVKVNqNDubI9re-Rx6nvwGUH-ma/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm lg:text-base flex border-b-2 ${
                  theme == "light" ? "border-black" : "border-white"
                }  py-1 w-fit hover:border-violet-600 hover:text-violet-600 transition-all`}
              >
                CHECK OUT MY FULL RESUME{" "}
                <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
              </a>
            </div>

            <ContactForm />
          </div>

          <div className="bg-violet-600 w-full flex flex-col justify-center items-center py-20 text-white">
            <h2 className="text-lg lg:text-3xl font-semibold">
              Explore the Source Code
            </h2>
            <p className="text-center text-lg lg:text-xl pt-4 pb-8">
              Curious to see how my portfolio is built? Check out the
              <br />
              code on GitHub!
            </p>
            <a
              href="https://github.com/bibmode/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-violet-600 font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all duration-200"
            >
              <i className="fa-brands fa-github mr-3 text-xl" />
              View on Github
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
};

export default Home;
