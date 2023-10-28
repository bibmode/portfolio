import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDetails from "../project-details";

const Scrapper = () => {
  return (
    <div className="container mx-auto w-full h-full relative overflow-x-visible">
      {/* center details */}
      <ProjectDetails
        entryNumber={3}
        name="SC Collector"
        type="Full-stack Mobile Application"
        description="This is a mobile application for the waste collectors of ScrapCycle.
        This allows the waste collectors to track the number of address
        points they have to collect from as well as track their own location
        in the integrated map built in. The app also features a calculator
        for the waste materials collected for easy and fast transactions."
        technologies={["Flutter", "Open Maps API", "Supabase"]}
        linkOne="https://play.google.com/store/apps/details?id=sccollector.com&pcampaignid=web_share"
        linkOneType="Google Play"
        linkTwo="https://github.com/bibmode/Scrapper-MVP"
        linkTwoType="Github"
      />

      {/* mockups */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0, x: 0 },
          hidden: { opacity: 0, y: 500, x: -100 },
          exit: { x: "-100vw" },
        }}
        className="hidden md:block h-full z-10 rotate-[34deg] overflow-x-visible  absolute left-16 xl:left-0 "
      >
        <div className="parent-container rotate-[34deg] w-96 xl:w-[38vw] 2xl:w-[34vw] -mt-36 xl:mt-auto xl:-mb-[30vh] max-w-3xl">
          <Image
            src="/project-mockups/scrapper-1.png" // Replace with your image path
            alt="ScrapCycle App Screen 1"
            width={815}
            height={1493}
            className="w-full max-w-full overflow-x-visible"
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0, x: 0 },
          hidden: { opacity: 0, y: -500, x: 100 },
          exit: { x: "-100vw" },
        }}
        className="hidden h-full z-10 rotate-[34deg] md:flex flex-col justify-center absolute right-28"
      >
        <div className="parent-container rotate-[34deg] w-96 xl:w-[32vw] 2xl:w-[27vw] -mb-144 xl:mb-auto xl:-mt-[20vh]">
          <Image
            src="/project-mockups/scrapper-2.png" // Replace with your image path
            alt="ScrapCycle App Screen 1"
            width={764}
            height={1416}
            className="w-full max-w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Scrapper;
