import AppLayout from "@/appLayout/page"
import ChatBox from "@/components/chat-box/page"
export default function Chat () {
    return (
<AppLayout noHeader> 
    <div className="min-h-[100vh] flex w-full flex-row justify-center">
            <div className="lg:w-[60%] w-[100%] lg:mt-22">
        <ChatBox founder founderchat>
    Good morning👋
    </ChatBox>

    <ChatBox founderchat>
    My name is Ose, 
    i am the founder and CEO 
    </ChatBox>
    {/* response box */}
    <div className="w-full bg-red-600 flex flex-col items-end">
<div className="lg:w-[60%] w-[100%] bg-green-500 flex flex-col items-end justify-end">
<ChatBox client clientchat>
   Hi👋
    </ChatBox>
    <ChatBox clientchat>
   nice to meet you
    </ChatBox>
</div>
    </div>
        </div>
   
    </div>
  
</AppLayout>
    )
}