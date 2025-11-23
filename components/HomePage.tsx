"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="pt-40 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6">
          {/* Left Sidebar - 1/3 width */}
          <div className="w-1/3">
            <div className="portfolio-card min-h-[600px] flex flex-col items-center py-8">
              {/* Profile Picture */}
              <div className="mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-glass-border">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                {personalInfo.name}
              </h2>

              {/* Title */}
              <p className="text-text-secondary text-base mb-8">
                Software engineer
              </p>

              {/* Resume Button */}
              <a
                href={personalInfo.resume}
                download="Abhinav_CV.docx"
                className="interactive-element glass px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors text-lg font-medium mb-4 w-full justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="text-text-primary">Resume</span>
              </a>

              {/* GitHub Button */}
              <Link
                href={personalInfo.social.github}
                className="interactive-element glass px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors text-lg font-medium mb-4 w-full justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="text-text-primary">GitHub</span>
              </Link>

              {/* Email Button */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element glass px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors text-lg font-medium mb-6 w-full justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-text-primary">Email</span>
              </a>

              {/* Social Links */}
              <div className="flex gap-4 mt-auto">
                {/* Twitter */}
                <Link
                  href={personalInfo.social.twitter}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href={personalInfo.social.linkedin}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>

                {/* LeetCode */}
                <Link
                  href={personalInfo.social.leetcode}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="LeetCode"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.553-1.902-.039l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.912 1.452 1.612 0 3.027-.512 4.037-1.492l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - 2/3 width */}
          <div className="w-2/3">
            <div className="portfolio-card min-h-[600px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
