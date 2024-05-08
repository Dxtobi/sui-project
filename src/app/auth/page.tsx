"use client";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";




export default function Auth() {
  const [current_auth_component_login, switchAuthComponent] = useState(true);
  const router = useRouter();
  const session = useSession();


  function toggleAuthComponent() {
    switchAuthComponent(!current_auth_component_login);
  }

  useEffect(() => {
    //console.log(session.status)
    if (session.status === "authenticated") {
      router.replace("/chatpage");
    }
  });
  return (

    <div className="min-h-screen bg-secondary flex">
      <div className="flex flex-col justify-center items-center w-full">

        {current_auth_component_login ? (
          <Login changeAuth={toggleAuthComponent} />
        ) : (
          <Register changeAuth={toggleAuthComponent} />
        )}
      </div>

      <div className=" bg-gradient-to-b to-[#E750FF] from-[#9D1AFE] md:flex hidden justify-center items-center flex-col w-[30%] md:w-[50%] text-white px-6">
        <div className="flex flex-col gap-8">
          <Image
            className=""
            src={"/images/ailogo.png"}
            alt=""
            width={150}
            height={100}
          />
          <h1 className="text-[42px] font-bold">
            Learn, Discover & Automate in One Place.
          </h1>
          <p>
            SUI GPT using Move programming language to answer all your smart
     
            contract questions!
          </p>
        </div>
      </div>
    </div>
  );
}
