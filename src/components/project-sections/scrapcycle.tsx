import Image from "next/image";
import { motion } from "framer-motion";
import ProjectDetails from "../project-details";
import VisibilitySensor from "react-visibility-sensor";

type ScrapCycleProps = {
  changeProject: (newProjectNumber: number) => void;
};

const ScrapCycle = ({ changeProject }: ScrapCycleProps) => {
  return (
    <div className="container mx-auto w-full h-full relative">
      {/* center details */}
      <VisibilitySensor
        onChange={(isVisible: any) => {
          if (isVisible == true) {
            changeProject(0);
          }
        }}
      >
        <ProjectDetails
          entryNumber={1}
          name="ScrapCycle"
          type="Full-stack Mobile Application"
          description="ScrapCycle is a mobile app that allows people to trade their
            recyclables for cash easily. They can accurately set their location
            in th eaddress page, book multiple waste collections, and see the
            prices of the recyclables they can sell."
          technologies={["Flutter", "Open Maps API", "Supabase"]}
          linkOne="https://play.google.com/store/apps/details?id=scrapcycle.com&pcampaignid=web_share"
          linkOneType="Google Play"
          linkTwo="https://github.com/bibmode/Waste-Generator-MVP"
          linkTwoType="Github"
        />
      </VisibilitySensor>

      {/* mockups */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
          exit: { x: "-100vw" },
        }}
        className="h-full hidden md:block z-10 overflow-y-hidden overflow-x-visible absolute -left-4 "
      >
        <div className="parent-container w-128 2xl:w-[35vw] mt-16 max-w-3xl">
          <Image
            src="/project-mockups/scrapcycle-2.png" // Replace with your image path
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
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -300 },
          exit: { x: "-100vw" },
        }}
        className="hidden h-full z-10 overflow-hidden lg:flex flex-col justify-center absolute right-4 xl:right-16"
      >
        <div className="parent-container w-80 xl:w-96 2xl:w-[30vw] max-w-[400px] ">
          <Image
            src="/project-mockups/scrapcycle-1.png" // Replace with your image path
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

export default ScrapCycle;
