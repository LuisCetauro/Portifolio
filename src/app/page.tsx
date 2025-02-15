"use client";

import { useRouter } from "next/navigation";
import JobHolder from "./Components/JobHolder/JobHolder";

export default function Projects() {
  const router = useRouter();
  const handleNavigation = (slug: string) => {
    router.push(`/${slug}`);
  };

  const projects = [
    {
      title: "Iaara",
      technology: "NextJs + TailwindCSS + MongoDB",
      src: "/Iaara/img1.png",
      slug: "Iaara",
    },
    {
      title: "API + ReactJS",
      technology: "Laravel 10 + ReactJS + TailwindCSS + MySQL",
      src: "/Api/img1.png",
      slug: "Api_PHP",
    },
    {
      title: "MarketPlace",
      technology: "ReactJs + TailwindCSS + ContextAPI",
      src: "/Market/img1.png",
      slug: "Marketplace",
    },
    {
      title: "DarkMode Switch",
      technology: "NextJs + TailwindCSS + MongoDB",
      src: "/DarkMode/img1.png",
      slug: "DarkMode",
    },
    {
      title: "Streaming",
      technology: "HTML + CSS + JavaScript",
      src: "/Streaming/img1.png",
      slug: "Streaming",
    },
  ];

  return (
    <div className="mt-20 mb-24 flex flex-col justify-center items-center gap-6 text-white px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Meus Projetos</h2>
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.slug}
            onClick={() => handleNavigation(project.slug)}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <JobHolder Job={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
