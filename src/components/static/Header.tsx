"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#545454] to-[#FFFFFF] flex z-50 px-8 justify-between items-center py-4 fixed left-0 top-0 w-full">
      <Image
        width={100}
        height={50}
        src={"/images/ailogob.png"}
        alt=""
        className=" w-fit"
      />
      <nav className="flex gap-2">
        <Link href={"/auth"} className="py-2 px-4 text-white">
          Log In
        </Link>{" "}
        <Link
          href={"/auth"}
          className="py-2 px-4 bg-[#1C1C1C] text-white rounded"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
}
