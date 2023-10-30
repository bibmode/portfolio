import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDetails from "../project-details";
import VisibilitySensor from "react-visibility-sensor";

type RDPLinesProps = {
  changeProject: (newProjectNumber: number) => void;
};

const RdpLines = ({ changeProject }: RDPLinesProps) => {
  return (
    <div className="container mx-auto w-full h-full relative overflow-x-visible">
      {/* center details */}
      <VisibilitySensor
        onChange={(isVisible: any) => {
          if (isVisible == true) {
            changeProject(1);
          }
        }}
        partialVisibility={true}
      >
        <ProjectDetails
          entryNumber={2}
          name="E-RDP"
          type="Line Simplification Algorithm and Web Application"
          description="E-RDP is a web application that showcases the line simplification
        algorithm I developed for my thesis paper which can reduce the
        number of points in time series datasets for up to 96.88% in less
        than half the time powered by a python Flask backend and a ReactJS
        frontend."
          technologies={["Flask", "ReactJS", "Tailwindcss"]}
          linkOne="https://www.enhanced-rdp.com/"
          linkOneType="Live Website"
          linkTwo="https://github.com/bibmode/Enhanced-RDP"
          linkTwoType="Github"
        />
      </VisibilitySensor>

      {/* mockups */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
          exit: { x: "-100vw" },
        }}
        className="hidden lg:block h-full z-10 overflow-y-hidden overflow-x-visible absolute left-40"
      >
        <div className="parent-container overflow-x-visible w-96 2xl:w-[25vw] mt-0 xl:mt-8 max-w-3xl">
          <Image
            src="/project-mockups/erdp-tablet.png" // Replace with your image path
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
        transition={{ duration: 0.9, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
          exit: { x: "-100vw" },
        }}
        className="hidden md:block h-full z-10 overflow-y-hidden overflow-x-visible absolute xl:-left-1"
      >
        <div className="parent-container w-72 2xl:w-[18vw] lg:mt-36 max-w-3xl">
          <Image
            src="/project-mockups/erdp-phone.png" // Replace with your image path
            alt="ScrapCycle App Screen 1"
            width={315}
            height={541}
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
          hidden: { opacity: 0, y: -300 },
          exit: { x: "-100vw" },
        }}
        className="hidden h-full z-10 overflow-y-hidden md:flex flex-col justify-center absolute right-0 2xl:right-0"
      >
        <div className="parent-container w-144 lg:w-[57vw] -mb-96 xl:-mb-56 overflow-x-visible">
          <Image
            src="/project-mockups/erdp-laptop.png" // Replace with your image path
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

export default RdpLines;
