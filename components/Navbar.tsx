"use client";

import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-[#0f0f0f] hidden md:flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex items-center justify-center">
          {/* Centered Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm sm:text-base md:text-lg font-medium transition-all duration-200 ${
                    active
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
