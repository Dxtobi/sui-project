import type { Metadata } from "next"
import Sidebar from "@/components/chat/Sidebar";
import SearchInput from "@/components/chat/layout/SearchInput";
import '@/components/chat/styles/App.css'
import '@/components/chat/styles/chatAI.css'
import '@/components/chat/styles/main.css'
import '@/components/chat/styles/searchinput.css'
import '@/components/chat/styles/userdropdown.css'



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function ChatLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return (

    <>


      <div className="chatpagesections">

      <aside>
        <Sidebar/>
      </aside>


      </div>


      <div className="chatpagesections">

        <div id="page_content">
          {children}
        </div>

      </div>





          
    </>


      );
}