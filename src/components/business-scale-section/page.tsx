import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react"; // Use useState for re-renders
import useSound from "use-sound";

export default function BusinessScaleSection() {
  const [isPlaying, setIsPlaying] = useState(false); // Use state to trigger re-renders
  const [play, { stop }] = useSound("/assets/audios/hurry.mp3", {
    volume: 0.5,
  });

  // Animation controls
  const graphControls = useAnimation();
  const [graphRef, graphInView] = useInView({ triggerOnce: true });

  // Trigger animations when in view
  useEffect(() => {
    if (graphInView) {
      graphControls.start({ opacity: 1, x: 0, y: 0 });
    }
  }, [graphInView, graphControls]);

  // Handle play/pause music
  const handlePlayMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-[100vh] my-[200px]   urbanist z-80">
      <div className="mb-5">
        <div className="flex w-full lg:px-14 px-0 py-8 flex-col justify-start items-start text-start">
          <p className="text-[#FFFFFFB2] text-start text-[0.9rem] mb-1">
            Why you need this
          </p>
          <p className="text-start text-[1.4rem]">
            Your Business Could Be Scaling Faster. Here’s What’s Stopping You.
          </p>
        </div>
        <div className="lg:h-[800px] h-[1200px] flex lg:flex-row flex-col justify-between gap-4">
          {/* First Container */}
          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/number.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
            className="h-full lg:w-[49%] w-[100%] relative group overflow-hidden"
          >
            {/* Animated Border */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>

            {/* Content */}
            <div
              style={{
                background:
                  "linear-gradient(180deg, #000000 75.89%, rgba(0, 0, 0, 0) 100%)",
              }}
            >
              <div className="flex flex-col w-full pb-4 pt-8 px-4 font-[400]">
                <span className="text-white lg:text-[1rem] text-[0.8rem]">
                  Missed follow-ups, slow replies, half-hearted execution—you’re
                  paying salaries for inefficiency.
                </span>
                <span className="text-[#FFFFFFB2] lg:text-[0.9rem] text-[0.7rem] mt-2">
                  AI doesn’t call in sick. It doesn’t zone out. It just works.{" "}
                </span>
              </div>
            </div>

            {/* Flame Image with Flicker Effect */}
            <div className="w-full flex flex-row justify-center items-center">
              <motion.img
                src="/assets/business-scale/money-flames.svg"
                alt=""
                className="w-32 h-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            {/* Animated Graphs */}
            <div ref={graphRef} className="relative h-full">
              {/* Graph 2 */}
              {/* <motion.img
      src="/assets/business-scale/graph-2.svg"
      className="absolute lg:top-70 top-40 lg:left-56 left-38 w-[40%]  lg:w-auto"
      initial={{ opacity: 0, x: -50, y: -50 }}
      animate={graphControls}
      transition={{ duration: 1 }}
    /> */}

              {/* Graph 1 */}
              <motion.img
                src="/assets/business-scale/graph-3.svg"
                className="absolute lg:left-20 left-15 lg:h-[55%] h-[40%] w-[50%] lg:w-auto"
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={graphControls}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Wallet Info Box */}
              <div className="lg:w-[35%] w-[35%] absolute lg:top-50 top-24 lg:left-6 left-5 group">
                <div className="w-full bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4  px-2 font-[400]">
                  {/* Wallet Icon */}
                  <img
                    src="/assets/process/wallet.svg"
                    alt="icon"
                    className="lg:w-6 w-4"
                  />

                  {/* Text */}
                  <p className="ml-2 lg:text-[0.7rem] text-[0.5rem]">
                    No salaries
                  </p>

                  {/* Animated Borders */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>

              {/* Sick Day Info Box */}
              <div className="lg:w-[35%] w-[35%] absolute lg:top-80 top-40 lg:left-60 left-35 group">
                <div className="w-full bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4  px-2 font-[400]">
                  {/* Sick Day Icon */}
                  <img
                    src="/assets/process/sick.svg"
                    alt="icon"
                    className="lg:w-6 w-4"
                  />

                  {/* Text */}
                  <p className="ml-2 lg:text-[0.7rem] text-[0.5rem]">
                    No Sick days
                  </p>

                  {/* Animated Borders */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>

              {/* Work Info Box */}
              <div className="lg:w-[35%] w-[35%] absolute lg:top-100 top-55 lg:left-34 left-20 group">
                <div className="w-full bg-[#151515] flex flex-row justify-center items-center relative py-2 lg:px-4  px-2 font-[400]">
                  {/* Work Day Icon */}
                  <img
                    src="/assets/process/clock.svg"
                    alt="icon"
                    className="lg:w-4 w-4"
                  />

                  {/* Text */}
                  <p className="ml-2 lg:text-[0.7rem] text-[0.5rem]">
                    Works 24/7
                  </p>

                  {/* Animated Borders */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Container */}
          <div className="lg:h-[800px] h-[1500px] lg:w-[49%] w-[100%] flex flex-col justify-between">
  {/* Top Section */}
  <div
    className="lg:h-[48%] h-[50%] relative pt-8 lg:px-8 px-3 group"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "multiply",
    }}
  >
    {/* Animated Border */}
    <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>

    <div className="flex flex-col">
      <span className="text-white lg:text-[1rem] text-[0.8rem]">
        Every unreturned call, late response, and forgotten follow-up costs you revenue.{" "}
      </span>
      <span className="text-[#FFFFFFB2] mt-3 text-[0.6rem]">
        AI follows up instantly, relentlessly, and perfectly every time.{" "}
      </span>
    </div>

    <div className="flex flex-row justify-center items-center w-full mt-4 z-200">
      <button
        className="bg-[#20202080] w-[50%] relative py-3 cursor-pointer group/button"
        onClick={handlePlayMusic}
      >
        <div className="w-full flex flex-row justify-center items-center">
          <img src="/assets/icons/listen-icon.svg" alt="listen icon" />
          <p className="ml-3 text-[0.8rem]">
            {isPlaying ? "Stop Music" : "Tap to Listen"}
          </p>
        </div>

        {/* Animated Border */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#FF4733] group-hover/button:w-full group-hover/button:h-full transition-all duration-300 ease-out"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#FF4733] group-hover/button:w-full group-hover/button:h-full transition-all duration-300 ease-out"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#FF4733] group-hover/button:w-full group-hover/button:h-full transition-all duration-300 ease-out"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#FF4733] group-hover/button:w-full group-hover/button:h-full transition-all duration-300 ease-out"></span>
      </button>
    </div>

    {/* Rotating Circle */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:w-96 w-72 lg:h-48 h-30 overflow-hidden">
      <motion.div
        className="lg:w-96 lg:h-96 w-72 h-72 rounded-full"
        style={{
          backgroundImage:
            "url('/assets/business-scale/live-call-disc.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          duration: 10,
          ease: "linear",
          type: "tween",
        }}
      />
    </div>
  </div>

  {/* Bottom Section */}
  <div
    className="lg:h-[48%] relative h-[50%] lg:mt-0 mt-4 lg:px-4 lg:py-6 pt-8  px-3 py-3 group"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "multiply",
    }}
  >
    <div className="flex flex-col">
      <span className="text-white lg:text-[1rem] text-[0.8rem]">
        Instead of focusing on strategy and expansion, you’re stuck putting out fires.
      </span>
      <span className="text-[#FFFFFFB2] mt-3 text-[0.6rem]">
        AI handles the repetitive, time-sucking tasks so you can lead, not babysit.
      </span>
    </div>
    <div className="relative w-full mt-10">
      <img
        src="/assets/business-scale/strategy.svg"
        className="absolute left-10"
        alt="strategy"
      />
      <img
        src="/assets/business-scale/anna.png"
        className="absolute left-6 top-8"
        alt="anna"
      />
      <div className="absolute left-30 top-10">
        <div className="flex flex-row items-center text-[#FFFFFFB2] font-[400] lg:text-[0.9rem] text-[0.6rem]">
          <img
            src="/assets/business-scale/active.svg"
            className="w-4 h-4"
            alt="active"
          />
          <p className="ml-3">Lead Follow-Ups & Nurturing</p>
        </div>

        <div className="flex flex-row items-center mt-5 text-[#FFFFFFB2] font-[400] lg:text-[0.9rem] text-[0.6rem]">
          <img
            src="/assets/business-scale/active.svg"
            className="w-4 h-4"
            alt="active"
          />
          <p className="ml-3">Customer Support & Inquiry</p>
        </div>

        <div className="flex flex-row items-center mt-5 text-[#6D6D6D] font-[400] lg:text-[0.9rem] text-[0.6rem]">
          <img
            src="/assets/business-scale/inactive.svg"
            className="w-4 h-4"
            alt="inactive"
          />
          <p className="ml-3">Data Entry & Cleanup</p>
        </div>
        <div className="flex flex-row items-center mt-5 text-[#6D6D6D] font-[400] lg:text-[0.9rem] text-[0.6rem]">
          <img
            src="/assets/business-scale/inactive.svg"
            className="w-4 h-4"
            alt="inactive"
          />
          <p className="ml-3">Task Automation & Delegation</p>
        </div>
        <div className="flex flex-row items-center mt-5 text-[#6D6D6D] font-[400] lg:text-[0.9rem] text-[0.6rem]">
          <img
            src="/assets/business-scale/inactive.svg"
            className="w-4 h-4"
            alt="inactive"
          />
          <p className="ml-3">Billing & Invoice Tracking</p>
        </div>
      </div>
    </div>
    <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
  </div>
</div>
        </div>

        <div className="2xl:h-[400px]   w-[100%] flex lg:flex-row flex-col mt-6 justify-between gap-4">
          {/* first container */}
          <div className="lg:h-[100%] lg:w-[49%] w-[100%] h-full ">
          <div
            className="w-full h-[80%] group relative pt-8 lg:px-8 px-3"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>

            <div className="flex flex-col">
              <span className="text-white lg:text-[1rem] text-[0.8rem]">
                Every unreturned call, late response, and forgotten follow-up
                costs you revenue.{" "}
              </span>
              <span className="text-[#FFFFFFB2] mt-3 text-[0.6rem]">
                AI follows up instantly, relentlessly, and perfectly every time.{" "}
              </span>
            </div>
            <div className=" w-full h-[70%] flex flex-row items-center justify-center">
            <img
              src="/assets/business-scale/move.svg"
              alt=""
              className="w-full h-full"
            />
            </div>
         
          </div>
          <div className="w-full flex flex-row justify-end">
         
          </div>
         
          </div>
          {/* second container */}
          <div className="lg:h-[100%] lg:w-[49%] w-[100%] h-full ">
          <div
            className="w-full h-[80%] group relative pt-8 lg:px-8 px-3"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('/assets/business-scale/side-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
            }}
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>

            <div className="flex flex-col">
              <span className="text-white lg:text-[1rem] text-[0.8rem]">
                Your Competitors Are Already Automating.
              </span>
              <span className="text-[#FFFFFFB2] mt-3 text-[0.6rem]">
                AI follows up instantly, relentlessly, and perfectly every time.{" "}
              </span>
            </div>

            <img
              src="/assets/business-scale/scale-new.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
       
       
          </div>


          
       
        </div>



        <div className=" lg:mt-[-40px] mt-0 w-[100%] min-h-[200px] flex lg:flex-row flex-col  justify-between gap-4">
          {/* first container */}
          <div className=" lg:w-[49%] w-[100%] h-full ">
        
          <div className="w-full flex flex-row justify-end">
          <div className="lg:w-[80%] w-[100%] h-[10%] font-[400] text-[1rem] text-[#FFFFFF] lg:pr-8 pr-0 mt-8">
          <span className="text-[#FFFFFFB2]">Your team should be closing deals, not chasing admin work.   </span>

<div className="mt-5 text-[#FFFFFFB2]" >Your leads should be buying, not waiting on a follow-up. </div>

          </div>
          </div>
         
          </div>
          {/* second container */}
          <div className=" lg:w-[49%] w-[100%] h-full ">
        
          <div className="lg:w-[65%] w-[100%] mt-8 h-[10%] font-[400] text-[1rem] text-[#FFFFFF] lg:pl-4 pl-0">
          <span className="text-[#FFFFFFB2]">Your business should be scaling, not stalling.  </span>

<div className="mt-5" >AI agents fix all of this. You ready?</div>
          </div>
       
          </div>


          
       
        </div>
      </div>
    </div>
  );
}
