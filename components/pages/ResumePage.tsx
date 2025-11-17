"use client";

import { education, experience, skills } from "@/lib/data";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-white-1 mb-2">Resume</h2>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-onyx flex items-center justify-center text-vegas-gold">
            <ion-icon name="book-outline" className="text-2xl"></ion-icon>
          </div>
          <h3 className="text-2xl font-semibold text-white-1">Education</h3>
        </div>

        <ol className="relative border-l-2 border-jet ml-6 space-y-8">
          {education.map((edu, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold border-4 border-jet"></div>
              <h4 className="text-lg font-semibold text-white-1 mb-2">
                {edu.title}
              </h4>
              <span className="text-sm text-vegas-gold mb-2 block">
                {edu.period}
              </span>
              <p className="text-sm text-light-gray-70">{edu.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-onyx flex items-center justify-center text-vegas-gold">
            <ion-icon name="briefcase-outline" className="text-2xl"></ion-icon>
          </div>
          <h3 className="text-2xl font-semibold text-white-1">Experience</h3>
        </div>

        <ol className="relative border-l-2 border-jet ml-6 space-y-8">
          {experience.map((exp, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold border-4 border-jet"></div>
              <h4 className="text-lg font-semibold text-white-1 mb-2">
                {exp.title}
              </h4>
              <span className="text-sm text-vegas-gold mb-2 block">
                {exp.period}
              </span>
              <p className="text-sm text-light-gray-70">{exp.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-white-1 mb-6">My skills</h3>
        <div className="bg-gradient-jet p-6 rounded-xl border border-jet space-y-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-base font-medium text-white-1">
                  {skill.name}
                </h5>
                <span className="text-sm text-light-gray-70">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-jet rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                  className="h-full bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </article>
  );
}

