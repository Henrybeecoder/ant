import Image from "next/image";

import { getCalApi } from "@calcom/embed-react";

import { useEffect } from "react";
export default function BookCallButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "ai-agent-with-ose" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#292929" }, "dark": { "cal-brand": "#FAFAFA" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <>
        <div className="w-full flex flex-row cursor-pointer justify-center mt-8">
            <button className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all" data-cal-namespace="ai-agent-with-ose"
                data-cal-link="oseodia/ai-agent-with-ose"
                data-cal-config='{"layout":"month_view"}'
            >   <Image src="/assets/images/ose.png" alt="" width={50} height={50} />
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

    </>;
};