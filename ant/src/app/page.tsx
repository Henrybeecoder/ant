'use client'
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef, useEffect, useCallback } from "react";
import UseCase from "@/components/use-case-slider/page";
import BusinessScaleSection from "@/components/business-scale-section/page";
import { Particles } from "@/components/magicui/particles";
import FAQSection from "@/components/faq-section/page";
import TechStackSection from "@/components/tech-stack-section/page";
import Footer from "@/components/footer-section/page";
import ProcessSection from "@/components/process-section/page";
import VennDiagram from "@/components/venn-diagram/page";
import WhoWeWorkWith from "@/components/who-we-work-with-section/page";
import Testimonies from "@/components/testimonies-slider/page";
import QuoteByWorldLeaders from "@/components/quote-by-world-leaders-section/page";
import AppLayout from "../appLayout/page";

// A simple throttle hook for scroll events
const useThrottle = (callback: Function, delay: number) => {
  const lastCall = useRef(0);
  return useCallback((...args: any[]) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      callback(...args);
      lastCall.current = now;
    }
  }, [callback, delay]);
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const sidebarAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

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
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showFixedBar, setShowFixedBar] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  // Unique refs for different sections
  const section0Ref = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null); // Hero Section
  const section2Ref = useRef<HTMLDivElement | null>(null); // Use Cases
  const section3Ref = useRef<HTMLDivElement | null>(null); // Business Scale / Testimonials
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);
  const section6Ref = useRef<HTMLDivElement | null>(null);
  const section7Ref = useRef<HTMLDivElement | null>(null);
  const section8Ref = useRef<HTMLDivElement | null>(null);
  const section9Ref = useRef<HTMLDivElement | null>(null);
  const section10Ref = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
    section8Ref,
    section9Ref,
    section10Ref,
  ];

  // Determine if mobile based on window width
  const isMobile = windowWidth < 768;

  // Check for user's reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Throttled scroll handler to update fixed CTA visibility
  const handleScrollCTA = useThrottle(() => {
    if (section0Ref.current) {
      const heroBottom = section0Ref.current.offsetTop + section0Ref.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      setShowFixedBar(scrollPosition > heroBottom);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCTA);
    return () => window.removeEventListener("scroll", handleScrollCTA);
  }, [handleScrollCTA]);

  // Throttled scroll handler for tracking the current section
  const handleScrollSection = useThrottle(() => {
    const scrollPos = window.scrollY;
    const offsets = sectionRefs.map(ref => ref.current?.offsetTop || 0);
    const activeSection = offsets.findIndex(
      (offset, index) =>
        scrollPos >= offset - 120 && scrollPos < (offsets[index + 1] || Infinity)
    );
    setCurrentSection(activeSection);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSection);
    return () => window.removeEventListener("scroll", handleScrollSection);
  }, [handleScrollSection]);

  // Update window width
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUnmute = () => setIsMuted(false);
  const handleMute = () => setIsMuted(true);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const offset = 120;
      const top = sectionRef.current.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const sectionNames = [
    "Hero Section",
    "Use Cases",
    "Why You Need This",
    "Who We Work With",
    "What You Get",
    "How we Work",
    "Tech Stacks",
    "FAQ's",
    "Quotes",
    "Footer",
  ];

  return (
    <AppLayout showFixedBar={showFixedBar}>
      <SectionLines
        sectionNames={sectionNames}
        scrollToSection={scrollToSection}
        sectionRefs={sectionRefs}
        windowWidth={windowWidth}
        currentSection={currentSection}
        isMobile={isMobile}
      />
      {/* Hero Section */}
      <motion.div
        className="mt-30 flex relative flex-col justify-center items-center"
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: prefersReducedMotion ? 0.3 : 0.8 }}
        ref={section1Ref}
      >
        <div className="lg:w-[60%] w-[100%]">
          <p
            ref={section0Ref}
            className="font-[500] text-center lg:px-[120px] px-0 lg:text-[1.75rem] lg:leading-9 leading-7 text-[1.25rem]"
          >
            Turn Your Fast-Growing Flood of Inquiries into Sales Wins! Our AI
            Assistants Handle Service and Sales 24/7.{" "}
            <span className="text-[#FF4733]">
              More Affordable Than Staff, More Profitable for Your Business
            </span>
          </p>
          <p className="font-[400] my-5 text-center lg:px-[160px] px-0 text-[#FFFFFFB2] lg:text-[1rem] text-[0.875rem]">
            We Build and Manage Custom AI Agents & Automations to Sell, Support,
            and Automate - Saving Your Time for What Truly Matters
          </p>
          <div className="w-full flex flex-row cursor-pointer justify-center mt-8">
            <button className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all">
              <Image src="/assets/images/ose.svg" alt="" width={50} height={50} />
              <div className="text-[#FFFFFF] h-full flex flex-col justify-center items-center mx-3">
                <p className="font-[600] lg:text-[1rem] text-[0.8rem]">
                  Book a call with Ose (founder)
                </p>
                <p className="font-[500] lg:text-[0.75rem] text-[0.7rem]">
                  (It’s not going to be a sales pitch)
                </p>
              </div>
            </button>
          </div>
          {/* Brand Slider */}
          <div ref={section0Ref} className="overflow-hidden mt-10 relative">
            <div
              className="absolute inset-y-0 left-0 w-[10%] z-10"
              style={{
                background: "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
              }}
            ></div>
            <div
              className="absolute inset-y-0 right-0 w-[10%] z-10"
              style={{
                background: "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
              }}
            ></div>
            <motion.div
              className="flex items-center gap-20 my-14"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: isMobile ? 60 : 90,
                ease: "linear",
              }}
              style={{ width: "1000%" }}
            >
              <div className="flex items-center gap-28">
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
              <div className="flex items-center gap-28">
                {brandImages.map((num, index) => (
                  <Image
                    key={`${index}`}
                    src={`/assets/slider-img/${num}.svg`}
                    className="w-full h-full"
                    alt={`company${num}`}
                    width={300}
                    height={53}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          <div ref={section2Ref}>
            <UseCase />
          </div>
          <div ref={section3Ref}>
            <BusinessScaleSection />
          </div>
          <div ref={section4Ref}>
            <WhoWeWorkWith />
          </div>
          <div ref={section5Ref}>
            <VennDiagram />
          </div>
          <div ref={section6Ref}>
            <ProcessSection />
          </div>
          <div ref={section7Ref}>
            <TechStackSection />
          </div>
          <div ref={section8Ref}>
            <FAQSection />
          </div>
          <QuoteByWorldLeaders />
          <div ref={section9Ref}>
            <Footer />
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}

interface SectionLinesProps {
  sectionNames: string[];
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sectionRefs: React.RefObject<HTMLDivElement>[];
  windowWidth: number;
  currentSection: number | null;
  isMobile: boolean;
}

const SectionLines: React.FC<SectionLinesProps> = ({
  sectionNames,
  scrollToSection,
  sectionRefs,
  windowWidth,
  currentSection,
  isMobile,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 ${isHovered ? "h-full" : "h-0"} ${isHovered ? "w-full" : "w-[30%]"} z-50`}
      style={{
        backdropFilter: isMobile ? "none" : isHovered ? "blur(20px)" : "none",
        backgroundColor: isMobile ? "transparent" : isHovered ? "#000000A3" : "transparent",
        transition: "backdrop-filter 0.3s, background-color 0.3s",
      }}
    >
      <div
        style={{
          zIndex: "300",
          marginLeft: windowWidth >= 2116 ? "400px" : "250px",
          marginTop: "130px",
          width: "100%",
          display: windowWidth >= 1024 ? "block" : "none",
          height: "100vh",
        }}
      >
        {sectionNames.map((name, index) => (
          <div className="w-[70%]" key={index}>
            <div className="flex flex-row items-center h-[30px] justify-start">
              {/* Animated Line */}
              <motion.div
                className="w-[30px] h-[1.5px] cursor-pointer"
                style={{ backgroundColor: "#FF4733" }}
                animate={{
                  width:
                    isHovered && currentSection !== index
                      ? "70px"
                      : isHovered && currentSection === index
                      ? "70px"
                      : currentSection === index
                      ? "50px"
                      : "30px",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => scrollToSection(sectionRefs[index])}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-transparent">dummy</div>
              </motion.div>
              {/* Section Name */}
              <motion.div
                className="ml-10 mt-[-10px] w-[200px] font-[500] h-0 text-[1.2rem] flex items-start justify-start cursor-pointer"
                style={{
                  color: currentSection === index ? "#FF4733" : "#444444",
                }}
                initial={{ opacity: 0, color: "#444444" }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => scrollToSection(sectionRefs[index])}
                whileHover={{ scale: 1.05, color: "#FF4733" }}
              >
                {name}
              </motion.div>
            </div>
            <motion.div className="w-[30px] h-[1px] cursor-pointer" style={{ backgroundColor: "#444444" }}></motion.div>
            <motion.div className="w-[30px] h-[1px] mt-3 cursor-pointer" style={{ backgroundColor: "#444444" }}></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
