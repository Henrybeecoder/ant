import { ReactNode } from "react";
import AnimatedContainer from "../animatedContainer/page";
interface ChatBoxProps {
  children: ReactNode;
  founder?: any;
  client?: any;
  founderchat?: any;
  clientchat?: any;
  className?: any;
}
export default function ChatBox({
  children,
  founder,
  client,
  founderchat,
  clientchat,
  className,
}: ChatBoxProps) {
  return (
    <div className={`${className} flex flex-row  ${clientchat && 'justify-end'} ${founderchat && 'justify-start'} urbanist mb-3`}>
      {founder ? (
        <div
          style={{
            backgroundImage: `url(${"/assets/images/ose.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10 rounded-full mr-3"
        ></div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${"/assets/images/founder.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10 invisible rounded-full mr-3"
        ></div>
      )}


      <AnimatedContainer
        className={` bg-[#181818] flex flex-col ${founderchat && 'max-w-[60%]'} ${clientchat && 'min-w-[20%]'}  font-[400] text-[0.87rem] py-3 px-3`}
        borderRadius="0px 4px 4px 3px"
        borderColor="#b1b1b1"
        hoverDuration={0.3}
        founder={founderchat}
        client={clientchat}
      >
        {children}
      </AnimatedContainer>
      {client ? (
        <div
          style={{
            backgroundImage: `url(${"/assets/images/client.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10 rounded-full ml-3"
        ></div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${"/assets/images/founder.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10 invisible rounded-full ml-3"
        ></div>
      )}
    </div>
  );
}
