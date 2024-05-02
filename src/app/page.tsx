"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="flex w-full h-[140vh] bg-[#100146] text-white gap-12 px-12 lg:px-[4em] pt-[12em] justify-center items-start">
      <div className="w-[38em]" data-aos="zoom-out-right" data-aos-anchor-placement="top-center">
        <h1 className="text-[48px] font-[600] leading-[60px]">
          Writing Smart Contracts for the <span className="special-text">Sui Ecosystem</span> Just Got Better
        </h1>
        <p className='pt-4'>
          Your All-in-One Solution for writing Move programming language code, generating smart contracts, facilitating cryptocurrency transactions
        </p>
        <button className="bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F258FF] to-[#9715FF] mt-8 p-4 rounded-md" type="button" data-aos="zoom-out-right" data-aos-anchor-placement="center-bottom">
          Explore Now with SuiAI &rarr;
        </button>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex flex-col w-[37em] lg:w-[42em] justify-end items-end">
        <h1 className="special-text-2 text-[32px] font-[600]">
          Create a smart contract for a marketplace.
        </h1>
        <img className='w-[62vh] h-42 mt-[-6rem] lg:mt-[-8rem]' src='/images/hero_AI.png' />
      </div>
    </section>
  );
}

