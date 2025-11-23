"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-[60] md:hidden w-10 h-10 glass rounded-lg flex items-center justify-center text-accent border border-glass-border shadow-1"
      >
        <ion-icon
          name={isMobileOpen ? "close" : "menu"}
          className="text-2xl"
        ></ion-icon>
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-text-primary/50 z-[55] md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-[300px] glass p-6 z-50 overflow-y-auto transition-transform duration-300 border-r border-glass-border ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center text-center mb-6">
          <figure className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-accent shadow-2 glass-strong">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </figure>

          <h1 className="text-2xl font-semibold text-text-primary mb-2">
            {personalInfo.name}
          </h1>

          <p className="text-sm text-text-secondary mb-4">
            {personalInfo.title}
          </p>

          {/* Download Resume Button */}
          <a
            href={personalInfo.resume}
            download
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-accent text-white rounded-lg font-medium hover:shadow-2 hover:scale-105 transition-all mb-4 shadow-lg"
          >
            <ion-icon name="download-outline" className="text-lg"></ion-icon>
            <span>Download Resume</span>
          </a>
        </div>

        <div className="border-t border-glass-border pt-6 mt-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-accent">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                <p className="text-xs text-text-tertiary mb-1">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-accent">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div>
                <p className="text-xs text-text-tertiary mb-1">Location</p>
                <address className="text-sm text-text-secondary not-italic">
                  {personalInfo.location}
                </address>
              </div>
            </li>
          </ul>

          <div className="border-t border-glass-border mt-6 pt-6">
            <ul className="flex gap-4 justify-center">
              <li>
                <a
                  href={personalInfo.social.facebook}
                  className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-text-secondary hover:text-accent hover:glass transition-all"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.social.twitter}
                  className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-text-secondary hover:text-accent hover:glass transition-all"
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.social.instagram}
                  className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-text-secondary hover:text-accent hover:glass transition-all"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
