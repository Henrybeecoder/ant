'use client'
import AppLayout from "@/appLayout/page"
import Image from "next/image"
import { motion } from 'framer-motion'
import BrandMarquee from "@/components/brandMarquee/page"
import StaticAdsSlider from "@/components/static-ads-slider/page"
import BookCallButtonStaticAds from "@/components/book-call-btn-static-ads/page"
import FAQSection from "@/components/faq-section/page"
import TestimoniesStatic from "@/components/testimonies-static-slider/page"

function StaticAds () {
    const brandImages = Array.from({ length: 11 }, (_, i) => i + 1);
    return (
<AppLayout title={'Static ads'} >
     {/* Hero Section */}
     <motion.div
        className="mt-30 flex relative flex-col justify-center items-center"
      
      >
        <div className="lg:w-[65%] w-[100%]">
          <p
        
            className="font-[500] text-center lg:px-[270px] px-10 lg:text-[2.1rem] lg:leading-9 leading-7 text-[1.25rem]"
          >
         Statics that sell. 
         Delivered in  {''}
            <span className="text-[#FF4733]">
             24 hours.
            </span>
          </p>
          <p className="font-[400] my-5 text-center lg:px-[180px] px-0 text-[#FFFFFFB2] lg:text-[1rem] text-[0.875rem]">
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
     <TestimoniesStatic />
     <FAQSection static />
        
        </div>
      </motion.div>
</AppLayout>
    )
}

export default StaticAds;