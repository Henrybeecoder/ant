"use client";
import { useEffect, useState } from "react";
import AppLayout from "@/appLayout/page";
import ChatBox from "@/components/chat-box/page";
import AnimatedContainer from "@/components/animatedContainer/page";
import { ArrowRight, Check } from "react-feather";
import { motion } from "framer-motion";

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [work, setWork] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // 1: name, 2: role, 3: work


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const handleNext = () => {
    if (currentStep === 1 && name.trim()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && role.trim()) {
      setCurrentStep(3);
    } else if (currentStep === 3 && work.trim()) {
      // Submit or move to next section
      console.log("All data:", { name, role, work });
    }
  };

  if (isLoading) {
    return (
      <AppLayout noHeader>
        <div className="w-full min-h-screen flex items-center justify-center">
          <motion.div className="w-12 h-12 border-4 border-gray-[#181818] border-t-[#E9422F] rounded-full animate-spin" />

        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout noHeader>
      <div className="min-h-[100vh] flex w-full flex-row justify-center">
        <div className="lg:w-[60%] w-[100%] lg:mt-22">
          <ChatBox founder founderchat>
            Good morning👋
          </ChatBox>

          <ChatBox founderchat>
            My name is Ose, i am the founder and CEO
          </ChatBox>

          {/* response box */}
          <div className="w-full flex flex-col items-end">
            <div className="lg:w-[60%] w-[100%] flex flex-col items-end justify-end">
              <ChatBox client clientchat>
                Hi👋
              </ChatBox>
              <ChatBox clientchat>nice to meet you</ChatBox>

              <div className={`flex flex-row justify-end urbanist mb-3`}>
                <AnimatedContainer
                  className={`bg-[#20202080] flex flex-col min-w-[20%] font-[400] text-[0.87rem] py-3 px-3`}
                  borderRadius="0px 4px 4px 3px"
                  borderColor="#b1b1b1"
                  hoverDuration={0.3}
                >
                  <div className="mt-6 flex flex-row items-center justify-between">
                    My name is
                    <input
                      placeholder="Enter your name"
                      className="bg-[#181818] px-4 py-3 rounded-md w-[70%] mt-2 relative z-50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {currentStep >= 2 && (
                    <div className="mt-6 flex flex-row items-center justify-between">
                      i am a
                      <input
                        placeholder="Enter your role"
                        className="bg-[#181818] px-4 py-3 rounded-md relative w-[80%] mt-2 z-50"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                  )}

                  {currentStep >= 3 && (
                    <div className="mt-6 flex flex-row items-center justify-between">
                      i work at
                      <input
                        placeholder="Enter the company you work for"
                        className="bg-[#181818] px-4 py-3 rounded-md relative  w-[80%] mt-2 z-50"
                        value={work}
                        onChange={(e) => setWork(e.target.value)}
                      />
                    </div>
                  )}

                  <div
                    className="w-full flex flex-row justify-end mt-2 cursor-pointer relative z-50"
                    onClick={handleNext}
                  >
                    <div className="flex flex-row items-center">
                      <p
                        className={`${(currentStep === 1 && !name.trim()) ||
                          (currentStep === 2 && !role.trim()) ||
                          (currentStep === 3 && !work.trim())
                          ? "text-[#444444]"
                          : "text-[#FFFFFF]"
                          } font-400 ml-3 text-[11px]`}
                      >
                        Next
                      </p>
                      <ArrowRight
                        size={12}
                        color={
                          (currentStep === 1 && !name.trim()) ||
                            (currentStep === 2 && !role.trim()) ||
                            (currentStep === 3 && !work.trim())
                            ? "#444444"
                            : "#FFFFFF"
                        }
                      />
                    </div>
                  </div>
                </AnimatedContainer>

                <div
                  style={{
                    backgroundImage: `url(${"/assets/images/founder.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-10 h-10 invisible rounded-full ml-3"
                ></div>
              </div>
            </div>
          </div>
          {name.length > 0 && role.length > 0 && work.length > 0 && (
            <ChatBox founder founderchat>
              The pleasure is all mine
            </ChatBox>
          )}

          {name.length > 0 && role.length > 0 && work.length > 0 && (
            <ChatBox founderchat>How may i help you today, {name}?</ChatBox>
          )}






          <div className="w-full flex flex-col items-end">
            <div className="lg:w-[60%] w-[100%] flex flex-col items-end justify-end">
              <div className={`flex flex-row justify-end w-full urbanist mb-3`}>
                <AnimatedContainer
                  className={`bg-[#20202080] flex flex-col w-[80%] font-[400] text-[0.87rem] py-3 px-3`}
                  borderRadius="0px 4px 4px 3px"
                  borderColor="#b1b1b1"
                  hoverDuration={0.3}
                >
                  <p>Lets work on</p>

                  {/* AI agent & automation */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>AI agent & automation</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>

                  {/* Websites */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>Websites</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>

                  {/* Web apps */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>Web apps</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>

                  {/* Mobile apps */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>Mobile apps</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>

                  {/* Social media marketing */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>AI Head Hunter</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>

                  {/* Paid ads */}
                  <label className="bg-[#181818] relative flex flex-row text-[14px] font-[400] mt-3 px-3 py-2 text-[#444444] justify-between items-center has-[:checked]:text-white">
                    <span>Static ads</span>
                    <div className="relative z-50 flex items-center justify-center w-4 h-4">
                      <input
                        type="checkbox"
                        className="appearance-none absolute w-full h-full border-1 border-[#444444] rounded-sm 
                        checked:border-white checked:bg-transparent peer"
                      />
                      <Check
                        className="w-2 h-2 opacity-0 pointer-events-none text-[#FF4733] peer-checked:opacity-100"
                      />
                    </div>
                  </label>
                </AnimatedContainer>

                <div
                  style={{
                    backgroundImage: `url(${"/assets/images/founder.png"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-10 h-10 invisible rounded-full ml-3"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
