'use client'
import { useEffect, useState, memo } from "react";
import { Particles } from "@/components/magicui/particles";
import { motion, useAnimation } from "framer-motion";
import FixedCTA from "@/components/fixedCTA/page";
import Sidebar from "@/components/sidebar/page";
import { useRouter, usePathname } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
  showFixedBar?: boolean;
  noHeader?: boolean;
  title?: any;
}

function AppLayout({ children, showFixedBar, noHeader, title }: AppLayoutProps) {
  const router = useRouter();
  const pathName = usePathname();
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices (viewport width < 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Respect user's reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Define animations with conditional logic
  const letterAnimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" },
    }),
  };

  const sidebarAnimation = {
    hidden: { x: prefersReducedMotion ? 0 : -100, opacity: prefersReducedMotion ? 1 : 0 },
    visible: { x: 0, opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" } },
  };

  const logoAnimation = {
    hidden: { scale: prefersReducedMotion ? 1 : 0, rotate: prefersReducedMotion ? 0 : -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: "backOut" },
    },
  };

  // Trigger animations when the component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="w-full min-h-[300vh] bg-[#0A0A0A] flex flex-row overflow-hidden relative">
      {/* Particles Background */}
      {!isMobile && (
  <Particles
  className="absolute inset-0 z-0"
  quantity={isMobile ? 300 : 400}
  ease={80}
  color={"white"}
  
/>
      )}
    

      {/* Sidebar */}
      <Sidebar controls={controls} logoAnimation={logoAnimation} sidebarAnimation={sidebarAnimation} />

      {/* Main Content */}
      <motion.div
        className="lg:w-[90%] w-[100%] min-h-full relative z-50 text-[#FFFFFF] lg:px-4 px-4 lg:ml-[10%] ml-0"
        initial="hidden"
        animate={controls}
        variants={sidebarAnimation}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Sticky Header */}
          {!noHeader && (
            <div className="fixed top-0 left-1/2 z-50 transform -translate-x-1/2 w-[100%]">
              <div
                className="flex flex-row border-b lg:w-[90%] w-[100%] h-full lg:ml-auto ml-0 border-[#181818] lg:py-8 lg:pt-8 pt-8 py-4 items-center bg-[#0A0A0A] z-50"
                style={{ backdropFilter: isMobile ? "none" : "blur(12px)" }}
              >
                {pathName !== '/' && (
                  <img 
                    src='/assets/icons/chevron-left.svg' 
                    alt='icon' 
                    className="lg:ml-8 ml-4 cursor-pointer"
                    onClick={() => router.push('/')}
                  />
                )}
                <motion.p
                  className="gambarino font-[300] text-[1.25rem] ml-6"
                  variants={letterAnimation}
                  custom={0}
                >
                  {title ? title : 'AI Agents & Automation'}
                </motion.p>
              </div>
            </div>
          )}
          {children}
        </div>
       
      </motion.div>
       {/* Fixed Bottom Bar */}
       {showFixedBar && <FixedCTA />}
    </div>
  );
}

export default memo(AppLayout);
