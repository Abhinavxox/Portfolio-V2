"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "About", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-eerie-black-2 z-40 border-b border-jet">
      <ul className="flex items-center justify-center gap-1 p-2 md:p-4 overflow-x-auto">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === item.path
                  ? "bg-gradient-onyx text-vegas-gold"
                  : "text-light-gray hover:text-vegas-gold"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

