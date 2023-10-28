import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "@/app/page";

type ProjectProps = {
  entryNumber: number;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  linkOneType: string;
  linkOne: string;
  linkTwoType: string;
  linkTwo: string;
};

const ProjectDetails = ({
  entryNumber,
  name,
  type,
  description,
  technologies,
  linkOneType,
  linkOne,
  linkTwoType,
  linkTwo,
}: ProjectProps) => {
  const theme = useContext(ThemeContext);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
        exit: { x: "-100vw" },
      }}
      className={`${
        theme?.theme == "dark" && "text-slate-900"
      } absolute mx-auto left-0 right-0 z-20 flex flex-col justify-center items-center w-full h-full`}
    >
      <div className="bg-white border z-30 -mb-10 border-slate-700 rounded-full w-24 h-24 flex justify-center items-center text-4xl">
        {entryNumber}
      </div>
      <div
        className={`${
          entryNumber == 1
            ? "bg-green-400/60"
            : entryNumber == 2
            ? "bg-blue-400/60"
            : entryNumber == 3
            ? "bg-orange-400/60"
            : "bg-violet-400/60"
        } backdrop-blur-md mx-8 sm:max-w-lg max-w-sm text-center pt-16 pb-8 sm:py-16 rounded-4xl border ${
          entryNumber == 1
            ? "border-green-300"
            : entryNumber == 2
            ? "border-blue-300"
            : entryNumber == 3
            ? "border-orange-300"
            : "border-violet-300"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold">{name}</h2>
        <h3 className="text-xl sm:text-2xl pt-4 px-8 sm:px-0">{type}</h3>
        <p className="sm:text-lg font-light py-8 px-8 sm:px-16">
          {description}
        </p>
        <ul className="flex w-full justify-center flex-wrap overflow-x-auto  font-medium text-sm sm:text-md">
          {technologies.map((tech, index) => (
            <li
              key={`project-${index}-key`}
              className={`ml-2 mb-3 border-2 ${
                theme?.theme == "light" &&
                (entryNumber == 1
                  ? "border-green-600 text-green-700"
                  : entryNumber == 2
                  ? "border-blue-600 text-blue-700"
                  : entryNumber == 3
                  ? "border-orange-600 text-orange-700"
                  : "border-violet-600 text-violet-700")
              } ${
                theme?.theme == "dark" &&
                (entryNumber == 1
                  ? "border-green-300 text-black"
                  : entryNumber == 2
                  ? "border-blue-300 text-blue-300"
                  : entryNumber == 3
                  ? "border-orange-300 text-orange-300"
                  : "border-violet-300 text-violet-300")
              } rounded-full px-5 py-1`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 md:px-0 w-full max-w-lg my-5 flex flex-col sm:flex-row justify-between text-xl">
        <a
          href={linkOne}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className={`w-full flex group items-center justify-center py-2 px-4 flex-1 bg-white  border border-slate-700 rounded-xl`}
        >
          <span className="translate-x-[20px] group-hover:-translate-x-1 transition ease-in">
            {linkOneType}
          </span>
          <span className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition ease-in">
            <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
          </span>
        </a>
        <a
          href={linkTwo}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className={`w-full flex group items-center justify-center py-2 px-4 flex-1 bg-white  border border-slate-700 mt-4 sm:mt-0 sm:ml-4 rounded-xl`}
        >
          <span className="translate-x-[20px] group-hover:-translate-x-1 transition ease-in">
            {linkTwoType}
          </span>
          <span className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition ease-in">
            <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
