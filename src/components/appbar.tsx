"use client";
import { Bars3Icon, EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { MutableRefObject, useContext, useState } from "react";
import { ThemeContext } from "@/app/page";

type AppBarType = {
  changeTheme: (value: string) => void;
  scrollToContact: () => void;
  scrollToWorks: () => void;
};

const AppBar = ({
  changeTheme,
  scrollToContact,
  scrollToWorks,
}: AppBarType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{
              ease: "easeIn",
            }}
            className={`lg:hidden w-full h-60 absolute z-50 left-0 mt-20 ${
              theme?.theme == "light" ? "bg-violet-50" : "bg-slate-900 "
            } drop-shadow-lg flex flex-col justify-between items-center py-6`}
          >
            <button
              onClick={scrollToWorks}
              className="hover:text-violet-700 transition-all duration-200"
            >
              Works
            </button>

            <a
              className="hover:text-violet-700 transition-all duration-200"
              href="https://github.com/bibmode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            <button
              onClick={() => {
                console.log(theme?.theme);

                theme?.theme == "light"
                  ? changeTheme("dark")
                  : changeTheme("light");
              }}
              className="flex hover:text-violet-700 transition-all duration-200"
            >
              {theme?.theme == "dark" ? (
                <SunIcon className="h-6 w-6 mr-2 " />
              ) : (
                <MoonIcon className="h-6 w-6 mr-2 " />
              )}
              <h6>Mode</h6>
            </button>

            <button
              onClick={scrollToContact}
              className="flex bg-violet-700 py-2 px-20 text-slate-50 rounded-lg hover:scale-105 transition-all duration-150"
            >
              <EnvelopeIcon className="h-6 w-6 mr-2 text-slate-50 fill-current" />
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: "-20%", opacity: 0 }}
        animate={{
          y: "0%",
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 2,
          ease: "easeInOut",
        }}
        className={`w-full py-6 z-[70] ${
          theme?.theme == "light" ? "bg-violet-50" : "bg-slate-900"
        }`}
      >
        <div className="flex w-full container mx-auto ">
          <div className="flex-none w-60 hidden lg:flex items-center">
            <button
              onClick={scrollToWorks}
              className="hover:text-violet-700 transition-all duration-200 mr-12"
            >
              Works
            </button>
            <a
              className="hover:text-violet-700 transition-all duration-200"
              href="https://github.com/bibmode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <h3 className="flex-1 flex ml-[32px] lg:ml-0 justify-center items-center font-handwriting text-2xl">
            Genevieve Navales
          </h3>
          <div className="flex-none w-60 hidden lg:flex items-center justify-between ">
            <button
              onClick={() => {
                console.log(theme?.theme);

                theme?.theme == "light"
                  ? changeTheme("dark")
                  : changeTheme("light");
              }}
              className="flex hover:text-violet-700 transition-all duration-200"
            >
              {theme?.theme == "dark" ? (
                <SunIcon className="h-6 w-6 mr-2 " />
              ) : (
                <MoonIcon className="h-6 w-6 mr-2 " />
              )}
              <h6>Mode</h6>
            </button>
            <button
              onClick={scrollToContact}
              className="flex bg-violet-700 py-2 px-4 text-slate-50 rounded-lg hover:scale-105 transition-all duration-150"
            >
              <EnvelopeIcon className="h-6 w-6 mr-2 text-slate-50 fill-current" />
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setOpenMenu(true)}
            className={`lg:hidden ${openMenu == true && "hidden"}`}
          >
            <Bars3Icon className="h-8 w-8 text-slate-700" />
          </button>
          <button
            onClick={() => setOpenMenu(false)}
            className={`lg:hidden  ${openMenu == false && "hidden"}`}
          >
            <XMarkIcon className="h-8 w-8 text-slate-700" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default AppBar;
