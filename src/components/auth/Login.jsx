"use client";
import Image from "next/image";
//@ts-nocheck
import { useState } from "react";

export default function Login({ changeAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show_password, setShowPassword] = useState("");

  return (
    <div className=" md:w-[50%] ">
      <div className="mb-8">
        <h2 className="font-bold text-[36px] text-center">Welcome Back</h2>
        <p className=" text-center">
          Great to have you back, let’s continue from where you left off!
        </p>
      </div>

      <form className="flex gap-3 flex-col">
        <div className="flex flex-col mb-4 gap-2">
          <label>Email Address*</label>
          <input
            placeholder="ex. email@domain.com"
            type="email"
            name="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            required
            className="bg-white rounded-[12px] px-[16px] py-[14px] outline-none"
          />
        </div>

        <div className="flex flex-col mb-8 gap-2">
          <label>Password*</label>
          <div className="relative">
            <input
              placeholder="Enter password"
              type={show_password ? "text" : "password"}
              name="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              required
              className="bg-white rounded-[12px] px-[16px] py-[14px] outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!show_password)}
              className=" absolute right-3 top-[30%]"
            >
              {" "}
              <Image
                className=" "
                width={20}
                height={20}
                src={"/images/eye.png"}
                alt=""
              />
            </button>
          </div>
        </div>

        <button className="w-full text-white bg-call_to_action rounded-full py-3 my-3">
          Login
        </button>
      </form>
      <p className=" text-center my-4">
        Don’t have an account? <button onClick={changeAuth}>Sign Up</button>
      </p>
      <div className="relative border-t border-gray-500 w-[80%] m-auto my-10">
        <span className="bg-secondary text-gray-500 absolute top-[-12px] w-fit left-0 right-0 m-auto px-4">
          Or better yet
        </span>
      </div>
      <button className="flex w-full rounded-full justify-center items-center gap-4 border py-2 border-gray-400 my-4">
        <Image
          className=" "
          width={30}
          height={30}
          src={"/images/google.png"}
          alt=""
        />
        <span>Continue with Google</span>
      </button>
      <button className="flex w-full rounded-full justify-center items-center gap-4 border py-2 border-gray-400 my-4">
        <Image
          className=" "
          width={30}
          height={30}
          src={"/images/apple.png"}
          alt=""
        />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
