import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/static/Header";
import SessionProvider from "@/lib/utils/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className='w-full h-full'>
            <Header />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
