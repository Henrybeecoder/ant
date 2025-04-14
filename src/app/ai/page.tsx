//@ts-ignore
//@ts-nocheck
'use client'
import { motion, useAnimation } from "framer-motion";
import React, { useState, useRef, useEffect, useCallback } from "react";
import FAQSection from "@/components/faq-section/page";
import Footer from "@/components/footer-section/page";
import AppLayout from "../../appLayout/page";
import BrandMarquee from "@/components/brandMarquee/page";
import BookCallButton from "@/components/book-call-btn/page";
import Image from "next/image";
// import { Rewind, FastForward } from 'react-feather';
import { VideoPlayer } from "@/components/video-player/page";

// Throttle hook for scroll events
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

const brandImages = Array.from({ length: 11 }, (_, i) => i + 1);

export default function Ai() {
  const controls = useAnimation();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showFixedBar, setShowFixedBar] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [showVideoControls, setShowVideoControls] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  
  const section0Ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Initialize animations
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Throttled scroll handler
  const handleScrollCTA = useThrottle(() => {
    if (section0Ref.current) {
      const heroBottom = section0Ref.current.offsetTop + section0Ref.current.offsetHeight;
      setShowFixedBar(window.scrollY + window.innerHeight > heroBottom);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCTA);
    return () => window.removeEventListener("scroll", handleScrollCTA);
  }, [handleScrollCTA]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        clearInterval(progressInterval.current);
      } else {
        videoRef.current.play();
        startProgressTimer();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const startProgressTimer = () => {
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  // Commented out rewind/fast forward functions for now
  /*
  const fastForward = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.currentTime + seconds, duration);
    }
  };

  const rewind = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(videoRef.current.currentTime - seconds, 0);
    }
  };
  */

  useEffect(() => {
    return () => {
      clearInterval(progressInterval.current);
    };
  }, []);

  return (
    <AppLayout showFixedBar={showFixedBar}>
      <motion.div
        className="mt-30 flex relative flex-col justify-center items-center"
        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: prefersReducedMotion ? 0.3 : 0.8 }}
      >
        <div className="lg:w-[60%] w-[100%]">
          <p className="font-[500] text-center lg:px-[120px] px-0 lg:text-[1.75rem] lg:leading-9 leading-7 text-[1.25rem]">
            We Build Quality AI Agents That Handle Sales and Support 24/7. {" "}
            <span className="text-[#FF4733]">
              So You Never Lose a Customer Again.
            </span>
          </p>
          <p className="font-[400] my-5 text-center lg:px-[160px] px-0 text-[#FFFFFFB2] lg:text-[1rem] text-[0.875rem]">
            MIT research shows you're 100x more likely to lose a customer if you don't respond within 5 minutes.
          </p>

          <div 
            className="w-full flex flex-row justify-center mt-8 relative" 
            ref={section0Ref}
            onMouseEnter={() => setShowVideoControls(true)}
            onMouseLeave={() => setShowVideoControls(false)}
          >
            <div className="w-full" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <VideoPlayer
                src="/assets/videos/mov.mp4"
                
                loop
                showControls={showVideoControls}
              />
            </div>
          </div>

          <BookCallButton />
          
          <BrandMarquee brandImages={brandImages} />
          
          <div>
            <FAQSection />
          </div>
       
          <div className="mt-60">
            <Footer />
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}

// Helper function to format time (seconds to MM:SS)
function formatTime(seconds: number): string {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}