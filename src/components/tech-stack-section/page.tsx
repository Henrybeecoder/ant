import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function TechStackSection() {
  const stackimages = useMemo(() => [
    [
      "/assets/tech-stacks/react.svg",
      "/assets/tech-stacks/typescript.svg",
      "/assets/tech-stacks/node.svg",
      "/assets/tech-stacks/pine.svg",
      "/assets/tech-stacks/gitlab.svg",
    ],
    [
      "/assets/tech-stacks/pyramid.svg",
      "/assets/tech-stacks/chat-gpt.svg",
      "/assets/tech-stacks/prometheus.svg",
      "/assets/tech-stacks/terraform.svg",
      "/assets/tech-stacks/aws.svg",
    ],
    [
      "/assets/tech-stacks/posgres.svg",
      "/assets/tech-stacks/swift.svg",
      "/assets/tech-stacks/google-cloud.svg",
      "/assets/tech-stacks/r-vector.svg",
      "/assets/tech-stacks/github.svg",
    ],
    [
      "/assets/tech-stacks/notion.svg",
      "/assets/tech-stacks/gmail.svg",
      "/assets/tech-stacks/whatsapp.svg",
      "/assets/tech-stacks/instagram.svg",
      "/assets/tech-stacks/telegram.svg",
    ],
    [
      "/assets/tech-stacks/facebook.svg",
      "/assets/tech-stacks/slack.svg",
      "/assets/tech-stacks/hubspot.svg",
      "/assets/tech-stacks/figma.svg",
      "/assets/tech-stacks/microsoft.svg",
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