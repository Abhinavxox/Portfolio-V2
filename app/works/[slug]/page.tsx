import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectPage from "@/components/ProjectPage";
import { getProjectBySlug, projects } from "@/lib/data";

interface ProjectProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  const description = project.description.join(" ");

  return {
    title: `${project.title} - Abhinav Pandey`,
    description: description.substring(0, 160) + "...",
    openGraph: {
      title: project.title,
      description: description.substring(0, 160) + "...",
      type: "website",
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: description.substring(0, 160) + "...",
      images: [project.image],
    },
  };
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectPage slug={slug} />
    </div>
  );
}

