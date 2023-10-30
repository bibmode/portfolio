import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDetails from "../project-details";
import VisibilitySensor from "react-visibility-sensor";

type GraviteaProps = {
  changeProject: (newProjectNumber: number) => void;
};

const Gravitea = ({ changeProject }: GraviteaProps) => {
  return (
    <div className="container mx-auto w-full h-full relative overflow-x-visible">
      {/* center details */}
      <VisibilitySensor
        onChange={(isVisible: any) => {
          if (isVisible == true) {
            changeProject(3);
          }
        }}
        partialVisibility={true}
      >
        <ProjectDetails
          entryNumber={4}
          name="Gravitea"
          type="CMS Business Website"
          description="This is a business website that showcases Gravitea, a local milktea
        shop. The site is built with smooth animations that aims to attract
        visitors and customers. It has a CMS backend which the admin can use
        to update the menu showcased in the site with Sanity.io."
          technologies={["Sanity.io", "NextJS", "Framer Motion"]}
          linkOne="https://www.gravitea-shop.com/"
          linkOneType="Live Website"
          linkTwo="https://github.com/bibmode/gravitea"
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
