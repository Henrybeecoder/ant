import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { staticAds } from "@/utils/data";

const StaticAdsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const constraintsRef = useRef(null);

  // Handle fullscreen on mobile landscape
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth > window.innerHeight && window.innerWidth <= 768) {
        setIsFullScreen(true);
        document.documentElement.requestFullscreen().catch(e => {
          console.error("Fullscreen error:", e);
        });
      } else {
        setIsFullScreen(false);
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    };

    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    handleOrientationChange();
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        console.error("Fullscreen error:", e);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Swipe detection
  const SWIPE_CONFIDENCE_THRESHOLD = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
      handleNextSlide();
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
      handlePrevSlide();
    }
  };

  // Text slides content (abbreviated for brevity)
  const textSlides = [
    // ... (keep your existing textSlides array content)
  ];

  const allSlides = [...staticAds, ...textSlides];

  const handleNextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const handlePrevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? allSlides.length - 1 : prev - 1));
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const transition = {
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1],
  };

  return (
    <div className={`bg-[#0a0a0ac5] min-h-[20vh] my-[40px] urbanist ${isFullScreen ? 'fixed inset-0 z-50 bg-[#0a0a0a]' : ''}`}>
      <div
        className={`relative lg:pt-10 pt-5 lg:pb-8 pb-4 border-[0.5px] ${
          currentSlide < staticAds.length ? "lg:px-6 px-3" : ""
        } border-[#FFFFFFB2] ${isFullScreen ? 'h-full' : ''}`}
      >
        {currentSlide < staticAds.length ? (
          <div className="lg:mb-10 mb-2 relative">
            <div className="w-full">
              <p className="font-[400] text-[#FFFFFF] lg:text-[1.4rem] text-[0.8rem] text-center mb-1 lg:mb-6 gambarino">
                The Before & Afters Say It All
              </p>
              <p className="text-center lg:text-[1.125rem] text-[0.6rem] urbanist text-[#ffffff9d] lg:leading-0 mb-3 lg:mb-2">
                Delivered in 24 hours. No product shipped. No studio booked.
              </p>
            </div>
            <img 
              src='/assets/static-ads-icons/expand-icon.svg' 
              alt='expand' 
              className="w-5 h-5 absolute block lg:hidden top-[-13px] left-[260px] cursor-pointer" 
              onClick={toggleFullScreen}
            />
          </div>
        ) : null}

        <div
          className={`relative overflow-hidden ${
            currentSlide < staticAds.length 
              ? isFullScreen 
                ? 'h-[80vh]' 
                : 'lg:h-[300px] h-[100px]' 
              : 'lg:h-[360px] h-[200px]'
          } w-full`}
          ref={constraintsRef}
        >
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ touchAction: 'pan-y' }}
            >
              {currentSlide < staticAds.length ? (
                <div className="flex flex-row justify-between h-full w-full gap-4">
                  {/* Before Image */}
                  <motion.div
                    className="w-full md:w-[49%] border-[0.5px] border-[#444444] h-full relative overflow-hidden flex flex-col justify-center lg:px-4 px-4 py-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="h-full flex flex-col justify-between items-center">
                      <div className="relative w-full h-[90%]">
                        <Image
                          src={allSlides[currentSlide].first}
                          alt={allSlides[currentSlide].firstText}
                          fill
                          className="object-contain"
                          priority={currentSlide < 2}
                        />
                      </div>
                      <motion.p
                        className="text-[#ffffff] lg:mt-7 mt-3 text-center lg:text-[1rem] text-[0.6rem]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {allSlides[currentSlide].firstText}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* After Image */}
                  <motion.div
                    className="w-full md:w-[49%] border-[0.5px] border-[#444444] h-full relative overflow-hidden flex flex-col justify-center lg:px-4 px-4 py-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="h-full flex flex-col justify-between items-center">
                      <div className="relative w-full h-[90%]">
                        <Image
                          src={allSlides[currentSlide].second}
                          alt={allSlides[currentSlide].secondText}
                          fill
                          className="object-contain"
                          priority={currentSlide < 2}
                        />
                      </div>
                      <motion.p
                        className="text-[#FFFFFF] lg:mt-7 mt-3 text-center lg:text-[1rem] text-[0.6rem]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        {allSlides[currentSlide].secondText}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  className="h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full max-w-4xl">
                    {allSlides[currentSlide].content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-6 items-center">
        <div className="lg:w-[40%] w-[60%]">
          <div className="flex flex-row items-center">
            <div className="lg:w-[200px] h-[4px] w-[78%] bg-[#FFFFFF33] rounded-full relative">
              <motion.div
                className="h-full bg-[#FF4733] rounded-full absolute left-0"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentSlide + 1) / allSlides.length) * 100}%`,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
              {currentSlide + 1} / {allSlides.length}
            </p>
          </div>
        </div>
        <div className="lg:w-[11%] w-[30%] z-50">
          <div className="w-full flex justify-between px-4 z-50">
            <motion.button
              onClick={handlePrevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
              className="focus:outline-none"
            >
              <ChevronLeft
                className="text-white hover:text-[#FF4733] transition-colors"
                size={24}
              />
            </motion.button>
            <motion.button
              onClick={handleNextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
              className="focus:outline-none"
            >
              <ChevronRight
                className="text-white hover:text-[#FF4733] transition-colors"
                size={24}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticAdsSlider;