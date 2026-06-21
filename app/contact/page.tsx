import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhinav Pandey. Open to discussing new projects, creative ideas, or opportunities. Contact via email, phone, or social media.",
  openGraph: {
    title: "Contact - Abhinav Pandey",
    description:
      "Get in touch with Abhinav Pandey. Open to discussing new projects, creative ideas, or opportunities.",
    images: ["/images/avatar.jpeg"],
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactPage />
    </div>
  );
}

