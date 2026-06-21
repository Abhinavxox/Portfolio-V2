import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FunMePage from "@/components/FunMePage";

export const metadata: Metadata = {
  title: "Fun Me - Easter Egg",
  description: "A secret page with fun moments and memories",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FunMe() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FunMePage />
    </div>
  );
}

