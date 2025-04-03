import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause } from "react-feather";

import { motion } from "framer-motion";
import { staticAds } from "@/utils/data"
import Image from "next/image";

const StaticAdsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]); // Array of refs for each video
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(staticAds.length).fill(false)
  ); // Array of play/pause states

  const handleNextSlide = () => {
    console.log("Next Slide Clicked");
    setCurrentSlide((prev) => (prev + 1) % staticAds.length);
  };

  const handlePrevSlide = () => {
    console.log("Previous Slide Clicked");
    setCurrentSlide((prev) =>
      prev === 0 ? staticAds.length - 1 : prev - 1
    );
  };

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      } else {
        video.pause();
        setIsPlaying((prev) => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }
    }
  };

  return (
    <div className="bg-[#0a0a0ac5]  min-h-[20vh] my-[40px] urbanist">
    <div className="relative  pt-10 pb-8 border-[0.5px] px-6 border-[#FFFFFFB2] ">
      {/* Gradient Overlays */}
    

      {/* Title and Subtitle */}
      <div className="">
        <p className=" font-[400] text-[#FFFFFF] text-[1.4rem] text-center mb-2 lg:mb-6 gambarino">
        The Before & Afters Say It All
        </p>
        <p className="text-center text-[1.125rem] urbanist text-[#ffffff9d] lg:leading-0 leading-8 mb-2 lg:mb-2">
        Delivered in 24 hours. No product shipped. No studio booked.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {staticAds.map((slide, index) => (
            <motion.div
              key={index}
              className="lg:w-[100%] flex flex-row justify-between w-[100%] lg:h-[450px]  h-[400px] flex-shrink-0 text-[#FF4733] lg:py-10 lg:pb-3 py-8 lg:px-2 px-2 mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Video Container */}
              <div className="lg:w-[49%] w-[49%] border-[0.5px] border-[#444444] h-full relative overflow-hidden flex flex-col justify-center px-14 py-10">
              <div className="  h-full flex flex-col justify-between">
              <img src={slide.first} className="w-full h-auto" />
              <p className="text-[#ffffff] mt-3 text-center">{slide.firstText}</p>
                </div>


                
              </div>

              {/* Text Container */}
              <motion.div
              
                className="lg:w-[49%] relative w-[49%] border-[0.5px]  border-[#444444] h-full  flex flex-col justify-center px-14 py-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="h-full flex flex-col justify-between">
                <img src={slide.second} className="w-full h-auto" />
                <p className="text-[#FFFFFF] mt-3">{slide.secondText}</p>
                </div>
             
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination and Navigation */}
    
    </div>
    <div className="flex flex-row justify-between mt-6 items-center">
        <div className="lg:w-[40%] w-[60%]">
          <div className="flex flex-row items-center">
            <div className="lg:w-[200px] h-[4px] w-[78%] bg-[#FFFFFF33] rounded-full relative">
              <div
                className="h-full bg-[#FF4733] rounded-full absolute left-0"
                style={{
                  width: `${((currentSlide + 1) / staticAds.length) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
              {currentSlide + 1} / {staticAds.length}
            </p>
          </div>
        </div>
        <div className="lg:w-[11%] w-[30%] z-50">
          <div className="w-full flex justify-between px-4 z-50">
            <ChevronLeft
              onClick={handlePrevSlide}
              className="cursor-pointer z-50"
            />
            <ChevronRight
              onClick={handleNextSlide}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticAdsSlider ;