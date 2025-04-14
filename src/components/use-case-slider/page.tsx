import { useCasesSlides } from "@/utils/data";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const UseCase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef<number>(0);

  // Update slide width and mobile detection
  useEffect(() => {
    const updateDimensions = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (sliderRef.current) {
        slideWidthRef.current = mobile ? 100 : 50; // 100% width on mobile, 50% on desktop
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCasesSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? useCasesSlides.length - 1 : prev - 1
    );
  };

  // Touch and mouse event handlers for swipe/drag
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - clientX;
    
    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    const clientX = 'changedTouches' in e ? 
      e.changedTouches[0].clientX : 
      (e as React.MouseEvent).clientX;
    const diff = startX - clientX;
    
    if (diff > 50) {
      handleNextSlide();
    } else if (diff < -50) {
      handlePrevSlide();
    }
    
    setIsDragging(false);
  };

  return (
    <>
      <div className="mt-12 mb-7">
        <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-6">Use Cases</p>
        <p className="text-center text-[1.6rem] lg:leading-0 leading-8 mb-2 lg:mb-10">
          What Our AI Agents & Automations Can Do
        </p>
      </div>

      <div 
        className="relative overflow-hidden"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={() => setIsDragging(false)}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * slideWidthRef.current}%)`,
          }}
        >
          {useCasesSlides?.map((slide, index) => (
            <div
              key={index}
              className={`${isMobile ? 'w-full' : 'w-[50%]'} h-[440px] lg:h-[550px] flex-shrink-0 bg-[#291310] text-[#FF4733] lg:py-14 py-8 lg:px-10 px-8 ${!isMobile ? 'mr-6' : ''}`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 19% 100%, 0 84%)",
              }}
            >
              <div className="lg:mb-24 mb-16">
                <span className="gambarino lg:text-[1.5rem] text-[1.3rem]">{slide.title}</span>
                <p className="mt-2">{slide.description}</p>
              </div>
              <div className="lg:text-[1rem] text-[0.8rem]">
                {/* <div>{slide.extraText}</div> */}
                <div className="mt-8">
                  {slide.details.map((detail, index) => (
                    <div key={`detail-${index}`} className="flex flex-row lg:mt-5 mt-2 lg:text-[1rem] text-[0.8rem]">
                      <img src="/assets/icons/use-case.svg" alt="use-case-icon" />
                      <p className="ml-3">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-8">
        <div className="lg:w-[40%] w-[60%]">
          <div className="flex flex-row items-center">
            <div className="lg:w-[200px] h-[4px] w-[78%] bg-[#FFFFFF33] rounded-full relative">
              <div
                className="h-full bg-[#FF4733] rounded-full absolute left-0"
                style={{
                  width: `${((currentSlide + 1) / useCasesSlides?.length) * 100}%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
              {currentSlide + 1} / {useCasesSlides?.length}
            </p>
          </div>
        </div>
        <div className="lg:w-[11%] w-[30%]">
          <div className="w-full flex justify-between px-4">
            <ChevronLeft 
              onClick={handlePrevSlide} 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
            <ChevronRight 
              onClick={handleNextSlide} 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCase;