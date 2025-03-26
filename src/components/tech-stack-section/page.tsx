import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function TechStackSection() {
  const stackimages = useMemo(() => [
    [
      "/assets/tech-stacks/webp/react.webp",
      "/assets/tech-stacks/webp/typescript.webp",
      "/assets/tech-stacks/webp/node.webp",
      "/assets/tech-stacks/webp/pine.webp",
      "/assets/tech-stacks/webp/gitlab.webp",
    ],
    [
      "/assets/tech-stacks/webp/pyramid.webp",
      "/assets/tech-stacks/webp/chat-gpt.webp",
      "/assets/tech-stacks/webp/prometheus.webp",
      "/assets/tech-stacks/webp/terraform.webp",
      "/assets/tech-stacks/aws.svg",
    ],
    [
      "/assets/tech-stacks/webp/posgres.webp", // Fixed typo from "posgres" to "postgres"
      "/assets/tech-stacks/webp/swift.webp",
      "/assets/tech-stacks/webp/google-cloud.webp",
      "/assets/tech-stacks/webp/r-vector.webp",
      "/assets/tech-stacks/github.svg",
    ],
    [
      "/assets/tech-stacks/webp/notion.webp",
      "/assets/tech-stacks/webp/gmail.webp",
      "/assets/tech-stacks/webp/whatsapp.webp",
      "/assets/tech-stacks/webp/instagram.webp",
      "/assets/tech-stacks/webp/telegram.webp",
    ],
    [
      "/assets/tech-stacks/webp/facebook.webp",
      "/assets/tech-stacks/webp/slack.webp",
      "/assets/tech-stacks/webp/hubspot.webp",
      "/assets/tech-stacks/figma.svg",
      "/assets/tech-stacks/webp/microsoft.webp",
    ],
  ], []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  return (
    <div className="min-h-[20vh] lg:mt-0 mt-22">
      <p className="text-center font-[500] lg:text-[1.6rem] text-[1.3rem] lg:leading-0 leading-8 mb-4 lg:mb-10">
        Tech Stack & Integrations
      </p>
      {stackimages.map((row, rowIndex) => (
        <div 
          key={`row-${rowIndex}`} 
          className="w-full flex flex-row lg:mt-16 mt-8 justify-between"
        >
          {row.map((image, index) => (
            <motion.div
              key={`image-${rowIndex}-${index}`}
              className="relative flex justify-center lg:w-[8%] w-[15%] items-center py-3 bg-[#151515] group overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "20px" }}
              variants={animationVariants}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <img
                src={image}
                alt={`stack-${index}`}
                className="lg:w-[30px] lg:h-[30px] w-[25px] h-[25px]"
                loading="lazy"
                width="30"
                height="30"
              />
              {/* Optimized hover borders */}
              <div className="absolute inset-0 overflow-hidden">
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
      <div className="w-full justify-center items-center mt-5 flex flex-row">
        <motion.p 
          className="text-[#444444] font-[500] lg:text-[1.4rem] text-[1rem]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          And more ..........
        </motion.p>
      </div>
    </div>
  );
}