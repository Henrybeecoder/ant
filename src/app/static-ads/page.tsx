'use client'
import AppLayout from "@/appLayout/page"
import Image from "next/image"
import { motion } from 'framer-motion'
import BrandMarquee from "@/components/brandMarquee/page"
import StaticAdsSlider from "@/components/static-ads-slider/page"

function StaticAds () {
    const brandImages = Array.from({ length: 11 }, (_, i) => i + 1);
    return (
<AppLayout>
     {/* Hero Section */}
     <motion.div
        className="mt-30 flex relative flex-col justify-center items-center"
      
      >
        <div className="lg:w-[65%] w-[100%]">
          <p
        
            className="font-[500] text-center lg:px-[230px] px-0 lg:text-[2.1rem] lg:leading-9 leading-7 text-[1.25rem]"
          >
         Statics that sell. 
         Delivered in  {''}
            <span className="text-[#FF4733]">
             24 hours.
            </span>
          </p>
          <p className="font-[400] my-5 text-center lg:px-[160px] px-0 text-[#FFFFFFB2] lg:text-[1rem] text-[0.875rem]">
          No shoots. No shipping. Unlimited requests. Unlimited revisions. 
          Visuals that make your brand feel like a million bucks, without spending it.
          </p>
          <StaticAdsSlider/>
          <div className="w-full flex flex-row cursor-pointer justify-center mt-8">
            <button className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all">
              <Image src="/assets/images/ose.png" alt="" width={50} height={50} />
              <div className="text-[#FFFFFF] h-full flex flex-col justify-center items-center mx-3">
                <p className="font-[600] lg:text-[1rem] text-[0.8rem]">
                  Book a call with Ose (founder)
                </p>
                <p className="font-[500] lg:text-[0.75rem] text-[0.7rem]">
                  (It’s not going to be a sales pitch)
                </p>
              </div>
            </button>
          </div>
          {/* Brand Slider */}
          {/* @ts-expect-error: Temporarily ignoring type error while refactoring */}
     <BrandMarquee brandImages={brandImages} />
        
        </div>
      </motion.div>
</AppLayout>
    )
}

export default StaticAds;