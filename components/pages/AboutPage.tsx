"use client";

import { about, publications, achievements } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-white-1 mb-2">About me</h2>
      </header>

      <section className="mb-12">
        <div className="space-y-4 text-light-gray leading-relaxed">
          {about.description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-white-1 mb-6">
          What i&apos;m doing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-jet p-6 rounded-xl border border-jet hover:border-vegas-gold transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-onyx flex items-center justify-center flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white-1 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-light-gray-70">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-white-1 mb-6">
          Publications
        </h3>
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-jet p-6 rounded-xl border border-jet"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-onyx flex items-center justify-center text-vegas-gold flex-shrink-0">
                  <ion-icon name="document-text-outline" className="text-2xl"></ion-icon>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white-1 mb-3">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-light-gray-70 mb-4">
                    {pub.description}
                  </p>
                  <a
                    href={pub.downloadLink}
                    className="inline-flex items-center gap-2 text-sm text-vegas-gold hover:text-orange-yellow-crayola transition-colors"
                  >
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-white-1 mb-6">
          Achievements
        </h3>
        <div className="space-y-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-jet p-6 rounded-xl border border-jet"
            >
              <h4 className="text-lg font-semibold text-white-1 mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-light-gray-70 mb-2">
                {achievement.description}
              </p>
              <time className="text-xs text-vegas-gold">
                {achievement.date}
              </time>
            </motion.div>
          ))}
        </div>
      </section>
    </article>
  );
}

