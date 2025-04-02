import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const circlesData = [
  { cx: "30%", cy: "50%", text: "Custom AI Agent", area: "Handles Sales, Support & Operations" },
  { cx: "50%", cy: "30%", text: "Multimodal AI", area: "Text, Voice, Images & Videos" },
  { cx: "50%", cy: "70%", text: "Full Management", area: "We are with you every step of the way" },
  { cx: "70%", cy: "50%", text: "Data-Driven Optimization", area: "Gets smarter overtime" },
];

const labelData = [
  // Unique Areas
  {
    cx: "15%",
    cy: "50%",
    text: "Custom AI Agent",
    area: "Handles Sales, Support & Operations",
    mobileMarginClasses: "sm:mr-6 md:mr-8",
  },
  {
    cx: "50%",
    cy: "15%",
    text: "Multimodal AI",
    area: "Text, Voice, Images & Videos",
    mobileMarginClasses: "mt-2 mr-2 sm:mr-4 md:mr-6",
  },
  {
    cx: "50%",
    cy: "85%",
    text: "Full Management",
    area: "We are with you every step of the way",
    mobileMarginClasses: "mb-2 ml-2 sm:mb-4 md:mb-6",
  },
  {
    cx: "85%",
    cy: "50%",
    text: "Data-Driven Optimization",
    area: "Gets smarter overtime",
    mobileMarginClasses: " sm:ml-10 md:ml-8",
  },

  // Intersections
  {
    cx: "35%",
    cy: "35%",
    text: "",
    area: "Smarter Automations Over Time",
    mobileMarginClasses: "mt-2",
  },
  {
    cx: "35%",
    cy: "65%",
    text: "",
    area: "Seamless Integration & Training",
    mobileMarginClasses: "mb-2",
  },
  {
    cx: "65%",
    cy: "35%",
    text: "",
    area: "Automations & CRM Integrations",
    mobileMarginClasses: "mt-2",
  },
  {
    cx: "65%",
    cy: "65%",
    text: "",
    area: "AI That Scales With You",
    mobileMarginClasses: "mb-2",
  },

  // Central Intersection
  {
    cx: "50%",
    cy: "50%",
    text: "All Features",
    area: "Intersection of All Circles",
    mobileMarginClasses: "mx-2",
  },
];

const VennDiagram = () => {
  return (
    <div className="mt-[200px]">
      <div className="mb-2">
        <p className="text-center text-[1.6rem] lg:leading-0 leading-8 lg:mb-10">
          Here’s What You Get When You Work With Us
        </p>
        <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-0">
          No BS, Just Results.
        </p>
      </div>

      <div className="flex flex-col text-white">
        <div className="relative flex justify-center items-center lg:py-2">
          {/* Venn Diagram Container */}
          <div className="relative w-[350px] h-[350px] lg:w-[600px] lg:h-[600px]">

            {/* Circles */}
            {circlesData.map(({ cx, cy }, index) => (
              <div
                key={`circle-${index}`}
                className="absolute"
                style={{
                  left: cx,
                  top: cy,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Main Circle */}
                <motion.div
                  className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#444444] border-opacity-50"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Orange Border Circle */}
                <motion.div
                  className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#FF4733] border-opacity-50 absolute top-0 left-0"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 50%, 100% 40%, 50% 20%)",
                  }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration:
                      index === 0 ? 5 :
                        index === 1 ? 6 :
                          index === 2 ? 7 : 8, // unique durations
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            ))}

            {/* Text Labels */}
            {labelData.map(({ cx, cy, text, area, mobileMarginClasses }, index) => (
              <div
                key={`label-${index}`}
                className={`absolute flex flex-col items-center justify-center ${mobileMarginClasses ?? ""}`}
                style={{
                  left: cx,
                  top: cy,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {text === "All Features" ? (
                  // Show the image if it's the central intersection
                  <Image
                    src="/assets/images/venn-logo.svg"
                    alt="All Features"
                    width={60}
                    height={60}
                    className="mb-2 w-[40%] lg:w-[80%] max-w-[80px] max-h-[80px]"
                  />
                ) : (
                  // Otherwise, show text
                  <div className="text-center urbanist text-white font-[500] lg:w-[100%] w-[50%] text-[0.65rem] lg:text-[0.9rem] leading-tight">
                    {text}
                  </div>
                )}

                {/* Footer text (area) if not the "All Features" */}
                {text !== "All Features" && (
                  <div className="text-center text-white/70 font-[400] mt-2 lg:w-[80%] w-[50%] text-[0.5rem] lg:text-[0.7rem]">
                    {area}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
