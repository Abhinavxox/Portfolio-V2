import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WorksPage from "@/components/WorksPage";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore Abhinav Pandey's research publications, projects, and technical work. Including VULNDET, PPO Reinforcement Learning research, and various software development projects.",
  openGraph: {
    title: "Works - Abhinav Pandey",
    description:
      "Research publications, projects, and technical work in AI, cybersecurity, and software development.",
    images: ["/images/project.png"],
  },
};

export default function Works() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WorksPage />
    </div>
  );
}
