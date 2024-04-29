"use client";

import Image from "next/image";
import Link from "next/link";



export default function Header() {

  return (
    <header className='flex  px-8 justify-between items-center py-4'>
     <Image width={100} height={50} src={'/images/ailogob.png'} alt="" className=" w-fit"  />
     <nav className="flex gap-2"><Link href={'/auth'} className="py-2 px-4">Log In</Link> <Link href={'/auth'} className="py-2 px-4 bg-[#1C1C1C] text-white rounded">Get started</Link></nav>
    </header>
  );
}
