import Image from "next/image";
import { useEffect } from "react";

import { getCalApi } from "@calcom/embed-react";
import { usePathname } from "next/navigation";

export default function FixedCTA() {
  const pathName = usePathname();
  useEffect(() => {
    (async function () {
        const cal = await getCalApi({ "namespace": "ai-agent-with-ose" });
        cal("ui", { 
            "cssVarsPerTheme": { 
                "light": { "cal-brand": "#292929" }, 
                "dark": { "cal-brand": "#FAFAFA" } 
            }, 
            "hideEventTypeDetails": false, 
            "layout": "month_view" 
        });
        
        // Add the second namespace for statics-that-sell
        const calStatics = await getCalApi({ "namespace": "statics-that-sell" });
        calStatics("ui", {
            "cssVarsPerTheme": {
                "light": { "cal-brand": "#292929" },
                "dark": { "cal-brand": "#FAFAFA" }
            },
            "hideEventTypeDetails": false,
            "layout": "month_view"
        });
    })();
}, []);



  return (
    <div className="flex flex-row justify-center w-full z-[100] items-center fixed lg:bottom-4 bottom-0">
      {/* Backdrop blur layer */}
      <div
        className="absolute inset-0 bg-opacity-50  -z-10"
        aria-hidden="true"
      />

      {/* Content container */}
      <div
        className="flex flex-row justify-between lg:w-[30%] w-[100%] py-4 lg:px-6 px-4 relative"
        style={{
          background: "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(6, 6, 6, 0.9) 50%, rgba(11, 11, 11, 0.8) 100%)",
         
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)", // For Safari support
          backgroundColor: "rgba(0, 0, 0, 0.5)" // This helps the blur effect work better
        }}
      >
        <Image
          src="/assets/icons/logo.svg"
          alt="Company logo"
          width={30}
          height={15}
          className="object-contain"
        />
{pathName === '/static-ads' ? (
          <button
            data-cal-link="oseodia/statics-that-sell"
            data-cal-config='{"layout":"month_view"}'
            className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row items-center px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all  overflow-hidden"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image
                src="/assets/images/ose.png"
                alt="Ose portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-[#FFFFFF] h-full flex flex-col justify-center items-center mx-3">
              <p className="font-[600] lg:text-[1rem] text-[0.8rem]">
                Book a call with Ose (founder)
              </p>
              <p className="font-[500] lg:text-[0.75rem] text-[0.7rem]">
                (It's not going to be a sales pitch)
              </p>
            </div>
          </button>
) : (
  <button
  data-cal-link="oseodia/ai-agent-with-ose"
  data-cal-config='{"layout":"month_view"}'
  className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row items-center px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all  overflow-hidden"
>
  <div className="relative w-[50px] h-[50px]">
    <Image
      src="/assets/images/ose.png"
      alt="Ose portrait"
      fill
      className="object-cover"
    />
  </div>
  <div className="text-[#FFFFFF] h-full flex flex-col justify-center items-center mx-3">
    <p className="font-[600] lg:text-[1rem] text-[0.8rem]">
      Book a call with Ose (founder)
    </p>
    <p className="font-[500] lg:text-[0.75rem] text-[0.7rem]">
      (It's not going to be a sales pitch)
    </p>
  </div>
</button>
)}
    
      </div>
    </div>
  );
}