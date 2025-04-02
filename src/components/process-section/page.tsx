import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ProcessSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Refs for each element
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const assessmentRef = useRef(null);
  const clientRef = useRef(null);
  const alphanextechRef = useRef(null);
  const lineRef = useRef(null);
  const circleRef = useRef(null);
  const zigRef = useRef(null);
  const buildRef = useRef(null);
  const worksInRef = useRef(null);

  // Check if elements are in view
  const isTitleInView = useInView(titleRef, { once: true });
  const isSubtitleInView = useInView(subtitleRef, { once: true });
  const isAssessmentInView = useInView(assessmentRef, { once: true });
  const isClientInView = useInView(clientRef, { once: true });

  const isBuildInView = useInView(buildRef, { once: true });
  const isWorksInView = useInView(worksInRef, { once: true });

  // Infinite animation for sound wavelengths
  const soundWaveVariants = {
    animate: {
      scaleY: [1, 1.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Ensure window is defined before accessing it
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="lg:min-h-[200vh] min-h-[100vh]  relative">
      {/* Title and Subtitle */}
      <div className="mt-30 mb-7">
        <motion.p
          ref={titleRef}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-[#FFFFFFB2] text-center mb-2 lg:mb-6"
        >
          How we work
        </motion.p>
        <motion.p
          ref={subtitleRef}
          initial="hidden"
          animate={isSubtitleInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center text-[1.6rem] lg:leading-0 leading-8 mb-2 lg:mb-10"
        >
          Our Process & Delivery Timeline
        </motion.p>
      </div>

      {/* Process Timeline */}
      <div className="max-w-[100%]    relative min-h-[150vh]">
        <motion.img
          src="/assets/process/new-line.svg"
          alt="line"
          className="2xl:h-[130vh] h-[100vh] absolute   lg:left-[40%] lg:-translate-x-[40%]"
        />





        <motion.div className="absolute 2xl:left-[10%] xl:left-[60px] 2xl:w-[30%] w-[45%]  left-0 2xl:top-[5%]   top-[3%] z-40 group">
          <span className="text-[#6D6D6D] mb-1 lg:text-[0.9rem] text-[0.5rem]">
            Assessment (1-2 days)
          </span>
          <div className="bg-[#151515] relative py-3 text-center px-4 font-[500] lg:text-[1rem] text-[0.7rem] overflow-hidden">
            We analyze your workflow
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Left Border */}
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Top Right Border */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
          </div>
        </motion.div>



        <motion.div className="absolute 2xl:left-[60%] left-[70%] top-4 z-40">
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              boxShadow: `
                0px 12px 27px 0px #0000001A,
                0px 49px 49px 0px #00000017,
                0px 110px 66px 0px #0000000D,
                0px 195px 78px 0px #00000003,
                0px 305px 85px 0px #00000000`,
            }}
            className="lg:w-[90%] w-[80%] relative lg:px-5 px-2 lg:py-6 py-3"
          >
            <div className="w-full">
              <div className="lg:w-[80%] w-[100%] font-[400] lg:text-[0.9rem] text-[0.5rem]">
                <span className="text-[#6D6D6D] mb-1 lg:text-[0.8rem] text-[0.5rem]">
                  Client
                </span>
                <div className="bg-[#151515] text-center relative py-3 lg:px-4 px-1 font-[500]">
                  Leads are slipping, and my team is buried in follow ups.
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>
            </div>
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <div className="w-full flex flex-col justify-end items-end mt-6">
              <div className="lg:w-[80%] w-[100%] font-[400] lg:text-[0.9rem] text-[0.5rem]">
                <span className="text-[#6D6D6D] lg:text-[0.8rem] text-[0.5rem]">
                  Alphanextech
                </span>
                <div className="bg-[#151515]  text-center relative py-3 lg:px-4 px-1 font-[500]">
                  Yep, scattered workflows kill efficiency.
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>





        <motion.div
          ref={buildRef}
          initial="hidden"
          animate={isBuildInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="absolute 2xl:left-[60%] 2xl:w-[30%] cursor-pointer w-[45%]  left-[58%]  2xl:top-[33%]  top-[25%] z-40 group"
        >
          <span className="text-[#6D6D6D] flex flex-row justify-end w-full mb-1 lg:text-[0.9rem] text-[0.6rem]">
            Assembly (5-10 days)
          </span>
          <div className="bg-[#151515]  text-center relative py-3 px-4 font-[500] lg:text-[1rem] text-[0.7rem] overflow-hidden">
            We build & train your AI.
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Left Border */}
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Top Right Border */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
          </div>
        </motion.div>




        <motion.div
          ref={worksInRef}
          initial="hidden"
          animate={isWorksInView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="absolute lg:w-[50%] w-[47%] 2xl:left-[-9%] left-[-3%]   top-[17%]  2xl:top-[23%]  z-40"
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              boxShadow: `
                0px 12px 27px 0px #0000001A,
                0px 49px 49px 0px #00000017,
                0px 110px 66px 0px #0000000D,
                0px 195px 78px 0px #00000003,
                0px 305px 85px 0px #00000000`,
            }}
            className="lg:w-full  urbanist w-[100%] relative lg:px-5 px-1 lg:py-6 py-2"
          >
            <span className="urbanist text-[#6D6D6D]  text-[1.2rem] mb-6"> Works in</span>
            <div className="w-[100%] flex 2xl:h-[120px] lg:mt-2 mt-1 h-[60px] flex-row justify-between">
              {/* First Container */}
              <div className="w-[55%] relative min-h-full  bg-[#20202080] lg:px-3 px-1 lg:py-4 py-2">
                <div className="w-full">
                  <div className="w-[70%]">
                    <img
                      src="/assets/process/text1.svg"
                      alt="works-in"
                      className="w-full h-[8px] lg:h-full"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-end items-end my-2">
                  <div className="w-[70%]">
                    <img
                      src="/assets/process/text1.svg"
                      alt="works-in"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <span className="flex flex-row items-center justify-center lg:text-[1.1rem] text-[0.7rem] text-[#FFFFFFB2] w-full text-center">
                  Text
                </span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
              </div>

              {/* Second Container - Sound Wavelengths */}
              <div className="w-[42%] relative min-h-full bg-[#20202080] lg:px-3 px-1 lg:py-4 py-2">
                <div className="w-full flex items-center justify-center lg:h-[80%] h-[50%]">
                  <motion.div
                    className="flex space-x-1"
                    //@ts-nocheck
                    // @ts-expect-error: Temporarily ignoring type error while refactoring
                    variants={soundWaveVariants}
                    animate="animate"
                  >
                    {Array.from({
                      length: windowWidth < 768 ? 7 : 16,
                    }).map((_, index) => (
                      <motion.div
                        key={index}
                        className="lg:w-[3px] w-[1px] rounded-t-2xl rounded-b-2xl bg-[#FF4733]"
                        initial={{ height: "5px" }}
                        animate={{
                          height: ["5px", "10px", "5px"],
                          transition: {
                            duration: 0.5 + Math.random() * 1,
                            delay: Math.random() * 0.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          },
                        }}
                        style={{ height: "clamp(5px, 2vw, 40px)" }}
                      />
                    ))}
                  </motion.div>
                </div>
                <span className="flex flex-row items-center justify-center lg:text-[1.1rem] text-[0.7rem] text-[#FFFFFFB2] w-full text-center">
                  Voice
                </span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
              </div>
            </div>

            <div className="w-[100%] flex 2xl:h-[120px] h-[80px] mt-3 flex-row justify-between">
              {/* First Container */}
              <div className="w-[42%] relative min-h-full bg-[#20202080] lg:px-3 px-1 lg:py-4 py-2">
                <div className="w-full">
                  <div className="bg-[#20202080] relative flex flex-row justify-center items-center lg:py-3 py-1 lg:px-5 px-2">
                    <img
                      src="/assets/process/users.svg"
                      alt="works-in"
                      className="w-[10px] h-[10px]"
                    />
                    <p className="font-[400] lg:text-[0.9rem] text-[0.4rem] lg:ml-3 ml-1">
                      Collaborative
                    </p>
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  </div>
                </div>
                <div className="w-full overflow-hidden whitespace-nowrap">
                  <div className="inline-block animate-marquee mt-3">
                    {/* First Set of Items */}
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/users.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2]">Operational</span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/analytics.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2]">Analytics</span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/users.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2]">Operational</span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/analytics.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2]">Analytics</span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/users.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2] lg:text-[0.9rem] text-[0.4rem]">
                        Operational
                      </span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                    <div className="inline-block mr-4 lg:text-[0.9rem] text-[0.4rem] relative bg-[#20202080] lg:px-2 lg:py-2 px-1 py-1">
                      <img
                        src="/assets/process/analytics.svg"
                        alt="icon1"
                        className="inline-block mr-2"
                      />
                      <span className="text-[#FFFFFFB2]">Analytics</span>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    </div>
                  </div>
                </div>

                <style jsx>{`
                  @keyframes marquee {
                    0% {
                      transform: translateX(0%);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-marquee {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marquee 60s linear infinite;
                  }
                `}</style>

                <span className="flex flex-row items-center justify-center lg:text-[1.1rem] text-[0.7rem] text-[#FFFFFFB2] w-full text-center">
                  CRMs
                </span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
              </div>

              {/* Second Container - Sound Wavelengths */}
              <div className="w-[55%] relative min-h-full bg-[#20202080] lg:px-3 px-1 lg:py-4 py-2">
                <div className="w-full flex items-center justify-center h-[80%] relative">
                  <img
                    src="/assets/process/message.svg"
                    alt="works-in"
                    className="w-full h-full"
                  />
                  <motion.img
                    src="/assets/process/cursor.svg"
                    alt="works-in"
                    className="absolute w-6 h-6"
                    animate={{
                      x: [
                        0,
                        Math.random() * 100 - 50,
                        Math.random() * 100 - 50,
                      ],
                      y: [
                        0,
                        Math.random() * 100 - 50,
                        Math.random() * 100 - 50,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="flex flex-row items-center justify-center lg:text-[1.1rem] text-[0.7rem] text-[#FFFFFFB2] w-full text-center">
                  Email
                </span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
              </div>
            </div>
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
          </div>
        </motion.div>


        <motion.div
          ref={assessmentRef}
          initial="hidden"
          animate={isAssessmentInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="absolute 2xl:left-20 lg:w-[15%] left-0  lg:top-[60%] top-[46%] z-40 group"
        >
          <span className="text-[#6D6D6D] mb-1 lg:text-[0.9rem] text-[0.6rem]">
            Action (1-3 days)
          </span>
          <div className="bg-[#151515] text-center relative py-3 px-4 font-[500] lg:text-[1rem] text-[0.7rem] overflow-hidden">
            You Launch.
            {/* Top Left Border */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Left Border */}
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Top Right Border */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
            {/* Bottom Right Border */}
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
          </div>
        </motion.div>


        <motion.div
          ref={clientRef}
          initial="hidden"
          animate={isClientInView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="absolute 2xl:left-[58%] left-[58%]  2xl:top-[60%] top-[40%] z-40"
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              boxShadow: `
                0px 12px 27px 0px #0000001A,
                0px 49px 49px 0px #00000017,
                0px 110px 66px 0px #0000000D,
                0px 195px 78px 0px #00000003,
                0px 305px 85px 0px #00000000`,
            }}
            className="lg:w-[100%] w-[90%] relative lg:px-5 px-2 lg:py-6 py-3"
          >
            <div className="text-[#FFFFFFB2] mb-5 text-center lg:text-[0.9rem] text-[0.6rem]">
              You just watch the results roll in.
            </div>

            {/* Container 1 */}
            <div className="mt-5">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100, rotate: -10, x: -50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: Math.random() * 10 - 5,
                    x: Math.random() * 40 - 20,
                    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  },
                }}
                className="w-full flex flex-row justify-center items-center"
              >
                <div className="lg:w-[80%] w-[100%] bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4 px-2 font-[500]">
                  <img src="/assets/process/wallet.svg" alt="icon" className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="ml-2 lg:text-[0.9rem] text-[0.5rem]">
                    No salaries
                  </p>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </motion.div>

              {/* Container 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100, rotate: 15, x: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: Math.random() * 10 - 5,
                    x: Math.random() * 40 - 20,
                    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                  },
                }}
                className="w-full mt-2 flex flex-row justify-center items-center"
              >
                <div className="lg:w-[80%] w-[100%] bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4 px-2 font-[500]">
                  <img src="/assets/process/sick.svg" alt="icon" className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="ml-2 lg:text-[0.9rem] text-[0.5rem]">
                    No Sick days
                  </p>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </motion.div>

              {/* Container 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -100, rotate: -20, x: -30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: Math.random() * 10 - 5,
                    x: Math.random() * 40 - 20,
                    transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
                  },
                }}
                className="w-full flex mt-2 flex-row justify-center items-center"
              >
                <div className="lg:w-[80%] w-[100%] bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4 px-2 font-[500]">
                  <img src="/assets/process/up.svg" alt="icon" className="lg:w-6 lg:h-6 w-4 h-4" />
                  <p className="ml-2 lg:text-[0.9rem] text-[0.5rem]">
                    No ‘I forgot to follow up’
                  </p>
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </motion.div>
            </div>
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
          </div>
        </motion.div>
      </div>


      <div className="lg:mt-0 mt-[-250px] relative">
        <div
          className="absolute inset-y-0 left-0 w-[10%] z-10"
          style={{
            background:
              "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
          }}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-[10%] z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
          }}
        ></div>
        <Marquee />
      </div>
    </div>
  );
}

const items = [
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
  {
    src: "/assets/process/slide-logo.svg",
    label: "We only bring in 2 partners per month.",
  },
];

const Marquee = () => {
  return (
    <div className="w-full absolute bottom-0 overflow-hidden whitespace-nowrap urbanist relative">
      {/* Gradient Overlays */}
      <div
        className="absolute inset-y-0 left-0 w-[10%] z-10"
        style={{
          background:
            "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-y-0 right-0 w-[10%] z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
        }}
      ></div>

      {/* Marquee Content */}
      <motion.div
        className="flex gap-4 animate-marquee"
        initial={{ x: "0%" }} // Start with content fully visible
        animate={{ x: "-100%" }} // Scroll to the left
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex items-center text-[1rem] text-[#FFFFFF] font-[500] mx-1 relative"
          >
            <img src={item.src} alt={item.label} className="mr-1 w-5 h-5" />
            <span>
              {item.label.split(" ").map((word, i) =>
                word === "only" ? (
                  <span key={i} className="italic font-bold">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
