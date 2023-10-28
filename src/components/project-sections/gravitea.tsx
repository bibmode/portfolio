import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDetails from "../project-details";

const Gravitea = () => {
  return (
    <div className="container mx-auto w-full h-full relative overflow-x-visible">
      {/* center details */}
      <ProjectDetails
        entryNumber={4}
        name="Gravitea"
        type="CMS Business Website"
        description="This is a business website that showcases Gravitea, a local milktea
        shop. The site is built with smooth animations that aims to attract
        visitors and customers. It has a CMS backend which the admin can use
        to update the menu showcased in the site with Sanity.io."
        technologies={["Sanity.io", "NextJS", "Framer Motion"]}
        linkOne="https://gravitea.vercel.app"
        linkOneType="Live Website"
        linkTwo="https://github.com/bibmode/gravitea"
        linkTwoType="Github"
      />

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
          exit: { x: "-100vw" },
        }}
        className="absolute mx-auto left-0 right-0 z-20 flex flex-col overflow-x-visible justify-center items-center w-full h-full"
      >
        <div className="bg-white border z-30 -mb-10 border-slate-700 rounded-full w-24 h-24 flex justify-center items-center text-4xl">
          4
        </div>
        <div className="bg-violet-400/60 backdrop-blur-md w-128 text-center py-16 rounded-4xl border border-violet-300">
          <h2 className="text-3xl font-semibold">Gravitea</h2>
          <h3 className="text-2xl pt-4">CMS Business Website</h3>
          <p className="text-lg font-light py-8 px-16">
            This is a business website that showcases Gravitea, a local milktea
            shop. The site is built with smooth animations that aims to attract
            visitors and customers. It has a CMS backend which the admin can use
            to update the menu showcased in the site with Sanity.io.
          </p>
          <ul className="flex w-full justify-center flex-wrap overflow-x-auto">
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              Sanity.io
            </li>
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              NextJS
            </li>
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              Framer Motion
            </li>
          </ul>
        </div>
        <div className="w-128 my-5 flex justify-between text-xl">
          <a
            href="https://gravitea.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="flex group items-center justify-center py-2 px-4 flex-1 bg-white hover:bg-violet-800 hover:text-white border border-slate-700 rounded-xl"
          >
            <span className="translate-x-[20px] group-hover:-translate-x-1 transition ease-in">
              Live Website
            </span>
            <span className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition ease-in">
              <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
            </span>
          </a>
          <a
            href="https://github.com/bibmode/gravitea"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="flex group items-center justify-center py-2 px-4 flex-1 bg-white hover:bg-violet-800 hover:text-white border border-slate-700 ml-4 rounded-xl"
          >
            <span className="translate-x-[20px] group-hover:-translate-x-1 transition ease-in">
              Github
            </span>
            <span className="-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition ease-in">
              <ArrowUpRightIcon className="h-6 w-6 ml-2 " />
            </span>
          </a>
        </div>
      </motion.div> */}

      {/* mockups */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -300 },
          exit: { x: "-100vw" },
        }}
        className="hidden md:block h-full z-10 overflow-y-hidden overflow-x-visible absolute -left-[5vw] mt-4 xl:mt-[6vh]"
      >
        <div className="parent-container overflow-x-visible w-144 xl:w-[40vw] 2xl:w-[45vw] mt-0 max-w-3xl">
          <Image
            src="/project-mockups/gravitea-laptop.png" // Replace with your image path
            alt="ScrapCycle App Screen 1"
            width={455}
            height={726}
            className="w-full max-w-full overflow-x-visible"
          />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
          exit: { x: "-100vw" },
        }}
        className="hidden h-full z-10 overflow-y-hidden md:flex flex-col justify-center absolute right-0 xl:-right-4"
      >
        <div className="parent-container w-96 xl:w-[33vw] -mb-[80vh] overflow-x-visible">
          <Image
            src="/project-mockups/gravitea-phone.png" // Replace with your image path
            alt="ScrapCycle App Screen 1"
            width={867}
            height={793}
            className="w-full max-w-full overflow-x-visible"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Gravitea;
