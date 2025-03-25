import AiTalks from "../ai-talks/page"
export default function QuoteByWorldLeaders () {
    return (
        <div>
             <div className="flex flex-row justify-between mt-28 ">
        <div className="lg:w-[60%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of Microsoft"}
            authorImage={"/assets/quotes/satya.png"}
            author={"Satya Nadella"}
            description="AI agents will become the primary way we interact with computers in the future. "
          />
        </div>

        <div className="lg:w-[38%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of Google"}
            authorImage={"/assets/quotes/sundar.png"}
            author={"Sundar Pichai"}
            description="AI is one of the most profound things we’re working on as humanity."
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <div className="lg:w-[38%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of Tesla, SpaceX "}
            authorImage={"/assets/quotes/elon.png"}
            author={"Elon Musk"}
            description="AI is going to change everything, but it’s going to be a partnership between humans and AI, not a competition."
          />
        </div>
        <div className="lg:w-[60%] w-[49%]">
          <AiTalks
            authorPosition={"Founder of Spanx"}
            authorImage={"/assets/quotes/sara.png"}
            author={"Sara Blakely"}
            description="AI is like having a super-smart assistant that never sleeps"
          />
        </div>
      </div>
      <div className="font-[400] text-[#FFFFFF] flex lg:text-[2.5rem] text-[1.3rem] my-10 gambarino  flex-col justify-center items-center">
        <p>What the World’s Top</p>
        <p>Leaders Are Saying About AI</p>
      </div>
     
      <div className="flex flex-row justify-between ">
        <div className="lg:w-[60%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of NVIDIA"}
            authorImage={"/assets/quotes/jensen.png"}
            author={"Jensen Huang"}
            description="AI is going to be the biggest game-changer in the next decade. It will redefine how businesses operate and how we solve the world's biggest challenges."
          />
        </div>
        <div className="lg:w-[38%] w-[49%]">
          <AiTalks
            authorPosition={"Founder of Amazon"}
            authorImage={"/assets/quotes/jeff.png"}
            author={"Jeff Bezos"}
            description="It’s hard to overstate how big of an impact AI and machine learning will have on society ."
          />
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between mt-3">
        <div className="lg:w-[60%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of Meta"}
            authorImage={"/assets/quotes/mark.png"}
            author={"Mark Zuckerberg"}
            description="Advances in AI are making it possible to do more with less, and that’s going to improve the quality of life for billions of people."
          />
        </div>
        <div className="lg:w-[38%] w-[49%]">
          <AiTalks
            authorPosition={"CEO of Apple"}
            authorImage={"/assets/quotes/tim.png"}
            author={"Tim Cook"}
            description="AI is a fundamental technology that will be woven into the fabric of how we live and work."
          />
        </div>
      </div>
        </div>
    )
}