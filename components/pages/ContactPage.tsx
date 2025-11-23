"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.fullname && formData.email && formData.message;

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold text-text-primary mb-2">Contact</h2>
      </header>

      <section className="mb-12">
        <div className="glass rounded-xl border border-glass-border overflow-hidden shadow-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.1234567!3d27.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzI0LjQiTiA4NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-text-primary mb-6">
          Contact Form
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              type="text"
              name="fullname"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 glass border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent focus:glass-strong transition-all"
            />
            <motion.input
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 glass border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent focus:glass-strong transition-all"
            />
          </div>

          <motion.textarea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 glass border border-glass-border rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent focus:glass-strong transition-all resize-none"
          />

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isFormValid
                ? "bg-gradient-accent text-white glass-strong hover:shadow-2 hover:scale-105"
                : "glass-light text-text-tertiary cursor-not-allowed"
            }`}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </motion.button>
        </form>
      </section>
    </article>
  );
}

