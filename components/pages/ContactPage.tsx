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
        <h2 className="text-3xl font-semibold text-white-1 mb-2">Contact</h2>
      </header>

      <section className="mb-12">
        <div className="bg-gradient-jet rounded-xl border border-jet overflow-hidden">
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
        <h3 className="text-2xl font-semibold text-white-1 mb-6">
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
              className="w-full px-4 py-3 bg-eerie-black-2 border border-jet rounded-lg text-white-1 placeholder-light-gray-70 focus:outline-none focus:border-vegas-gold transition-colors"
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
              className="w-full px-4 py-3 bg-eerie-black-2 border border-jet rounded-lg text-white-1 placeholder-light-gray-70 focus:outline-none focus:border-vegas-gold transition-colors"
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
            className="w-full px-4 py-3 bg-eerie-black-2 border border-jet rounded-lg text-white-1 placeholder-light-gray-70 focus:outline-none focus:border-vegas-gold transition-colors resize-none"
          />

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              isFormValid
                ? "bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 hover:shadow-lg hover:scale-105"
                : "bg-jet text-light-gray-70 cursor-not-allowed"
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

