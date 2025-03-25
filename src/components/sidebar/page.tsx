import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Sidebar({ controls, sidebarAnimation, logoAnimation }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Still in DOM but visually hidden
  return (
    <motion.div
      className="w-[10%] bg-[#000000] h-[100vh] flex-row justify-center fixed left-0 top-0 z-10"
      style={{
        display: isMobile ? 'none' : 'flex',
        opacity: isMobile ? 0 : 1,
        pointerEvents: isMobile ? 'none' : 'auto'
      }}
      initial="hidden"
      animate={isMobile ? {} : controls}
      variants={sidebarAnimation}
    >
      <div className="absolute right-0 top-0 w-[20px] h-full bg-gradient-to-r from-[#000000] to-[#0A0A0A]"></div>
      <motion.img
        src="/assets/icons/logo.svg"
        alt="Logo"
        className="cursor-pointer w-[20%] h-[15%]"
        variants={logoAnimation}
        animate={isMobile ? {} : controls}
      />
    </motion.div>
  );
}