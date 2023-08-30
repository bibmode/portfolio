import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Gravitea = () => {
  return (
    <div className="container mx-auto w-full h-full relative overflow-x-visible">
      {/* center details */}
      <motion.div
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
          1
        </div>
        <div className="bg-violet-400/60 backdrop-blur-md w-128 text-center py-16 rounded-4xl border border-violet-300">
          <h2 className="text-3xl font-semibold">ScrapCycle</h2>
          <h3 className="text-2xl pt-4">Full-stack Mobile Application</h3>
          <p className="text-xl font-light py-8 px-16">
            Lorem ipsum dolor sit amet consectetur. Blandit eu id vitae viverra
            molestie. Nunc mollis augue massa turpis suspendisse adipiscing nisi
            metus.
          </p>
          <ul className="flex w-full justify-center flex-wrap overflow-x-auto">
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              Flutter
            </li>
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              Google Maps API
            </li>
            <li className="text-violet-700 font-medium text-md ml-2 mb-3 border-2 border-violet-600 rounded-full px-5 py-1">
              Supabase
            </li>
          </ul>
        </div>
        <div className="w-128 my-5 flex justify-between text-xl">
          <button
            type="button"
            className="py-2 px-4 flex-grow bg-white border border-slate-700 mr-4 rounded-xl"
          >
            Learn More
          </button>
          <button
            type="button"
            className="py-2 px-4 flex-grow bg-white border border-slate-700 rounded-xl"
          >
            Google Play
          </button>
          <button
            type="button"
            className="py-2 px-4 flex-grow bg-white border border-slate-700 ml-4 rounded-xl"
          >
            Github
          </button>
        </div>
      </motion.div>

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
        className="h-full z-10 overflow-y-hidden overflow-x-visible absolute -left-[5vw] mt-[6vh]"
      >
        <div className="parent-container overflow-x-visible w-[40vw] 2xl:w-[45vw] mt-0 max-w-3xl">
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
        className="h-full z-10 overflow-y-hidden flex flex-col justify-center absolute -right-4"
      >
        <div className="parent-container w-[33vw] -mb-[80vh] overflow-x-visible">
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
