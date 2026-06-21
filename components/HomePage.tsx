"use client";

import Link from "next/link";
import { personalInfo, projects, blogPosts, achievements } from "@/lib/data";
import Image from "next/image";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoBookmarks } from "react-icons/io5";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <div className="pt-5 md:pt-10  pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left Sidebar - Full width on mobile, 1/3 on desktop */}
          <div className="w-full lg:w-1/3 flex">
            <div className="portfolio-card min-h-[500px] sm:min-h-[600px] flex flex-col items-center py-6 sm:py-8 w-full px-4 sm:px-0">
              {/* Profile Picture */}
              <div className="mb-4 sm:mb-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-glass-border">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                {personalInfo.name}
              </h2>

              {/* Title */}
              <p className="text-text-secondary text-sm sm:text-base mb-6 sm:mb-8">
                Software engineer
              </p>

              {/* Spacer to push buttons to bottom */}
              <div className="flex-1 hidden sm:block"></div>

              {/* Description */}
              <div className="text-text-secondary text-sm sm:text-lg mb-6 sm:mb-8 text-center px-2">
                {personalInfo.description.map((item, index) => (
                  <Fragment key={index}>
                    <p className="mb-2">{item}</p>
                  </Fragment>
                ))}
              </div>

              {/* Spacer to push buttons to bottom */}
              <div className="flex-1 hidden sm:block"></div>

              {/* Buttons at the bottom */}
              <div className="w-full mt-auto md:px-5 px-0">
                {/* Resume Button */}
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Abhinav_CV.pdf"
                  className="interactive-element glass px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 transition-colors text-base sm:text-lg font-medium mb-3 sm:mb-4 w-full justify-center"
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
                  className="interactive-element glass px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 transition-colors text-base sm:text-lg font-medium mb-3 sm:mb-4 w-full justify-center"
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
                  className="interactive-element glass px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 transition-colors text-base sm:text-lg font-medium w-full justify-center"
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
              </div>
            </div>
          </div>

          {/* Right Content - Full width on mobile, 2/3 on desktop */}
          <div className="w-full lg:w-2/3 flex">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-h-[auto] sm:min-h-[600px] w-full"
              style={{ gridTemplateRows: "auto" }}
            >
              {/* First row - Item 1 */}
              <Link
                href="/works"
                className="portfolio-card relative overflow-hidden block cursor-pointer transition-opacity hover:opacity-90"
                style={{ height: "100%" }}
              >
                <div className="h-full flex flex-col justify-between p-4 sm:p-6 min-h-[250px] sm:min-h-[auto]">
                  {/* Project Title - Top Center (Script Style) */}
                  <div className="text-center flex-1 flex items-center justify-center min-h-0">
                    <div className="relative w-full max-w-[120px] sm:max-w-[180px] aspect-square">
                      <Image
                        src="/images/project.png"
                        alt="Project"
                        width={100}
                        height={100}
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-end justify-between flex-shrink-0 mt-4">
                    {/* Left Side - Label and Title */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">
                        MY WORKS
                      </p>
                      <h4 className="text-xl sm:text-2xl font-semibold text-text-primary">
                        Projects
                      </h4>
                    </div>

                    {/* Right Side - Circular Icon with Sparkle */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <IoBookmarks className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* First row - Item 2 - Blogs */}
              <Link
                href="/blog"
                className="portfolio-card relative overflow-hidden block cursor-pointer transition-opacity hover:opacity-90"
                style={{ height: "100%" }}
              >
                <div className="h-full flex flex-col justify-between p-4 sm:p-6 min-h-[250px] sm:min-h-[auto]">
                  {/* Blog Image - Top Center */}
                  <div className="text-center flex-1 flex items-center justify-center min-h-0">
                    <div className="relative w-full max-w-[120px] sm:max-w-[180px] aspect-square">
                      <Image
                        src="/images/blog.png"
                        alt="Blog"
                        width={100}
                        height={100}
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-end justify-between flex-shrink-0 mt-4">
                    {/* Left Side - Label and Title */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">
                        KEEP UP WITH ME
                      </p>
                      <h4 className="text-xl sm:text-2xl font-semibold text-text-primary">
                        Blogs
                      </h4>
                    </div>

                    {/* Right Side - Circular Icon with Sparkle */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <IoBookmarks className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Second row - Item 1 - Achievements */}
              <Link
                href="/achievements"
                className="portfolio-card relative overflow-hidden block cursor-pointer transition-opacity hover:opacity-90"
                style={{ height: "100%" }}
              >
                <div className="h-full flex flex-col justify-between p-4 sm:p-6 min-h-[250px] sm:min-h-[auto]">
                  {/* Achievement Image - Top Center */}
                  <div className="text-center flex-1 flex items-center justify-center min-h-0">
                    <div className="relative w-full max-w-[120px] sm:max-w-[180px] aspect-square">
                      <Image
                        src="/images/achievement.png"
                        alt="Achievement"
                        width={100}
                        height={100}
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-end justify-between flex-shrink-0 mt-4">
                    {/* Left Side - Label and Title */}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">
                        HACKATHONS & COMPETITIONS
                      </p>
                      <h4 className="text-xl sm:text-2xl font-semibold text-text-primary">
                        Achievements
                      </h4>
                    </div>

                    {/* Right Side - Circular Icon with Sparkle */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <IoBookmarks className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Second row - Item 2 - Social Links */}
              <div
                className="portfolio-card min-h-[250px] sm:min-h-[auto]"
                style={{ height: "100%" }}
              >
                <div className="h-full flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Social Media Buttons */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full justify-items-center portfolio-card">
                    {/* X (Twitter) */}
                    <Link
                      href={personalInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full glass flex items-center justify-center hover:bg-glass-strong transition-all cursor-pointer"
                      aria-label="X (Twitter)"
                    >
                      <FaXTwitter className="w-7 h-7 sm:w-10 sm:h-10 text-text-primary" />
                    </Link>

                    {/* LinkedIn */}
                    <Link
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full glass flex items-center justify-center hover:bg-glass-strong transition-all cursor-pointer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-7 h-7 sm:w-10 sm:h-10 text-text-primary" />
                    </Link>

                    {/* LeetCode */}
                    <Link
                      href={personalInfo.social.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full glass flex items-center justify-center hover:bg-glass-strong transition-all cursor-pointer"
                      aria-label="LeetCode"
                    >
                      <SiLeetcode className="w-7 h-7 sm:w-10 sm:h-10 text-text-primary" />
                    </Link>

                    {/* Instagram */}
                    <Link
                      href={personalInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full glass flex items-center justify-center hover:bg-glass-strong transition-all cursor-pointer"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-7 h-7 sm:w-10 sm:h-10 text-text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
