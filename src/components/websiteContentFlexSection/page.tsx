'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface WebsiteContentFlexSectionProps {
  section1: React.ReactNode;
  section2?: React.ReactNode;
  white?: boolean;
  subsection?: boolean;
  className?: string;
}

const WebsiteContentFlexSection: React.FC<WebsiteContentFlexSectionProps> = ({
  section1,
  section2,
  white,
  subsection,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-[40px] flex flex-row w-[100%] justify-between urbanist 2xl:text-[1rem] text-[0.8rem] mb-[50px] ${className}`}
    >
      <div className={`2xl:w-[43%] w-[49%] ${white ? 'text-[#FFFFFF]' : 'text-[#FFFFFFA3]'}`}>
        {section1}
      </div>
      {section2 && (
        <div className={`2xl:w-[43%] w-[49%] ${white ? 'text-[#FFFFFF]' : 'text-[#FFFFFFA3]'}`}>
          {section2}
        </div>
      )}
    </motion.div>
  );
};

export default WebsiteContentFlexSection;
