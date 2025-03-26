"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const BrandMarquee = ({ brandImages }: { brandImages: string[] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Increased spacing values
  const imageWidth = isMobile ? 120 : 100;
  const imageHeight = 40;
  const gap = isMobile ? 80 : 120; // Increased from 40/60 to 80/120

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate total width needed for seamless looping
  const totalWidth = (brandImages.length * (imageWidth + gap)) * 2;

  useEffect(() => {
    const animation = {
      x: [0, -totalWidth/2],
      transition: {
        repeat: Infinity,
        duration: isMobile ? 60 : 90,
        ease: 'linear'
      }
    };
    controls.start(animation);
  }, [isMobile, controls, totalWidth]);

  return (
    <div ref={containerRef} className="relative overflow-hidden py-10 w-full my-22">
      <motion.div
        className="flex items-center"
        animate={controls}
        style={{
          width: `${totalWidth}px`,
          gap: `${gap}px`, // This now uses the larger gap value
          paddingLeft: `${gap/2}px`, // Add initial padding for better spacing
          paddingRight: `${gap/2}px` // Add trailing padding
        }}
      >
        {/* First set */}
        {brandImages.map((num, index) => (
          <div 
            key={`brand-${index}`} 
            className="flex-shrink-0 flex items-center justify-center"
            style={{ 
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              margin: `0 ${gap/4}px` // Additional margin for even more spacing
            }}
          >
            <Image
              src={`/assets/slider-img/${num}.svg`}
              alt={`${num} logo`}
              width={imageWidth}
              height={imageHeight}
              className="object-contain w-full h-full"
              loading="eager"
              priority={index < 10}
              unoptimized={true}
            />
          </div>
        ))}
        
        {/* Second set (duplicate) */}
        {brandImages.map((num, index) => (
          <div 
            key={`brand-duplicate-${index}`} 
            className="flex-shrink-0 flex items-center justify-center"
            style={{ 
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              margin: `0 ${gap/4}px` // Consistent additional margin
            }}
          >
            <Image
              src={`/assets/slider-img/${num}.svg`}
              alt={`${num} logo`}
              width={imageWidth}
              height={imageHeight}
              className="object-contain w-full h-full"
              loading="eager"
              unoptimized={true}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;