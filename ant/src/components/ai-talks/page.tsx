import React from "react";
import { motion } from "framer-motion";

interface AiTalksProps {
  description: string;
  author: string;
  authorImage: string;
  authorPosition: string;
}

const AiTalks: React.FC<AiTalksProps> = ({
  description,
  author,
  authorImage,
  authorPosition,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
      className="w-full lg:px-4 px-2 relative py-6 min-h-[220px] lg:h-[200px] bg-[#181818] flex flex-col group overflow-hidden"
    >
      {/* Quote Icon */}
      <img src="/assets/icons/quote.svg" className="lg:w-5 lg:h-5 w-3 h-3 mb-3" alt="quote" />

      {/* Description */}
      <p className="font-[400] text-[#FFFFFFB2] lg:text-[1rem] text-[0.8rem] lg:leading-6 leading-4">{description}</p>

      {/* Author Info */}
      <div className="flex flex-row items-center mt-4">
        <div
          style={{
            backgroundImage: `url(${authorImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10"
        ></div>
        <div className="flex flex-col font-[500] ml-4">
          <p className="text-[#FFFFFFB2] lg:text-[1rem] text-[0.8rem]">{author}</p>
          <p className="font-[400] text-[#444444] lg:text-[0.8rem] text-[0.5rem] mt-2">
            {authorPosition}
          </p>
        </div>
      </div>

      {/* Hover Animated Borders */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></span>
      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-500 ease-out"></span>
    </motion.div>
  );
};

export default AiTalks;
