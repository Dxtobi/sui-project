"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
    });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#100146] overflow-hidden sm:overflow-auto">
      <section className="flex w-full text-white gap-12 px-12 lg:px-[4em] pt-[10em] mx-auto justify-center items-start">
        <div
          className="w-[42em]"
          data-aos="zoom-out-right"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="text-[28px] md:text-[48px] font-[600]">
            Writing Smart Contracts for the{" "}
            <span className="special-text">Sui Ecosystem</span> Just Got Better
          </h1>
          <p className="pt-4">
            Your All-in-One Solution for writing Move programming language code,
            generating smart contracts, facilitating cryptocurrency transactions
          </p>
          <button
            className="bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F258FF] to-[#9715FF] mt-8 p-4 rounded-md"
            type="button"
          >
            Explore Now with SuiAI &rarr;
          </button>
        </div>

        <div className="flex flex-col w-[37em] lg:w-[42em] mr-auto justify-end items-end">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="flex special-text-2 text-[32px] font-[600]"
          >
            <Typewriter
              options={{
                strings: [
                  `Create a smart contract for a marketplace.`,
                  `Help me pick a gift for my dad who loves fishing`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/* <div className="flex w-full h-34 mt-[-4rem] lg:mt-[-4rem] mr-[-8em] relative">
            <Image
              width={198}
              height={40}
              alt="landing-page"
              className="w-fit rounded-b-[70px]"
              src={"/images/hero_AI.png"}
            />
          </div> */}
        </div>
      </section>

      <section className="flex text-white mt-[6em] gap-9 px-12 justify-end items-center py-4 w-full">
        <div>Terms & Condition</div>
        <div>Privacy Policy</div>
      </section>
    </div>
  );
}
