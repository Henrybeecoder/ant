import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useMemo } from "react";
import useSound from "use-sound";

const AnimatedBorder = () => (
  <>
    <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out" />
    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out" />
    <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out" />
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out" />
  </>
);

const InfoBox = ({ icon, text, position }) => (
  <div className={`absolute ${position} group`}>
    <div className="w-full bg-[#151515] flex items-center relative py-2 px-2 lg:px-4 font-[400]">
      <img src={icon} alt="icon" className="w-4 lg:w-6" loading="lazy" />
      <p className="ml-2 text-[0.5rem] lg:text-[0.7rem]">{text}</p>
      <AnimatedBorder />
    </div>
  </div>
);

const TaskItem = ({ icon, text, active }) => (
  <div className="flex items-center mt-5 text-[#FFFFFFB2] font-[400] lg:text-[0.9rem] text-[0.6rem]">
    <img src={icon} className="w-4 h-4" alt="" loading="lazy" />
    <p className={`ml-3 ${active ? 'text-[#FFFFFFB2]' : 'text-[#6D6D6D]'}`}>
      {text}
    </p>
  </div>
);

export default function BusinessScaleSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/assets/audios/hurry.mp3", {
    volume: 0.5,
    soundEnabled: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  });

  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [inView, controls]);

  const handlePlayMusic = () => {
    if (isPlaying) stop();
    else play();
    setIsPlaying(!isPlaying);
  };

  const containerStyles = useMemo(() => ({
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply"
  }), []);

  const infoBoxes = useMemo(() => [
    { 
      icon: "/assets/process/wallet.svg", 
      text: "No salaries",
      position: "w-[30%] max-w-[150px] min-w-[100px] top-[40%] left-[5%]" 
    },
    { 
      icon: "/assets/process/sick.svg", 
      text: "No Sick days",
      position: "w-[30%] max-w-[150px] min-w-[100px] top-[70%] left-[60%]"
    },
    { 
      icon: "/assets/process/clock.svg", 
      text: "Works 24/7",
      position: "w-[30%] 2xl:max-w-[150px] max-w-[100px] min-w-[100px] top-[100%] left-[35%]"
    }
  ], []);

  const tasks = useMemo(() => [
    { icon: "/assets/business-scale/active.svg", text: "Lead Follow-Ups & Nurturing", active: true },
    { icon: "/assets/business-scale/active.svg", text: "Customer Support & Inquiry", active: true },
    { icon: "/assets/business-scale/inactive.svg", text: "Data Entry & Cleanup", active: false },
    { icon: "/assets/business-scale/inactive.svg", text: "Task Automation & Delegation", active: false },
    { icon: "/assets/business-scale/inactive.svg", text: "Billing & Invoice Tracking", active: false }
  ], []);

  return (
    <div className="min-h-[100vh] my-[200px] urbanist z-80">
      <div className="mb-5">
        {/* Header */}
        <div className="w-full lg:px-14 px-0 py-8 flex flex-col justify-start items-start text-start">
          <p className="text-[#FFFFFFB2] text-[0.9rem] mb-1">Why you need this</p>
          <p className="text-[1.4rem]">Your Business Could Be Scaling Faster. Here's What's Stopping You.</p>
        </div>

        {/* Main Content */}
        <div className="lg:h-[800px] h-[1500px] flex lg:flex-row flex-col justify-between gap-4">
          
          {/* Left Panel */}
          <div 
            className="lg:h-full h-[800px] lg:w-[49%] w-full relative group overflow-hidden"
            style={{
              ...containerStyles,
              backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/number.png')"
            }}
          >
            <AnimatedBorder />

            <div className="bg-gradient-to-b from-black to-transparent">
              <div className="w-full pb-4 pt-8 px-4 font-[400]">
                <p className="text-white lg:text-base text-sm">
                  Missed follow-ups, slow replies, half-hearted execution—you're paying salaries for inefficiency.
                </p>
                <p className="text-[#FFFFFFB2] lg:text-sm text-xs mt-2">
                  AI doesn't call in sick. It doesn't zone out. It just works.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <motion.img
                src="/assets/business-scale/money-flames.svg"
                alt=""
                className="w-32 h-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                loading="lazy"
              />
            </div>

            <div 
              ref={ref}
              className="relative h-[400px]"
              style={{
                backgroundImage: "url('/assets/business-scale/graph-3.svg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              {infoBoxes.map((box, i) => (
                <InfoBox key={i} {...box} />
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="2xl:h-[800px] h-[800px] lg:w-[49%] w-full flex flex-col justify-between">
            
            {/* Top Right Section */}
            <div 
              className="lg:h-[48%] h-[350px] relative pt-8 lg:px-8 px-3 group"
              style={{
                ...containerStyles,
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')"
              }}
            >
              <AnimatedBorder />

              <div className="flex flex-col">
                <p className="text-white lg:text-base text-sm">
                  Every unreturned call, late response, and forgotten follow-up costs you revenue.
                </p>
                <p className="text-[#FFFFFFB2] mt-3 text-xs">
                  AI follows up instantly, relentlessly, and perfectly every time.
                </p>
              </div>

              <div className="flex justify-center items-center w-full mt-4">
                <motion.button
                  className="bg-[#20202080] w-[50%] relative py-3 cursor-pointer group/button"
                  onClick={handlePlayMusic}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-full flex justify-center items-center">
                    <img 
                      src="/assets/icons/listen-icon.svg" 
                      alt="listen icon" 
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    <p className="ml-3 text-sm">
                      {isPlaying ? "Stop Music" : "Tap to Listen"}
                    </p>
                  </div>
                  <AnimatedBorder />
                </motion.button>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-96 w-72 lg:h-48 h-30 overflow-hidden">
                <motion.div
                  className="lg:w-96 lg:h-96 w-72 h-72 rounded-full"
                  style={{
                    backgroundImage: "url('/assets/business-scale/live-call-disc.svg')",
                    backgroundSize: "cover"
                  }}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 12,
                    ease: "linear"
                  }}
                />
              </div>
            </div>

            {/* Bottom Right Section */}
            <div 
              className="lg:h-[48%] h-[350px] relative lg:mt-0 mt-4 lg:px-4 lg:py-6 pt-8 px-3 py-3 group"
              style={{
                ...containerStyles,
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')"
              }}
            >
              <AnimatedBorder />
              
              <div className="flex flex-col">
                <p className="text-white lg:text-base text-sm">
                  Instead of focusing on strategy and expansion, you're stuck putting out fires.
                </p>
                <p className="text-[#FFFFFFB2] mt-3 text-xs">
                  AI handles the repetitive, time-sucking tasks so you can lead, not babysit.
                </p>
              </div>
              
              <div className="relative w-full mt-10">
                <img
                  src="/assets/business-scale/strategy.svg"
                  className="absolute left-10"
                  alt="strategy"
                  loading="lazy"
                />
                <img
                  src="/assets/business-scale/anna.png"
                  className="absolute left-6 top-8"
                  alt="anna"
                  loading="lazy"
                />
                
                <div className="absolute left-30 top-10">
                  {tasks.map((task, i) => (
                    <TaskItem key={i} {...task} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="2xl:h-[400px]  w-full flex lg:flex-row flex-col mt-6 justify-between lg:gap-4 gap-2">
          
          {/* First Additional Panel */}
          <div className="lg:h-full lg:w-[49%] w-full h-full">
            <div 
              className="w-full h-[80%] group relative pt-8 lg:px-8 px-3"
              style={{
                ...containerStyles,
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')"
              }}
            >
              <AnimatedBorder />
              <div className="flex flex-col">
                <p className="text-white lg:text-base text-sm">
                  Every unreturned call, late response, and forgotten follow-up costs you revenue.
                </p>
                <p className="text-[#FFFFFFB2] mt-3 text-xs">
                  AI follows up instantly, relentlessly, and perfectly every time.
                </p>
              </div>
              <div className="w-full h-[70%] flex items-center justify-center">
                <img 
                  src="/assets/business-scale/move.webp" 
                  alt="" 
                  className="w-full h-full" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Second Additional Panel */}
          <div className="lg:h-full lg:w-[49%] w-full h-full">
            <div 
              className="w-full h-[80%] group relative pt-8 lg:px-8 px-3"
              style={{
                ...containerStyles,
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')"
              }}
            >
              <AnimatedBorder />
              <div className="flex flex-col">
                <p className="text-white lg:text-base text-sm">
                  Your Competitors Are Already Automating.
                </p>
                <p className="text-[#FFFFFFB2] mt-3 text-xs">
                  AI follows up instantly, relentlessly, and perfectly every time.
                </p>
              </div>
              <img 
                src="/assets/business-scale/scale-new.svg" 
                alt="" 
                className="w-full h-full" 
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="lg:mt-[-40px] mt-0 w-full min-h-[200px] flex lg:flex-row flex-col justify-between gap-4">
          <div className="lg:w-[49%] w-full h-full">
            <div className="w-full flex justify-end">
              <div className="lg:w-[80%] w-full font-normal text-base text-white lg:pr-8 pr-0 mt-8">
                <p className="text-[#FFFFFFB2]">Your team should be closing deals, not chasing admin work.</p>
                <p className="text-[#FFFFFFB2] mt-5">Your leads should be buying, not waiting on a follow-up.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[49%] w-full h-full">
            <div className="lg:w-[65%] w-full mt-8 font-normal text-base text-white lg:pl-4 pl-0">
              <p className="text-[#FFFFFFB2]">Your business should be scaling, not stalling.</p>
              <p className="mt-5">AI agents fix all of this. You ready?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}