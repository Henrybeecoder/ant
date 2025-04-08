//@ts-ignore
//@ts-nocheck
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { staticAds } from "@/utils/data";
import BookCallButtonStaticAds from "../book-call-btn-static-ads/page";
import BookCallButtonSlideAds from "../book-call-btn-slide-ads/page";

const StaticAdsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const constraintsRef = useRef(null);

  // Swipe detection constants
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

  // Enhanced text slides with optimized animations
  const textSlides = [
    {
      id: "text1",
      content: (
        <>
          {/* Header */}
          <motion.div
            className="lg:mb-8 mb-3 lg:pl-16 pl-0 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="lg:text-[0.75rem] text-[0.65rem]   font-semibold text-[#4C4C4C] mb-2 urbanist">
              HOW WE WORK
            </h3>
            <p className="lg:text-[1.12rem] text-[1rem] text-white gambarino">
              Built Around Speed, Strategy, and Style
            </p>
          </motion.div>
          <div className="h-full w-full flex flex-col items-center justify-center ">
            {/* Main graphic */}
            <div className="relative w-full max-w-4xl   h-[350px] flex items-center justify-center ">
              {/* Horizontal line */}
              <motion.div
                className="absolute w-full lg:top-29 top-14 h-[0.3px] bg-[#FF4733]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              {/* Vertical lines with circles and boxes */}
              <div className="absolute  lg:px-6  px-2  w-full h-full flex justify-between ">
                {[
                  {
                    title: "You send a product photo",
                    text: (
                      <div>
                        <span className="text-[#FF4733]">
                          No need for a professional shoot. We work with
                          anything
                        </span>
                        —from iPhone pics to catalog images.
                      </div>
                    ),
                  },
                  {
                    title: "We research your brand + market",
                    text: (
                      <div>
                        We study what visuals are working in your space,{" "}
                        <span className="text-[#FF4733]">
                          analyze ad trends, and apply creative strategy{" "}
                        </span>
                        that fits your positioning.
                      </div>
                    ),
                  },
                  {
                    title: "You give input (if you want)",
                    text: (
                      <div>
                        <span className="text-[#FF4733]">
                          Want bold promo ads? Clean luxury shots? Model
                          visuals?
                        </span>
                        You tell us—or leave it to our team
                      </div>
                    ),
                  },
                  {
                    title: "We deliver in 24–48 hours",
                    text: (
                      <div>
                        Crafted by senior designers with{" "}
                        <span className="text-[#FF4733]">
                          10+ years experience. Unlimited requests. Unlimited
                          revisions. Always on-brand.
                        </span>
                      </div>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {/* Top text box */}
                    <div className="bg-[#151515] urbanist lg:min-h-[50px] min-h-[20px] lg:max-w-[60%] w-[90%]  text-start relative lg:py-3  py-2 lg:px-4 px-2 font-[500] lg:text-[0.75rem] text-[0.375rem] overflow-hidden">
                      {item.title}
                      {/* Top Left Border */}
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Bottom Left Border */}
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Top Right Border */}
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Bottom Right Border */}
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                    </div>

                    {/* Vertical line */}
                    <div className="w-[0.3px] lg:h-[100px] h-[40px] bg-[#FF4733] relative">
                      {/* Circle at intersection */}
                      <div className="absolute lg:-bottom-[-30px] -bottom-[-10px] -left-2 w-4 h-4 rounded-full border-2 border-[#FF4733] bg-[#0a0a0a] flex items-center justify-center">
                        {/* <div className="w-2 h-2 rounded-full bg-[#FF4733]" /> */}
                      </div>
                    </div>

                    {/* Bottom text box */}
                    <div className="bg-[#151515] urbanist min-h-[110px]   lg:max-w-[70%] w-[85%] text-start relative py-3 lg:px-4 px-2 font-[500] lg:text-[0.75rem] text-[0.375rem] overflow-hidden">
                      {item.text}
                      {/* Top Left Border */}
                      <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#FF4733] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Bottom Left Border */}
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#FF4733] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Top Right Border */}
                      <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#FF4733] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                      {/* Bottom Right Border */}
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#FF4733] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </>
      ),
      bg: "transperent",
    },
    {
      id: "text2",
      content: (
        <>
          {/* Header */}
          <motion.div
            className="lg:mb-8 mb-3 lg:px-16 px-2 flex flex-row justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="lg:text-[0.75rem] text-[0.65rem]  font-semibold text-[#4C4C4C] mb-2 urbanist">
                What you get
              </h3>
              <p className="lg:text-[1.12rem] text-[1rem] text-white gambarino">
                Your Visual Strike Team, On-Demand
              </p>
            </div>
          </motion.div>
          <div className="lg:px-30 px-4 ">
            <div className="lg:h-[130px] h-[60px] w-full flex items-center justify-between">
              <div className="h-full bg-[#151515] urbanist w-[49%] relative lg:px-4  px-2 lg:py-4 py-2">
                <div className="h-full flex flex-col justify-between">
                  <img
                    src="/assets/static-ads-icons/image.svg"
                    alt=""
                    className="lg:w-6 lg:h-6 w-4 h-4"
                  />
                  <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px]">
                    {" "}
                    Promo graphics, lifestyle ads, model shots, product
                    showcases
                  </p>
                </div>
                {/* Bottom Left Border */}
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                {/* Bottom Right Border */}
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
              </div>
              <div className="h-full w-[49%] flex flex-col justify-between">
                <div className="h-[47%] relative bg-[#151515] urbanist  px-4 py-2">
                  <div className="w-full h-full justify-center flex flex-row items-center">
                    <img
                      src="/assets/static-ads-icons/custom-statics.svg"
                      alt=""
                      className="lg:w-6 lg:h-6 w-4 h-4"
                    />
                    <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px] ml-4">
                      Unlimited custom statics
                    </p>
                  </div>
                  {/* Top Left Border */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Left Border */}
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Top Right Border */}
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Right Border */}
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                </div>
                <div className="h-[47%] relative bg-[#151515] urbanist  px-4 py-2">
                  <div className="w-full h-full justify-center flex flex-row items-center">
                    <img
                      src="/assets/static-ads-icons/zag.svg"
                      alt=""
                      className="lg:w-6 lg:h-6 w-4 h-4"
                    />
                    <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px] ml-4">
                      24–48 hour turnaround
                    </p>
                  </div>
                  {/* Top Left Border */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Left Border */}
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Top Right Border */}
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Right Border */}
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                </div>
              </div>
            </div>

            <div className="lg:h-[130px] h-[60px] w-full flex items-center lg:mt-4 mt-2 justify-between">
              <div className="h-full bg-[#151515] urbanist w-[49%] relative lg:px-4 px-2 lg:py-4 py-2">
                <div className="h-full flex flex-col justify-between">
                  <img
                    src="/assets/static-ads-icons/play.svg"
                    alt=""
                    className="lg:w-6 lg:h-6 w-4 h-4"
                  />
                  <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px]">
                    {" "}
                    Pause anytime.
                    <br/>
                    Restart anytime.
                  </p>
                </div>
                {/* Bottom Left Border */}
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                {/* Bottom Right Border */}
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
              </div>
              <div className="h-full w-[49%] flex flex-col justify-between">
                <div className="h-[47%] relative bg-[#151515] urbanist  px-4 py-2">
                  <div className="w-full h-full justify-center flex flex-row items-center">
                    <img
                      src="/assets/static-ads-icons/custom-statics.svg"
                      alt=""
                      className="lg:w-6 lg:h-6 w-4 h-4"
                    />
                    <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px] ml-4">
                    No photoshoots
                    </p>
                  </div>
                  {/* Top Left Border */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Left Border */}
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Top Right Border */}
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Right Border */}
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                </div>
                <div className="h-[47%] relative bg-[#151515] urbanist  px-4 py-2">
                  <div className="w-full h-full justify-center flex flex-row items-center">
                    <img
                      src="/assets/static-ads-icons/zag.svg"
                      alt=""
                      className="lg:w-6 lg:h-6 w-4 h-4"
                    />
                    <p className="font-[400] lg:text-[0.875rem] text-[0.375rem] tracking-[0.43px] ml-4">
                    No product shipping
                    </p>
                  </div>
                  {/* Top Left Border */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Left Border */}
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Top Right Border */}
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                  {/* Bottom Right Border */}
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full"></span>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      bg: "transperent",
    },
    {
      id: "text3",
      content: (
        <>
           {/* Header */}
           <motion.div
            className="lg:mb-8 mb-2 lg:px-16 px-2 flex flex-row justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="lg:text-[0.75rem] text-[0.65rem]  font-semibold text-[#4C4C4C] mb-2 urbanist">
                Who This Is For
              </h3>
              <p className="lg:text-[1.12rem] text-[1rem] text-white gambarino">
                Perfect For Brands That...
              </p>
            </div>
          </motion.div>

          <div className="lg:px-16 px-2 lg:mt-14 mt-2 lg:w-[68%] w-full">
            <div>
              <div>
                <div className="flex flex-row items-center">
                  <img src='/assets/static-ads-icons/check.svg' alt='' />
                  <p className="urbanist font-[400] lg:text-[1rem] text-[0.7rem] ml-2">Test 10+ creatives/month</p>
                </div>
                <div className="flex flex-row items-center lg:mt-5 mt-2">
                  <img src='/assets/static-ads-icons/check.svg' alt='' />
                  <p className="urbanist font-[400] lg:text-[1rem] text-[0.7rem] ml-2">Are running paid ads (Meta, TikTok, Google)</p>
                </div>
                <div className="flex flex-row items-center lg:mt-5 mt-2">
                  <img src='/assets/static-ads-icons/check.svg' alt='' />
                  <p className="urbanist font-[400] lg:text-[1rem] text-[0.7rem] ml-2">Want faster, better visual production without creative delays</p>
                </div>
                <div className="flex flex-row items-center lg:mt-5 mt-2">
                  <img src='/assets/static-ads-icons/check.svg' alt='' />
                  <p className="urbanist font-[400] lg:text-[1rem] text-[0.7rem] ml-2">Value quality and brand consistency</p>
                </div>
                <div className="flex flex-row items-center lg:mt-5 mt-2">
                  <img src='/assets/static-ads-icons/check.svg' alt='' />
                  <p className="urbanist font-[400] lg:text-[1rem] text-[0.7rem] ml-2">Need to launch campaigns fast, without excuses</p>
                </div>
              </div>
            </div>
            <div className="lg:mt-14 mt-2 urbanist font-[400] lg:text-[1rem] text-[0.7rem]">
              This isn't Canva templates. This is handcrafted creative direction—executed by a pro team that understands conversion
            </div>
          </div>
        </>
      ),
      bg: "transperent",
    },
    {
      id: "text4",
      content: (
        <div className="">
          {/* Header */}
          <motion.div
            className="lg:mb-8 mb-4 lg:px-16 px-2 flex flex-row justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="lg:text-[0.75rem] text-[0.65rem]  font-semibold text-[#4C4C4C] mb-2 urbanist">
                The Offer
              </h3>
              <p className="lg:text-[1.12rem] text-[1rem] text-white gambarino">
                Want to See If We're a Fit?
              </p>
            </div>
          </motion.div>

          <div className="lg:px-16 px-2 lg:mt-14 mt-6 lg:w-[80%] w-[100%]">
            <div>
              <div className="lg:text-[1.25rem] text-[0.8rem] lg:leading-[28px] leading-[15px]">
                We work with a limited number of brands per month to guarantee speed and creative quality.
              </div>
              <div className="lg:text-[1.25rem] text-[0.8rem] lg:leading-[28px] leading-[15px] lg:w-[78%] w-full lg:mt-8 mt-4">
                If you're spending more than <span className="text-[#FF4733]">$2K/month on creative
                or wasting hours waiting for your design team</span>—this is built for you.
              </div>
              <div className="flex flex-row items-center lg:mt-5  mt-3 lg:w-[60%] w-full">
                <img src='/assets/static-ads-icons/alert.svg' alt='' className="w-6 h-4 mr-2"/>
                <p className="text-[0.596rem] lg:text-[0.888rem] font-[500]">This isn't cheap—but it's far more affordable than traditional production shoots, and 10x faster.</p>
              </div>
            </div>
            {/* <BookCallButtonSlideAds /> */}
          </div>
        </div>
      ),
      bg: "transperent",
    },
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

  // Optimized animation variants
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
    <div className="bg-[#0a0a0ac5] min-h-[20vh] my-[40px] urbanist">
      <div
        className={`relative lg:pt-10 pt-5 lg:pb-8 pb-4 border-[0.5px] ${
          currentSlide < staticAds.length && "lg:px-6 px-3"
        }  border-[#FFFFFFB2] `}
      >
        {/* Title and Subtitle */}
        {currentSlide < staticAds.length ? (
          <div className="lg:mb-10 mb-2">
            <p className="font-[400] text-[#FFFFFF] lg:text-[1.4rem] text-[0.8rem] text-center mb-1 lg:mb-6 gambarino">
              The Before & Afters Say It All
            </p>
            <p className="text-center lg:text-[1.125rem] text-[0.6rem] urbanist text-[#ffffff9d] lg:leading-0 leading-8 mb-3 lg:mb-2">
              Delivered in 24 hours. No product shipped. No studio booked.
            </p>
          </div>
        ) : (
          ""
        )}

        {/* Slider Container */}
        <div
          className={`relative overflow-hidden ${currentSlide < staticAds.length ? 'lg:h-[300px] h-[100px]' : 'lg:h-[360px] h-[200px]' }  w-full`}
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
                // Image slide
                <div className="flex flex-row justify-between h-full w-full gap-4">
                  {/* Before Image */}
                  <motion.div
                    className="w-full md:w-[49%]  border-[0.5px]  border-[#444444] h-full relative overflow-hidden flex flex-col justify-center lg:px-4 px-4 py-4"
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
                // Text slide
                <motion.div
                  className={`h-full w-full `}
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

      {/* Pagination and Navigation */}
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