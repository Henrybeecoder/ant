'use client'
import AppLayout from "@/appLayout/page"
import Image from "next/image"
import { motion } from 'framer-motion'
import BrandMarquee from "@/components/brandMarquee/page"
import StaticAdsSlider from "@/components/static-ads-slider/page"
import BookCallButtonStaticAds from "@/components/book-call-btn-static-ads/page"
import FAQSection from "@/components/faq-section/page"
import TestimoniesStatic from "@/components/testimonies-static-slider/page"
import Footer from "@/components/footer-section/page"
import { useState, useRef, useCallback, useEffect } from "react"


function StaticAds () {
    const brandImages = Array.from({ length: 11 }, (_, i) => i + 1);
      const [showFixedBar, setShowFixedBar] = useState<boolean>(false);
        const section0Ref = useRef<HTMLDivElement | null>(null);
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
    
    return (
<AppLayout title={'Static ads'} showFixedBar={showFixedBar} >
     {/* Hero Section */}
     <motion.div
        className="mt-30 flex relative flex-col justify-center items-center"
      
      >
        <div className="lg:w-[65%] w-[100%]">
          <p
           
           
          
            className="font-[500] text-center lg:px-[270px] px-7 lg:text-[2.1rem] lg:leading-9 leading-7 text-[1.5rem]"
          >
         Statics that sell. 
         Delivered in  {''}
            <span className="text-[#FF4733]">
             24 hours.
            </span>
          </p>
          <p className="font-[400] my-5 text-center lg:px-[193px] px-0 text-[#FFFFFFB2] lg:text-[1rem] text-[0.775rem]">
          No shoots. No shipping. Unlimited requests. Unlimited revisions. 
          Visuals that make your brand feel like a million bucks, without spending it.
          </p>
          <StaticAdsSlider/>
          <div className="w-full flex flex-row cursor-pointer justify-center mt-8">
          <BookCallButtonStaticAds />
          </div>
          {/* Brand Slider */}
          {/* @ts-expect-error: Temporarily ignoring type error while refactoring */}
     <BrandMarquee brandImages={brandImages} />
     <div  ref={section0Ref}>
     <TestimoniesStatic />
     </div>
     <FAQSection static />
     <Footer />
        </div>
   


      </motion.div>
     
</AppLayout>
    )
}

export default StaticAds;