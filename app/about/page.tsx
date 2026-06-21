import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abhinav Pandey - AI Research Engineer and Software Developer. Education, experience, skills, and achievements in AI, machine learning, and software development.",
  openGraph: {
    title: "About - Abhinav Pandey",
    description:
      "AI Research Engineer and Software Developer with expertise in AI systems, LLMs, and full-stack development. Currently working at Margati Inc.",
    images: ["/images/avatar.jpeg"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutPage />
    </div>
  );
}
