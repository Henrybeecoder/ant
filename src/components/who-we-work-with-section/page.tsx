import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhoWeWorkWith() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.6 } }, // Fade out when not in view
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } }, // Fade out when not in view
  };

  // Refs for elements
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef1 = useRef(null);
  const descriptionRef2 = useRef(null);
  const weDontWorkWithTitleRef = useRef(null);
  const weDontWorkWithListRef = useRef(null);
  const weWorkWithTitleRef = useRef(null);
  const weWorkWithListRef = useRef(null);

  // Check if elements are in view
  const isTitleInView = useInView(titleRef, { once: false });
  const isSubtitleInView = useInView(subtitleRef, { once: false });
  const isDescription1InView = useInView(descriptionRef1, { once: false });
  const isDescription2InView = useInView(descriptionRef2, { once: false });
  const isWeDontWorkWithTitleInView = useInView(weDontWorkWithTitleRef, { once: false });
  const isWeDontWorkWithListInView = useInView(weDontWorkWithListRef, { once: false });
  const isWeWorkWithTitleInView = useInView(weWorkWithTitleRef, { once: false });
  const isWeWorkWithListInView = useInView(weWorkWithListRef, { once: false });

  return (
    <div className="min-h-[30vh]  urbanist lg:mt-[-100px] mt-0">
      <div className="mb-7 lg:px-6 px-0">
        {/* Title */}
        <motion.p
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "exit"}
          variants={fadeInUp}
          className="text-[#FFFFFFB2] lg:text-[0.875rem] text-[0.75rem] text-start mb-2 lg:mb-6"
        >
          Who we work with
        </motion.p>

        {/* Subtitle */}
        <motion.p
          ref={subtitleRef}
          initial="hidden"
          animate={isSubtitleInView ? "visible" : "exit"}
          variants={fadeInUp}
          className="text-start lg:text-[1.8rem] text-[1.25rem] lg:leading-0 leading-8 mb-2 lg:mb-10"
        >
          If you’re scaling, we’re listening. If you’re stuck, we’re not.
        </motion.p>

        {/* Descriptions */}
        <div className="flex flex-row justify-between items-center font-[400] lg:text-[1rem] text-[#FFFFFFB2] text-[0.8rem]">
          <motion.div
            ref={descriptionRef1}
            initial="hidden"
            animate={isDescription1InView ? "visible" : "exit"}
            variants={fadeInUp}
            className="lg:w-[40%]"
          >
            We work with founders, CEOs, and operators who don’t have time for
            inefficiency.
          </motion.div>
          <motion.div
            ref={descriptionRef2}
            initial="hidden"
            animate={isDescription2InView ? "visible" : "exit"}
            variants={fadeInUp}
            className="lg:w-[40%]"
          >
            Businesses that don’t guess their way through growth—they engineer
            it.
          </motion.div>
        </div>
      </div>

      {/* We Don't Work With Section */}
      <div className="flex flex-row justify-center min-h-[10vh] items-center text-[#FFFFFF]">
        <motion.div
          ref={weDontWorkWithTitleRef}
          initial="hidden"
          animate={isWeDontWorkWithTitleInView ? "visible" : "exit"}
          variants={fadeInUp}
          className="lg:w-[40%] w-[48%] font-[500] lg:text-[1.3rem]"
        >
          We Don't Work With
        </motion.div>
        <motion.div
          ref={weDontWorkWithListRef}
          initial="hidden"
          animate={isWeDontWorkWithListInView ? "visible" : "exit"}
          variants={fadeInUp}
          className="lg:w-[50%] w-[48%] border-l-[0.5px] lg:text-[1rem] text-[0.6rem] border-[#FFFFFFB2] pl-3 lg:pl-10"
          style={{ marginTop: "20px", marginBottom: "20px" }} // Add margin to the border
        >
          <div className="flex flex-row">
            <img src="/assets/icons/cancel.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              CEOs celebrating missed opportunities as “character-building.”
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/cancel.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Startups that see constant inquiries as a nuisance, not gold.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/cancel.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Businesses that love manually replying to the same question 500 times a week.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/cancel.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Founders who think working harder is the only way to grow.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/cancel.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Owners who shrug off scaling because “we’ve always done it this way.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* We Work With Section */}
      <div className="flex flex-row-reverse mt-6 justify-center min-h-[10vh] items-center text-[#FFFFFF]">
        <motion.div
          ref={weWorkWithTitleRef}
          initial="hidden"
          animate={isWeWorkWithTitleInView ? "visible" : "exit"}
          variants={fadeInDown}
          className="lg:w-[50%] w-[48%] font-[500] lg:text-[1.3rem] text-end"
        >
          We Work With
        </motion.div>
        <motion.div
          ref={weWorkWithListRef}
          initial="hidden"
          animate={isWeWorkWithListInView ? "visible" : "exit"}
          variants={fadeInDown}
          className="lg:w-[40%] w-[48%] border-r-[0.5px] lg:text-[1rem] text-[0.7rem] border-[#FFFFFFB2] pr-3 lg:pr-10"
          style={{ marginTop: "20px", marginBottom: "20px" }} // Add margin to the border
        >
          <div className="flex flex-row">
            <img src="/assets/icons/check.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Businesses drowning in leads but too slow to catch them.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/check.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Entrepreneurs who want to scale without babysitting staff.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/check.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              Founders who are tired of answering dumb questions.
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/check.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              People who lose sleep over missed opportunities
            </p>
          </div>
          <div className="flex flex-row mt-3">
            <img src="/assets/icons/check.svg" alt="arrow" className="mr-4" />
            <p className="text-start">
              The ones who see where the world is headed and want to be five steps ahead.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}