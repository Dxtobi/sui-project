"use client";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  const [current_auth_component_login, switchAuthComponent] = useState(true);

  function toggleAuthComponent() {
    switchAuthComponent(!current_auth_component_login);
  }

  return (
    <div className="min-h-screen flex ">
      <div className="bg-secondary flex justify-center items-center flex-col w-full">
        {current_auth_component_login ? (
          <Login changeAuth={toggleAuthComponent} />
        ) : (
          <Register changeAuth={toggleAuthComponent} />
        )}
      </div>
      <div className=" bg-gradient-to-b to-[#E750FF] from-[#9D1AFE] flex justify-center items-center flex-col w-[30%] text-white px-6">
        <div className="flex flex-col gap-8">
          <Image
            className=""
            src={"/images/ailogo.png"}
            alt=""
            width={150}
            height={100}
          />
          <h1 className="text-[48px] ">
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
