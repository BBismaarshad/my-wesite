"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  tags?: string[];
};

const projects: Project[] = [
   {
    title: "Portfolio Website",
    description:
      "A clean and modern Portfolio Website Template built with Next.js and Tailwind CSS. Perfect for developers, designers, and freelancers to showcase their skills, projects, and blog posts. Fully responsive design, easy to customize, and ready for deployment on platforms like Vercel.",
    imageUrl: "/projects/image.png",
    githubUrl: "https://github.com/BBismaarshad/Next.js-template-website.git",
    liveDemoUrl: "https://next-js-template-website.vercel.app/",
    tags: [" Portfolio", "Next.js", "Typescript", "Tailwind CSS"],
  },
  {
    title: "Generative-AI",
    description:
      "This document provides a brief overview of Generative AI and explains the fundamental workings of Artificial Intelligence (AI).",
    imageUrl: "/projects/ai.jpeg",
    githubUrl: "https://github.com/BBismaarshad/GIAIC-Q4-Generative-AI",
    tags: ["Python", "Ai", "Api", "Generative-ai"],
  },
  {
    title: "mock-api",
    description:
      "Built a small practice project using Mock API to understand data fetching and API integration. This helped me improve my frontend development and testing skills",
    imageUrl: "/projects/api.jpeg",
    githubUrl: "https://github.com/BBismaarshad/mock-api-practice",
    liveDemoUrl: "https://mock-api-practice.vercel.app/",
    tags: ["TypeScript", "mock-api", "Next.js"],
  },

  {
    title: "SanityBlog",
    description:
      "Built a blog project using Sanity CMS to manage and display content easily. This helped me understand how to connect a headless CMS with a frontend website.",
    imageUrl: "/projects/blog.jpg",
    githubUrl:
      "https://github.com/BBismaarshad/blog/tree/main/next-sanity-blog",
    liveDemoUrl: "https://blog-chi-pearl-63.vercel.app/",
    tags: ["SanityBlog", "TypeScript", "Next.js"],
  },
];

export default function ProjectSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-50">
            MyProjects
          </h2>
          <p className="text-amber-50/80 pt-10  max-w-2xl  font-light mx-auto text-lg">
            Here are some of my featured works.
          </p>
          <p className="text-amber-50/80 max-w-2xl  font-light mx-auto text-lg">
            These include assignments completed during my GIAIC program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-amber-500/20 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-amber-50/80 text-sm mb-4 text-light">
                  {project.description}
                </p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-amber-200 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm font-medium text-amber-50 hover:text-amber-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      className="flex items-center gap-1 text-sm font-medium text-amber-50 hover:text-amber-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="https://github.com/BBismaarshad?tab=repositories"
            className="inline-flex items-center px-6 py-3 border border-amber-200 text-amber-200 font-medium rounded-full hover:bg-amber-200 hover:text-gray-900 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
