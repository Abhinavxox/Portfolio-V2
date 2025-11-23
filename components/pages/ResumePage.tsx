"use client";

import { education, experience, skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-text-primary mb-2">Resume</h2>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg glass-light flex items-center justify-center text-accent">
            <ion-icon name="book-outline" className="text-2xl"></ion-icon>
          </div>
          <h3 className="text-2xl font-semibold text-text-primary">Education</h3>
        </div>

        <ol className="relative border-l-2 border-glass-border ml-6 space-y-8">
          {education.map((edu, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-accent border-4 glass-strong"></div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {edu.title}
              </h4>
              <span className="text-sm text-accent mb-2 block">
                {edu.period}
              </span>
              <p className="text-sm text-text-secondary">{edu.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg glass-light flex items-center justify-center text-accent">
            <ion-icon name="briefcase-outline" className="text-2xl"></ion-icon>
          </div>
          <h3 className="text-2xl font-semibold text-text-primary">Experience</h3>
        </div>

        <ol className="relative border-l-2 border-glass-border ml-6 space-y-8">
          {experience.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-accent border-4 glass-strong"></div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                {exp.title}
              </h4>
              <span className="text-sm text-accent mb-2 block">
                {exp.period}
              </span>
              <p className="text-sm text-text-secondary">{exp.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-text-primary mb-6">My skills</h3>
        <div className="glass p-6 rounded-xl border border-glass-border shadow-1 space-y-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-base font-medium text-text-primary">
                  {skill.name}
                </h5>
                <span className="text-sm text-text-secondary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 glass-light rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                  className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </article>
  );
}

