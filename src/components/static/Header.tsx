"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const session = useSession();

  const isAuthRoute = pathname === "/auth";

  return (
    <header
      className={`${
        isAuthRoute ? "hidden" : ""
      } flex px-8 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#545454] to-[#fff] z-50 justify-between items-center py-4 fixed left-0 top-0 w-full`}
    >
      <Image
        width={100}
        height={50}
        src={"/images/ailogob.png"}
        alt=""
        className=" w-fit"
      />
      <nav className="flex gap-2">
        {session.status === "authenticated" ? (
          <>
            <button className="px-4" onClick={() => signOut()}>
              Signout
            </button>
            <Link
              href={"/auth"}
              className="py-2 px-4 bg-[#1C1C1C] text-white rounded"
            >
              {session.data.user?.email} &rarr;
            </Link>
          </>
        ) : (
          <Link
            href={"/auth"}
            className="py-2 px-4 bg-[#1C1C1C] text-white rounded"
          >
            Get started &rarr;
          </Link>
        )}
      </nav>
    </header>
  );
}
