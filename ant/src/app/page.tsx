"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

// Animation for text letters
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// Animation for the sidebar
const sidebarAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation for the logo
const logoAnimation = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

const brandImages = Array.from({ length: 11 }, (_, i) => i + 1);

export default function Home() {
  const controls = useAnimation();
  const [isMuted, setIsMuted] = useState(true);
  const [isTextSpaced, setIsTextSpaced] = useState(false);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Function to handle unmuting the video
  const handleUnmute = () => {
    setIsMuted(false);
  };

  return (
    <div className="w-full min-h-[100vh] flex flex-row overflow-hidden">
      {/* Logo Sidebar - Fixed and Static */}
      <motion.div
        className="w-[10%] lg:flex sm:hidden md:hidden bg-[#000000] h-[100vh] flex-row justify-center fixed left-0 top-0"
        initial="hidden"
        animate={controls}
        variants={sidebarAnimation}
      >
        {/* Gradient overlay to blend the sides */}
        <div className="absolute right-0 top-0 w-[20px] h-full bg-gradient-to-r from-[#000000] to-[#0A0A0A]"></div>
        <motion.img
          src="/logo.svg"
          alt="Logo"
          className="cursor-pointer w-[30%] h-[15%]"
          variants={logoAnimation}
        />
      </motion.div>

      {/* Content Sidebar */}
      <motion.div
        className="lg:w-[90%] w-[100%] bg-[#0A0A0A] text-[#FFFFFF] lg:px-4 px-2 ml-[10%]" // Add ml-[10%] to offset the fixed sidebar
        initial="hidden"
        animate={controls}
        variants={sidebarAnimation}
      >
        {/* Header */}
        <div className="flex flex-row border-b border-[#181818] pt-5 pb-4 mt-5 items-center">
          <motion.img
            src="/chevron-left.svg"
            alt="Back"
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.p
            className="gambarino ml-3 text-[1.3rem]"
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setIsTextSpaced(true)} // Add space after animation
          >
            {"AI Agents & Automation".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                custom={i}
                style={{
                  display: "inline-block",
                  marginRight: isTextSpaced ? "4px" : "0px", // Add space between letters
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Hero Section */}
        <motion.div
          className="mt-10 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="lg:w-[60%] w-[100%]">
            <p className="font-[500] text-center lg:px-[50px] px-0 lg:text-[2rem] text-[1.2rem]">
              Turn Your Fast-Growing Flood of Inquiries into Sales Wins! Our AI
              Assistants Handle Service and Sales 24/7.{" "}
              <span className="text-[#FF4733]">
                More Affordable Than Staff, More Profitable for Your Business
              </span>
            </p>
            <p className="font-[400] text-center lg:px-[140px] px-0 text-[#FFFFFFB2] text-[1.1rem]">
              We Build and Manage Custom AI Agents & Automations to Sell,
              Support, and Automate - Saving Your Time for What Truly Matters
            </p>

            {/* Video Player */}
            <div className="w-full flex flex-row justify-center mt-8 relative">
              <div className="w-[800px] h-[450px] relative">
                {" "}
                {/* Fixed width and height */}
                <video
                  src="/jinxy.mp4" // Replace with your video URL
                  autoPlay
                  muted={isMuted}
                  loop
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                />
                {isMuted && (
                    <button 
                    onClick={handleUnmute}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15151580] text-white px-6 py-3  border-2 border-transparent hover:border-[#FFFFFF] hover:bg-[#151515] transition-all">
                    <div className="w-full h-full flex flex-row items-center">
                    <img src='/unmute.svg' alt=''   />
                    <p className="ml-1">Tap to unmute</p>
                    </div>
                 
      {/* Top-left & Bottom-left edges */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white"></span>

      {/* Top-right & Bottom-right edges */}
      <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white"></span>
    </button>
                )}
             
              </div>
            </div>

            {/* Build My AI Agent Button */}
            <div className="w-full flex flex-row justify-center mt-8">
              <button className="bg-[#4101F6] text-white px-8 py-4 rounded-lg hover:bg-[#2e00b3] transition-all">
                Build my AI Agent
              </button>
            </div>

            {/* Brand Slider */}
            <div className="overflow-hidden mt-10 relative">
              {/* Gradient Fade on Edges */}
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

              {/* Slider */}
              <motion.div
                className="flex items-center gap-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 100, // Slower animation
                  ease: "linear",
                }}
                style={{ width: "400%" }}
              >
                <div className="flex items-center gap-16">
                  {brandImages.map((num, index) => (
                    <Image
                      key={index}
                      src={`/assets/slider-img/${num}.svg`}
                      alt={`company${num}`}
                      className="w-full h-full"
                      width={300}
                      height={53}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-16">
                  {brandImages.map((num, index) => (
                    <Image
                      key={`${index}`}
                      src={`/assets/slider-img/${num}.svg`}
                      alt={`company${num}`}
                      className="w-full h-full"
                      width={300}
                      height={53}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}