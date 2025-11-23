"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
    <nav className="sticky top-0 glass z-40 border-b border-glass-border">
      <div className="flex items-center justify-between px-4 md:px-6">
        <ul className="flex items-center justify-center gap-1 p-2 md:p-4 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  pathname === item.path
                    ? "glass-strong text-accent"
                    : "text-text-secondary hover:text-accent hover:glass-light"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

