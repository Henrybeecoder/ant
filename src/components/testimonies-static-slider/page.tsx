// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight, Star } from "react-feather";
// import { motion, PanInfo } from "framer-motion";

// const TestimoniesStatic = () => {
//   const testimonials = [
//     {
//       id: 1,
//       video: '/assets/videos/testimonial.mp4',
//       testimony: 'I was skeptical at first. No shoots? No shipping? But the results speak for themselves. We\'ve cut our creative turnaround time from 2 weeks to 2 days—and conversions are up.',
//       title: 'Performance Marketer, Fitness Brand',
//       rating: 4.5
//     },
//     {
//       id: 2,
//       video: '/assets/videos/testimonial.mp4',
//       testimony: "I used to wait weeks for creatives that didn't even convert. Now I get high-performing statics in 24 hours. Our ROAS has doubled.",
//       title: 'Founder DTC Skincare Brand',
//       rating: 3.5
//     },
//     {
//       id: 3,
//       video: '/assets/videos/testimonial.mp4',
//       testimony: "We tested 15 statics in a week without shipping a single product. The quality looked like it came out of a high-end studio.",
//       title: 'CMO, Health & Wellness Startup',
//       rating: 3
//     },
//     {
//       id: 4,
//       video: '/assets/videos/testimonial.mp4',
//       testimony: "Every time we send them an iPhone pic, it comes back as a scroll-stopper. We've scaled two winning campaigns thanks to them.",
//       title: 'Growth Lead, Smart Home Brand',
//       rating: 3.5
//     },
//     {
//       id: 5,
//       video: '/assets/videos/testimonial.mp4',
//       testimony: "What sold me was the unlimited requests. What kept me coming back was how fast they nailed our brand vibe with almost no direction.",
//       title: 'Founder, Eco Fashion Label',
//       rating: 4.5
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [dragStartX, setDragStartX] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const handleDragStart = () => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setDragStartX(rect.left);
//     }
//   };

//   const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     const threshold = 50;
//     const velocityThreshold = 500;
    
//     // Calculate boundaries
//     const containerWidth = containerRef.current?.clientWidth || 0;
//     const maxDragOffset = containerWidth * 0.1; // Match fade width (10%)

//     // Prevent dragging beyond faded areas
//     const currentX = info.point.x;
//     if (currentX < dragStartX - maxDragOffset || currentX > dragStartX + containerWidth + maxDragOffset) {
//       return;
//     }

//     if (Math.abs(info.velocity.x) > velocityThreshold) {
//       if (info.velocity.x > 0) {
//         handlePrevSlide();
//       } else {
//         handleNextSlide();
//       }
//     } else if (Math.abs(info.offset.x) > threshold) {
//       if (info.offset.x > 0) {
//         handlePrevSlide();
//       } else {
//         handleNextSlide();
//       }
//     }
//   };

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     // Full stars
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <Star key={`full-${i}`} className="w-4 h-4 fill-[#FF4733] stroke-none" />
//       );
//     }

//     // Half star
//     if (hasHalfStar) {
//       stars.push(
//         <div key="half" className="relative w-4 h-4">
//           <Star className="absolute w-4 h-4 fill-[#444444] stroke-none" />
//           <div className="absolute w-2 h-4 overflow-hidden">
//             <Star className="w-4 h-4 fill-[#FF4733] stroke-none" />
//           </div>
//         </div>
//       );
//     }

//     // Empty stars
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <Star key={`empty-${i}`} className="w-4 h-4 fill-[#444444] stroke-none" />
//       );
//     }

//     return (
//       <div className="flex items-center mt-2 mb-2">
//         <div className="flex">{stars}</div>
//         <span className="ml-1 text-xs text-[#FFFFFFB2]">({rating})</span>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-[#0a0a0ac5] min-h-[20vh] mt-[150px] urbanist">
//       <div className="relative" ref={containerRef}>
//         {/* Gradient Overlays */}
//         <div className="absolute inset-y-0 left-0 w-[10%] z-10" style={{
//           background: "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
//         }}></div>
//         <div className="absolute inset-y-0 right-0 w-[10%] z-10" style={{
//           background: "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
//         }}></div>

//         {/* Title and Subtitle */}
//         <div className="mt-14">
//           <p className="text-[#FFFFFFB2] text-center mb-2 lg:mb-6">Testimonials</p>
//           <p className="text-center text-[1.6rem] lg:leading-0 leading-8 mb-2 lg:mb-2">
//             Hear what our clients say
//           </p>
//         </div>

//         {/* Slider Container with Drag */}
//         <motion.div
//           className="relative overflow-hidden"
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragStart={handleDragStart}
//           onDragEnd={handleDragEnd}
//           style={{ cursor: 'grab' }}
//           whileTap={{ cursor: 'grabbing' }}
//         >
//           <div
//             ref={sliderRef}
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentSlide * 40}%)` }}
//           >
//             {testimonials.map((slide, index) => (
//               <div
//                 key={index}
//                 className="lg:w-[40%] flex flex-row justify-between w-[100%] lg:h-[450px] h-[400px] flex-shrink-0 text-[#FF4733] lg:py-10 lg:pb-3 py-8 lg:px-2 px-2 mr-4"
//               >
//                 <motion.div
//                   style={{
//                     backgroundImage: "url('/assets/images/testimony-new-bg.png')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundBlendMode: "multiply",
//                     boxShadow: `0px 12px 27px 0px #0000001A, 0px 49px 49px 0px #00000017, 0px 110px 66px 0px #0000000D, 0px 195px 78px 0px #00000003, 0px 305px 85px 0px #00000000`,
//                   }}
//                   className="lg:w-[100%] relative w-[100%] h-full lg:p-8 p-2 flex flex-col justify-between"
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   <div className="min-h-[70%]">
//                     <img src="/assets/icons/quote.svg" alt="quote-svg" className="w-4 h-4 mb-8" />
//                     <span className="text-[#FFFFFF] text-lg lg:text-[1rem] text-[0.7rem]">
//                       {slide.testimony}
//                     </span>
//                   </div>
                  
//                   <div className="lg:text-[1rem] text-[0.6rem]">
//                     <p className="text-[#FFFFFFB2] font-[400]">{slide.title}</p>
//                     {renderStars(slide.rating)}
//                   </div>
                  
//                   {/* Border elements */}
//                   <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
//                   <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
//                   <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
//                   <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
      
//       {/* Pagination and Navigation */}
//       <div className="flex flex-row justify-between items-center">
//         <div className="lg:w-[40%] w-[60%]">
//           <div className="flex flex-row items-center">
//             <div className="lg:w-[200px] h-[4px] w-[78%] bg-[#FFFFFF33] rounded-full relative">
//               <div
//                 className="h-full bg-[#FF4733] rounded-full absolute left-0"
//                 style={{
//                   width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
//                   transition: "width 0.3s ease",
//                 }}
//               ></div>
//             </div>
//             <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
//               {currentSlide + 1} / {testimonials.length}
//             </p>
//           </div>
//         </div>
//         <div className="lg:w-[11%] w-[30%] z-50">
//           <div className="w-full flex justify-between px-4 z-50">
//             <ChevronLeft 
//               onClick={handlePrevSlide} 
//               className="cursor-pointer z-50 hover:opacity-80 transition-opacity" 
//             />
//             <ChevronRight 
//               onClick={handleNextSlide} 
//               className="cursor-pointer hover:opacity-80 transition-opacity" 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimoniesStatic;



import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "react-feather";

const TestimoniesStatic = () => {
  const testimonials = [
    {
      id: 1,
      video: '/assets/videos/testimonial.mp4',
      testimony: 'I was skeptical at first. No shoots? No shipping? But the results speak for themselves. We\'ve cut our creative turnaround time from 2 weeks to 2 days—and conversions are up.',
      title: 'Performance Marketer, Fitness Brand',
      rating: 4.5
    },
    {
      id: 2,
      video: '/assets/videos/testimonial.mp4',
      testimony: "I used to wait weeks for creatives that didn't even convert. Now I get high-performing statics in 24 hours. Our ROAS has doubled.",
      title: 'Founder DTC Skincare Brand',
      rating: 3.5
    },
    {
      id: 3,
      video: '/assets/videos/testimonial.mp4',
      testimony: "We tested 15 statics in a week without shipping a single product. The quality looked like it came out of a high-end studio.",
      title: 'CMO, Health & Wellness Startup',
      rating: 3
    },
    {
      id: 4,
      video: '/assets/videos/testimonial.mp4',
      testimony: "Every time we send them an iPhone pic, it comes back as a scroll-stopper. We've scaled two winning campaigns thanks to them.",
      title: 'Growth Lead, Smart Home Brand',
      rating: 3.5
    },
    {
      id: 5,
      video: '/assets/videos/testimonial.mp4',
      testimony: "What sold me was the unlimited requests. What kept me coming back was how fast they nailed our brand vibe with almost no direction.",
      title: 'Founder, Eco Fashion Label',
      rating: 4.5
    },
  ];

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
        slideWidthRef.current = mobile ? 80 : 30; // 100% width on mobile, 40% on desktop
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
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

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-4 h-4 fill-[#FF4733] stroke-none" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 fill-[#444444] stroke-none" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-[#FF4733] stroke-none" />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 fill-[#444444] stroke-none" />
      );
    }

    return (
      <div className="flex items-center mt-2 mb-2">
        <div className="flex">{stars}</div>
      
      </div>
    );
  };

  return (
    <>
     <div className="mt-14">
          <p className="text-[#FFFFFFB2] lg:text-center lg:text-[1rem] text-[0.8rem] text-start mb-2 lg:mb-6">Testimonials</p>
          <p className="lg:text-center text-start lg:text-[1.6rem] text-[1.2rem] lg:leading-0 leading-8 mb-2 lg:mb-2">
            Hear what our clients say
          </p>
        </div>
        <div className="bg-[#0a0a0ac5] min-h-[20vh] mt-[12px] urbanist">
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-[10%] z-10" style={{
          background: "linear-gradient(90deg, #0A0A0A 0%, rgba(10, 10, 10, 0) 100%)",
        }}></div>
        <div className="absolute inset-y-0 right-0 w-[10%] z-10" style={{
          background: "linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, #0A0A0A 100%)",
        }}></div>

       

        {/* Slider Container with Drag */}
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
            style={{ transform: `translateX(-${currentSlide * slideWidthRef.current}%)` }}
          >
            {testimonials.map((slide, index) => (
              <div
                key={index}
                className={`${isMobile ? 'w-[80%]' : 'w-[40%]'} flex flex-row justify-between h-[400px] lg:h-[450px] flex-shrink-0 text-[#FF4733] lg:py-10 lg:pb-3 py-8 lg:px-2 px-2 ${!isMobile ? 'mr-4' : ''}`}
              >
                <div
                  style={{
                    backgroundImage: "url('/assets/images/testimony-new-bg-slide.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "multiply",
                    boxShadow: `0px 12px 27px 0px #0000001A, 0px 49px 49px 0px #00000017, 0px 110px 66px 0px #0000000D, 0px 195px 78px 0px #00000003, 0px 305px 85px 0px #00000000`,
                  }}
                  className="lg:w-[100%] relative w-[100%] h-full lg:p-8 p-4 flex flex-col justify-between"
                >
                  <div className="min-h-[70%]">
                    <img src="/assets/icons/quote.svg" alt="quote-svg" className="w-4 h-4 lg:mb-8 mb-2" />
                    <span className="text-[#FFFFFF] text-lg lg:text-[1.1rem] text-[0.9rem] lg:leading-[27px] leading-[23px] font-[500]">
                      {slide.testimony}
                    </span>
                  </div>
                  
                  <div className="lg:text-[0.9rem] text-[0.8rem] lg:w-[100%] w-[80%]">
                    <p className="text-[#FFFFFF] font-[400]">{slide.title}</p>
                    {renderStars(slide.rating)}
                  </div>
                  
                  {/* Border elements */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pagination and Navigation */}
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
            <p className="text-[#444444] w-[20%] lg:text-[0.9rem] lg:ml-4 ml-1 text-[0.8rem]">
              {currentSlide + 1} / {testimonials.length}
            </p>
          </div>
        </div>
        <div className="lg:w-[11%] w-[30%] z-50">
          <div className="w-full flex justify-between px-4 z-50">
            <ChevronLeft 
              onClick={handlePrevSlide} 
              className="cursor-pointer z-50 hover:opacity-80 transition-opacity" 
            />
            <ChevronRight 
              onClick={handleNextSlide} 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default TestimoniesStatic;