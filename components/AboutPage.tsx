"use client";

import {
  personalInfo,
  experience,
  education,
  achievements,
  about,
} from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact Information Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="portfolio-card mb-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Picture */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-glass-border flex-shrink-0">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-3">
                {personalInfo.name}
              </h1>
              <div className="space-y-2 text-text-secondary">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                  <span className="hidden sm:inline">|</span>
                  <a
                    href={`tel:${personalInfo.phone2}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {personalInfo.phone2}
                  </a>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block hover:text-text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter size={22} />
                </a>
                <a
                  href={personalInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={22} />
                </a>
              </div>
            </div>

            {/* Explore Me Button */}
            <div className="flex-shrink-0">
              <Link href="/fun-me">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-lg glass-strong text-text-primary font-medium hover:text-black hover:!bg-white transition-all duration-300 relative overflow-hidden group"
                >
                  <span>Explore my journey ✨</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="portfolio-card mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
            About Me
          </h2>
          <div className="space-y-4 text-text-secondary">
            {about.description.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="portfolio-card mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="pb-6 border-b border-glass-border last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden glass p-2 flex items-center justify-center ${
                          index === 1 ? "!bg-white" : "bg-black"
                        }`}
                      >
                        <div className="relative w-full h-full max-w-[60px] max-h-[60px] sm:max-w-[72px] sm:max-h-[72px]">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Company Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                          {exp.company}
                        </h3>
                        {exp.about && (
                          <p className="text-sm text-text-secondary mt-1">
                            {exp.about}
                          </p>
                        )}
                      </div>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                      >
                        Visit Website
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-text-primary font-medium">
                        {exp.role}
                      </span>
                      <span className="hidden sm:inline text-text-secondary">
                        •
                      </span>
                      <span className="text-text-secondary">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 mt-3">
                      {exp.job.map((item, jobIndex) => (
                        <li
                          key={jobIndex}
                          className="text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="portfolio-card mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="pb-6 border-b border-glass-border last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0">
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden glass p-2 flex items-center justify-center !bg-white">
                        <div className="relative w-full h-full max-w-[60px] max-h-[60px] sm:max-w-[72px] sm:max-h-[72px]">
                          <Image
                            src={edu.logo}
                            alt={edu.name}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Institution Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                        {edu.name}
                      </h3>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                      >
                        Visit Website
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-text-secondary">{edu.degree}</span>
                      <span className="hidden sm:inline text-text-secondary">
                        •
                      </span>
                      <span className="text-text-secondary">{edu.period}</span>
                    </div>
                    <p className="text-text-secondary">
                      Grade:{" "}
                      <span className="text-text-primary">{edu.grade}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="portfolio-card"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
            Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="pb-6 border-b border-glass-border last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-text-secondary whitespace-nowrap">
                    {achievement.date}
                  </span>
                </div>
                <p className="text-text-secondary mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.link && achievement.link !== "#" && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1"
                  >
                    View Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
