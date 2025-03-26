// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const VennDiagram = () => {
//   // Memoize circle data to prevent unnecessary recalculations
//   const circles = useMemo(() => [
//     { cx: "30%", cy: "50%", text: "Custom AI Agent", area: "Handles Sales, Support & Operations", duration: 5 },
//     { cx: "50%", cy: "30%", text: "Multimodal AI", area: "Text, Voice, Images & Videos", duration: 6 },
//     { cx: "50%", cy: "70%", text: "Full Management", area: "We are with you every step of the way", duration: 7 },
//     { cx: "70%", cy: "50%", text: "Data-Driven Optimization", area: "Gets smarter overtime", duration: 8 },
//   ], []);

//   // Memoize text labels data
//   const labels = useMemo(() => [
//     // Unique Areas
//     { cx: "15%", cy: "50%", text: "Custom AI Agent", area: "Handles Sales, Support & Operations" },
//     { cx: "50%", cy: "15%", text: "Multimodal AI", area: "Text, Voice, Images & Videos" },
//     { cx: "50%", cy: "85%", text: "Full Management", area: "We are with you every step of the way" },
//     { cx: "85%", cy: "50%", text: "Data-Driven Optimization", area: "Gets smarter overtime" },

//     // Intersections
//     { cx: "35%", cy: "35%", text: "", area: "Smarter Automations Over Time" },
//     { cx: "35%", cy: "65%", text: "", area: "Seamless Integration & Training" },
//     { cx: "65%", cy: "35%", text: "", area: "Automations & CRM Integrations" },
//     { cx: "65%", cy: "65%", text: "", area: "AI That Scales With You" },

//     // Central Intersection
//     { cx: "50%", cy: "50%", text: "All Features", area: "Intersection of All Circles" },
//   ], []);

//   return (
//     <div className="mt-[200px]">
//       <div className="mb-2">
//         <p className="text-center text-[1.6rem] lg:leading-0 leading-8 lg:mb-10">
//           Here's What You Get When You Work With Us
//         </p>
//         <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-0">
//           No BS, Just Results.
//         </p>
//       </div>

//       <div className="flex flex-col text-white">
//         <div className="relative flex justify-center items-center lg:py-2">
//           {/* Venn Diagram Container - Reduced size for mobile */}
//           <div className="relative w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]">
//             {/* Circles */}
//             {circles.map(({ cx, cy, duration }, index) => (
//   <div
//     key={`circle-${index}`}
//     className="absolute will-change-transform"
//     style={{
//       left: cx,
//       top: cy,
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     {/* Main Circle - Faster rotation */}
//     <motion.div
//       className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#444444] border-opacity-50"
//       initial={{ rotate: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: index === 0 ? 12 : 
//                  index === 1 ? 14 : 
//                  index === 2 ? 16 : 18, // Faster durations (12-18 seconds)
//         repeat: Infinity,
//         ease: "linear",
//       }}
//     />

//     {/* Orange Border Circle - Even faster complementary rotation */}
//     <motion.div
//       className="w-[150px] h-[150px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#FF4733] border-opacity-50 absolute top-0 left-0"
//       style={{
//         clipPath: "polygon(50% 50%, 100% 50%, 100% 40%, 50% 20%)",
//       }}
//       initial={{ rotate: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{
//         duration: index === 0 ? 8 : 
//                  index === 1 ? 10 : 
//                  index === 2 ? 12 : 14, // Faster complementary durations (8-14 seconds)
//         repeat: Infinity,
//         ease: "linear",
//       }}
//     />
//   </div>
// ))}

//             {/* Text Labels - Optimized rendering */}
//             {labels.map(({ cx, cy, text, area }, index) => (
//               <div
//                 key={`label-${index}`}
//                 className="absolute flex flex-col items-center justify-center will-change-transform" // Optimize for transform
//                 style={{
//                   left: cx,
//                   top: cy,
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 {text === "All Features" ? (
//                   <Image
//                     src="/assets/images/venn-logo.svg"
//                     alt="All Features"
//                     width={30}
//                     height={30}
//                     className="mb-2 w-[10px] lg:w-[40px] h-[40px] lg:h-[80px]" // Fixed dimensions
//                     priority // Preload important image
//                   />
//                 ) : (
//                   <>
//                     <div className="text-center urbanist text-white font-[500] text-[0.7rem] lg:text-[0.9rem] leading-tight">
//                       {text}
//                     </div>
//                     {area && (
//                       <div className="text-center text-white/70 font-[400] mt-1 w-[80px] lg:w-[120px] text-[0.4rem] lg:text-[0.7rem]">
//                         {area}
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VennDiagram;















import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const VennDiagram = () => {
  return (
    <div className="mt-[200px]">
      <div className="mb-2 " >
        <p className="text-center text-[1.6rem]  lg:leading-0 leading-8  lg:mb-10">
          Here’s What You Get When You Work With Us
        </p>
        <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-0">
          No BS, Just Results.
        </p>
      </div>

      <div className="flex flex-col text-white">
        <div className="relative flex justify-center items-center  lg:py-2">
          {/* Venn Diagram Container */}
          <div className="relative w-[350px] h-[350px]  lg:w-[600px] lg:h-[600px]">
            {/* Circles */}
            {[
              { cx: "30%", cy: "50%", text: "Custom AI Agent", area: "Handles Sales, Support & Operations" },
              { cx: "50%", cy: "30%", text: "Multimodal AI", area: "Text, Voice, Images & Videos" },
              { cx: "50%", cy: "70%", text: "Full Management", area: "We are with you every step of the way" },
              { cx: "70%", cy: "50%", text: "Data-Driven Optimization", area: "Gets smarter overtime" },
            ].map(({ cx, cy }, index) => (
              <div
                key={index}
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
                    duration: index === 0 ? 5 : index === 1 ? 6 : index === 2 ? 7 : 8, // Unique durations for each circle
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            ))}

            {/* Text Labels for Each Area */}
            {[
              // Unique Areas
              { cx: "15%", cy: "50%", text: "Custom AI Agent", area: "Handles Sales, Support & Operations" },
              { cx: "50%", cy: "15%", text: "Multimodal AI", area: "Text, Voice, Images & Videos" },
              { cx: "50%", cy: "85%", text: "Full Management", area: "We are with you every step of the way" },
              { cx: "85%", cy: "50%", text: "Data-Driven Optimization", area: "Gets smarter overtime" },

              // Intersections
              { cx: "35%", cy: "35%", text: "", area: "Smarter Automations Over Time" },
              { cx: "35%", cy: "65%", text: "", area: "Seamless Integration & Training" },
              { cx: "65%", cy: "35%", text: "", area: "Automations & CRM Integrations" },
              { cx: "65%", cy: "65%", text: "", area: "AI That Scales With You" },

              // Central Intersection
              { cx: "50%", cy: "50%", text: "All Features", area: "Intersection of All Circles" },
            ].map(({ cx, cy, text, area }, index) => (
              <div
                key={index}
                className="absolute flex flex-col items-center justify-center"
                style={{
                  left: cx,
                  top: cy,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Header */}
                {text === "All Features" ? (
                  <Image
                    src="/assets/images/venn-logo.svg"
                    alt="All Features"
                    width={60}
                    height={60}
                    className="mb-2 w-[40%] lg:w-[80%] max-w-[80px] max-h-[80px]" // Responsive sizing
                  />
                ) : (
                  <div className="text-center urbanist text-white font-[500] text-[0.7rem] lg:text-[0.9rem] leading-tight">
                    {text}
                  </div>
                )}

                {/* Footer */}
                {text !== "All Features" && (
                  <div className="text-center text-white/70 font-[400] mt-2 w-[80%] text-[0.4rem] lg:text-[0.7rem] mt-1">
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