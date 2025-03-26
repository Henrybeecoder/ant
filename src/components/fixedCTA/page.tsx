import Image from "next/image";
export default function FixedCTA(){
  return (
    <div className="flex flex-row justify-center w-full z-100 items-center  fixed lg:bottom-4 bottom-0">
      <div
        style={{
          background:
            "linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(6, 6, 6, 0.9) 50%, rgba(11, 11, 11, 0.8) 100%)",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        className="flex flex-row justify-between lg:w-[30%] w-[100%] py-4  lg:px-6 px-4"
      >
        <Image src="/assets/icons/logo.svg" alt="" width={30} height={15} />
        <button className="bg-[#4101F6] text-white font-[600] text-[1rem] flex flex-row px-1 py-1 cursor-pointer hover:bg-[#2e00b3] transition-all">
          <Image src="/assets/images/ose.webp" alt="" width={50} height={50} />
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
    </div>
  );
};