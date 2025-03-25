import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhoWeWorkWith() {
  // Single animation variant for all elements
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Create refs for each section
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Track visibility for each section
  const section1InView = useInView(section1Ref, { once: true, margin: "0px 0px -50px 0px" });
  const section2InView = useInView(section2Ref, { once: true, margin: "0px 0px -50px 0px" });
  const section3InView = useInView(section3Ref, { once: true, margin: "0px 0px -50px 0px" });

  // List items data
  const dontWorkWithItems = [
    "CEOs celebrating missed opportunities as 'character-building.'",
    "Startups that see constant inquiries as a nuisance, not gold.",
    "Businesses that love manually replying to the same question 500 times a week.",
    "Founders who think working harder is the only way to grow.",
    "Owners who shrug off scaling because 'we've always done it this way.'"
  ];

  const workWithItems = [
    "Businesses drowning in leads but too slow to catch them.",
    "Entrepreneurs who want to scale without babysitting staff.",
    "Founders who are tired of answering dumb questions.",
    "People who lose sleep over missed opportunities",
    "The ones who see where the world is headed and want to be five steps ahead."
  ];

  return (
    <div className="min-h-[30vh] urbanist lg:mt-[-100px] mt-0">
      <div className="mb-7 lg:px-6 px-0">
        {/* Title & Subtitle Group */}
        <div ref={section1Ref}>
          <motion.p
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-[#FFFFFFB2] lg:text-[0.875rem] text-[0.75rem] text-start mb-2 lg:mb-6"
          >
            Who we work with
          </motion.p>

          <motion.p
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
            className="text-start lg:text-[1.8rem] text-[1.25rem] lg:leading-0 leading-8 mb-2 lg:mb-10"
          >
            If you're scaling, we're listening. If you're stuck, we're not.
          </motion.p>
        </div>

        {/* Descriptions */}
        <motion.div 
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="flex flex-row justify-between items-center font-[400] lg:text-[1rem] text-[#FFFFFFB2] text-[0.8rem]"
        >
          <div className="lg:w-[40%]">
            We work with founders, CEOs, and operators who don't have time for
            inefficiency.
          </div>
          <div className="lg:w-[40%]">
            Businesses that don't guess their way through growth—they engineer
            it.
          </div>
        </motion.div>
      </div>

      {/* We Don't Work With Section */}
      <div ref={section2Ref} className="flex flex-row justify-center min-h-[10vh] items-center text-[#FFFFFF]">
        <motion.div
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="lg:w-[40%] w-[48%] font-[500] lg:text-[1.3rem]"
        >
          We Don't Work With
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
          className="lg:w-[50%] w-[48%] border-l-[0.5px] lg:text-[1rem] text-[0.6rem] border-[#FFFFFFB2] pl-3 lg:pl-10 my-5"
        >
          {dontWorkWithItems.map((item, index) => (
            <div key={index} className="flex flex-row mt-3 first:mt-0">
              <img 
                src="/assets/icons/cancel.svg" 
                alt="cancel" 
                className="mr-4 w-4 h-4" 
                loading="lazy"
              />
              <p className="text-start">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* We Work With Section */}
      <div ref={section3Ref} className="flex flex-row-reverse mt-6 justify-center min-h-[10vh] items-center text-[#FFFFFF]">
        <motion.div
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={fadeIn}
          className="lg:w-[50%] w-[48%] font-[500] lg:text-[1.3rem] text-end"
        >
          We Work With
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
          className="lg:w-[40%] w-[48%] border-r-[0.5px] lg:text-[1rem] text-[0.7rem] border-[#FFFFFFB2] pr-3 lg:pr-10 my-5"
        >
          {workWithItems.map((item, index) => (
            <div key={index} className="flex flex-row mt-3 first:mt-0">
              <img 
                src="/assets/icons/check.svg" 
                alt="check" 
                className="mr-4 w-4 h-4" 
                loading="lazy"
              />
              <p className="text-start">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}