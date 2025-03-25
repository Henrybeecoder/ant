'use client';
import { motion } from 'framer-motion';

const AnimatedContainer = ({
    founder,
    client,
  children,
  className = '',
  borderColor = '#b1b1b1',
  hoverDuration = 0.5, // Duration in seconds
  borderRadius = '0px', // Default border radius
  hoverBorderRadius = '0px', // Border radius on hover
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        borderRadius: hoverBorderRadius, // Animate border radius on hover
      }}
      style={{ borderRadius }} // Initial border radius
      className={`relative group overflow-hidden ${className}`}
    >
      {/* Children */}
      {children}

      {/* Hover Animated Borders */}
      <span
       
        className={`absolute top-0 left-0 w-2 h-2 border-t-[0.5px] rounded-[0px] ${founder ? 'rounded-[0px]' : 'rounded-[2px]' } border-red-700 border-l-[0.5px] group-hover:w-full group-hover:h-full transition-all ease-out`}
      ></span>
      <span
        style={{ borderColor }}
        className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] rounded-[2px] border-l-[0.5px] group-hover:w-full group-hover:h-full transition-all ease-out"
      ></span>
      <span
        style={{ borderColor }}
        className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] group-hover:w-full group-hover:h-full transition-all ease-out"
      ></span>
      <span
        style={{ borderColor }}
        className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] group-hover:w-full group-hover:h-full transition-all ease-out"
      ></span>
    </motion.div>
  );
};

export default AnimatedContainer;