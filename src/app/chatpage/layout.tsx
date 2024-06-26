import type { Metadata } from "next"
import Sidebar from "./components/Sidebar";
import './dsgn/App.css'
import './dsgn/chatAI.css'
import './dsgn/main.css'
import './dsgn/searchinput.css'
import './dsgn/userdropdown.css'



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
        <section className=" " >
         <aside>
            <Sidebar/>
         </aside>
         <div>
            {children}
         </div>
        </section>
  );
}
