import { GetServerSideProps } from "next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import ScrapCycle from "./project-sections/scrapcycle";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import RdpLines from "./project-sections/rdplines";
import Scrapper from "./project-sections/scrapper";
import Gravitea from "./project-sections/gravitea";
import Draggable from "react-draggable";
import { ThemeContext } from "@/app/page";

type CarouselType = {
  carouselRef: MutableRefObject<null | HTMLDivElement>;
};

const ProjectsCarousel = ({ carouselRef }: CarouselType) => {
  const theme = useContext(ThemeContext);
  const [projectNumber, setProjectNumber] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrapcycleRef = useRef<HTMLDivElement>(null);
  const rdpLinesRef = useRef<HTMLDivElement>(null);
  const scrapperRef = useRef<HTMLDivElement>(null);
  const graviteaRef = useRef<HTMLDivElement>(null);

  const refs: React.RefObject<HTMLDivElement>[] = [
    scrapcycleRef,
    rdpLinesRef,
    scrapperRef,
    graviteaRef,
  ];

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        // You can adjust this value for precise positioning
        behavior: "smooth",
      });
    }
  };

  function prevProject() {
    if (projectNumber != 0) {
      const newProjectNumber = projectNumber - 1;

      scrollToRef(refs[projectNumber - 1]);
      setProjectNumber(newProjectNumber);
    }
  }

  function nextProject() {
    if (projectNumber != refs.length - 1) {
      const newProjectNumber = projectNumber + 1;

      scrollToRef(refs[projectNumber + 1]);
      setProjectNumber(newProjectNumber);
    }
  }

  function skipProject(newProjectNumber: number) {
    scrollToRef(refs[newProjectNumber]);
    setProjectNumber(newProjectNumber);
  }

  return (
    <div
      ref={carouselRef}
      className={`h-screen min-w-screen relative overflow-y-hidden transition-colors duration-1000 delay-100 ${
        theme?.theme == "light" &&
        (projectNumber == 0
          ? "bg-teal-50"
          : projectNumber == 1
          ? "bg-blue-50"
          : projectNumber == 2
          ? "bg-orange-50"
          : "bg-purple-50")
      }  ${
        theme?.theme == "dark" &&
        (projectNumber == 0
          ? "bg-teal-900"
          : projectNumber == 1
          ? "bg-blue-900"
          : projectNumber == 2
          ? "bg-orange-900"
          : "bg-purple-900")
      }`}
    >
      <div
        onScroll={(e) => console.log(e)}
        className="h-screen no-scrollbar overflow-x-scroll overflow-y-hidden scroll-smooth flex items-stretch snap-x snap-mandatory"
        onDrag={() => {
          console.log("hello");
        }}
        ref={containerRef}
      >
        {/* navigation */}

        <div
          className={`flex flex-col self-center justify-center sticky my-auto h-full w-fit z-50 left-[2vw] top-0 ${
            projectNumber == 0 && "opacity-0"
          }`}
        >
          <button
            className={`${
              projectNumber == 0 && "cursor-context-menu"
            } bg-white/50 text-slate-600 disabled:text-slate-300 border border-slate-200 backdrop-blur-sm p-4 rounded-full flex items-center justify-center translate-x-10`}
            type="button"
            onClick={() => prevProject()}
          >
            <ChevronLeftIcon className="h-10 w-10" />
          </button>
        </div>

        <div
          className={`flex self-end sticky h-fit w-fit z-50 left-1/2 -translate-x-1/2 bottom-10`}
        >
          <button
            onClick={() => skipProject(0)}
            className={`w-4 h-4 rounded-full border ${
              projectNumber == 0
                ? "bg-slate-700/80 border-slate-400"
                : "bg-slate-50/50 border-slate-400"
            } mr-4`}
          ></button>
          <button
            onClick={() => skipProject(1)}
            className={`w-4 h-4 rounded-full border ${
              projectNumber == 1
                ? "bg-slate-700/80 border-slate-400"
                : "bg-slate-50/50 border-slate-400"
            } mr-4`}
          ></button>
          <button
            onClick={() => skipProject(2)}
            className={`w-4 h-4 rounded-full border ${
              projectNumber == 2
                ? "bg-slate-700/80 border-slate-400"
                : "bg-slate-50/50 border-slate-400"
            } mr-4`}
          ></button>
          <button
            onClick={() => skipProject(3)}
            className={`w-4 h-4 rounded-full border ${
              projectNumber == 3
                ? "bg-slate-700/80 border-slate-400"
                : "bg-slate-50/50 border-slate-400"
            }`}
          ></button>
        </div>

        <div
          className={`flex flex-col  self-center  justify-center sticky my-auto h-full w-fit z-50 left-[93vw] top-0 ${
            projectNumber == 3 && "opacity-0"
          }`}
        >
          <button
            className={`${
              projectNumber == 3 && "cursor-context-menu"
            } bg-white/50 text-slate-600 disabled:text-slate-300 border border-slate-200 backdrop-blur-sm p-4 rounded-full flex items-center justify-center -translate-x-12`}
            type="button"
            onClick={() => nextProject()}
          >
            <ChevronRightIcon className="h-10 w-10" />
          </button>
        </div>

        {/* navigation */}
        <div
          id="scrapcycle"
          ref={scrapcycleRef}
          className="snap-center shrink-0 w-full h-screen overflow-x-visible overflow-y-hidden"
        >
          <ScrapCycle />
        </div>
        <div
          id="rdpLines"
          ref={rdpLinesRef}
          className="snap-center shrink-0 z-30 w-screen h-screen overflow-x-visible overflow-y-hidden"
        >
          <RdpLines />
        </div>
        <div
          id="scrapper"
          ref={scrapperRef}
          className="snap-center shrink-0 z-10 w-screen h-screen no-scrollbar overflow-x-visible overflow-y-hidden"
        >
          <Scrapper />
        </div>
        <div
          id="gravitea"
          ref={graviteaRef}
          className="snap-center shrink-0 z-10 w-screen h-screen overflow-x-visible overflow-y-hidden"
        >
          <Gravitea />
        </div>
      </div>
      <h4 className="text-2xl text-center flex-grow z-30 w-fit sticky px-16 py-8 my-9 left-0 top-0">
        1/4
      </h4>
    </div>
  );
};

export default ProjectsCarousel;
