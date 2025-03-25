import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause } from "react-feather";
import { testimonials } from "@/utils/data";
import { motion } from "framer-motion";

const Testimonies = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]); // Array of refs for each video
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(testimonials.length).fill(false)
  ); // Array of play/pause states

  const handleNextSlide = () => {
    console.log("Next Slide Clicked");
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    console.log("Previous Slide Clicked");
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
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
    <div className="bg-[#0a0a0ac5]   min-h-[20vh] mt-[150px] urbanist">
    <div className="relative  ">
      {/* Gradient Overlays */}
      <div
        className="absolute inset-y-0 left-0 w-[10%] z-10"
        style={{
          background:
            "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-y-0 right-0 w-[10%] z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
        }}
      ></div>

      {/* Title and Subtitle */}
      <div className="mt-14">
        <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-6">
          Testimonials
        </p>
        <p className="text-center text-[1.6rem] lg:leading-0 leading-8 mb-2 lg:mb-2">
          Hear what our clients say
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 80}%)`,
          }}
        >
          {testimonials.map((slide, index) => (
            <motion.div
              key={index}
              className="lg:w-[76%] flex flex-row justify-between w-[100%] lg:h-[450px]  h-[400px] flex-shrink-0 text-[#FF4733] lg:py-10 lg:pb-3 py-8 lg:px-2 px-2 mr-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Video Container */}
              <div className="lg:w-[49%] w-[49%] h-full relative overflow-hidden">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loop
                  muted
                  onClick={() => togglePlayPause(index)}
                />

                {/* Custom Play/Pause Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#15151580] bg-opacity-50 text-white focus:outline-none">
                  <button
                    onClick={() => togglePlayPause(index)}
                    className="w-full h-full p-4 relative"
                  >
                    {!isPlaying[index] ? (
                      <img src="/assets/icons/play.svg" alt="Play" />
                    ) : (
                      <img src="/assets/icons/pause.svg" alt="Pause" />
                    )}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  </button>
                </div>
              </div>

              {/* Text Container */}
              <motion.div
                style={{
                  backgroundImage:
                    "url('/assets/images/testimony-new-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply",
                  boxShadow: `
                    0px 12px 27px 0px #0000001A,
                    0px 49px 49px 0px #00000017,
                    0px 110px 66px 0px #0000000D,
                    0px 195px 78px 0px #00000003,
                    0px 305px 85px 0px #00000000`,
                }}
                className="lg:w-[49%] relative w-[49%] h-full lg:p-8 p-2 flex flex-col justify-between"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="min-h-[70%] ">
                <img
                  src="/assets/icons/quote.svg"
                  alt="quote-svg"
                  className="w-4 h-4 mb-8"
                />
                <span className="text-[#FFFFFF]  text-lg lg:text-[1rem] text-[0.7rem]">
                  {slide.testimony}
                </span>
                </div>
              
                <div className="lg:text-[1rem] text-[0.6rem]">
                  <span className="text-[#FFFFFF] urbanist font-[500]">
                    {slide.author}
                  </span>
                  <p className="text-[#FFFFFFB2] font-[400]">
                    {slide.title}, {slide?.company}
                  </p>
                </div>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination and Navigation */}
    
    </div>
    <div className="flex flex-row justify-between items-center">
        <div className="lg:w-[40%] w-[60%]">
          <div className="flex flex-row items-center">
            <div className="lg:w-[200px] h-[4px] w-[78%] bg-[#FFFFFF33] rounded-full relative">
              <div
                className="h-full bg-[#FF4733] rounded-full absolute left-0"
                style={{
                  width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            {/* <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
              {currentSlide + 1} / {testimonials.length}
            </p> */}
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

export default Testimonies;