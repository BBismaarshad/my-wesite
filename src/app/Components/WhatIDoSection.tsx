"use client";

import { useEffect, useState } from "react";
import {
  Code,
  LayoutDashboard,
  Zap,
  Smartphone,
  Cpu,
  Database,
  GitBranch,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect interfaces with React.js, Next.js, and Tailwind CSS that deliver exceptional user experiences.",
    icon: <LayoutDashboard className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend Development",
    description:
      "Developing robust RESTful APIs and server-side logic with Python, FastAPI, and database integrations for scalable applications.",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    tech: ["Python", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Rapid Prototyping",
    description:
      "Creating functional prototypes and data applications quickly using Streamlit for proof-of-concepts and MVPs.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    tech: ["Streamlit", "Python", "Pandas", "Plotly"],
  },
  {
    title: "Mobile-First Design",
    description:
      "Crafting responsive layouts with mobile-first approach that adapt seamlessly across all devices and screen sizes.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-pink-500 to-pink-600",
    tech: ["Responsive UI", "Flexbox", "CSS Grid", "Media Queries"],
  },
  {
    title: "System Architecture",
    description:
      "Designing scalable application architectures with proper separation of concerns and optimized performance.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-amber-500 to-amber-600",
    tech: ["Microservices", "API Design", "Caching", "Load Balancing"],
  },
  {
    title: "Database Design",
    description:
      "Structuring efficient database schemas and optimized queries for both SQL and NoSQL databases.",
    icon: <Database className="w-8 h-8" />,
    color: "from-emerald-500 to-emerald-600",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    title: "Version Control",
    description:
      "Implementing Git workflows and collaboration strategies for team development and CI/CD pipelines.",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    tech: ["Git", "GitHub", "GitFlow", "CI/CD"],
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on cloud platforms with proper monitoring and scaling.",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-600",
    tech: ["Vercel", "AWS", "Docker", "Kubernetes"],
  },
];

export default function WhatIDoSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-500 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            My <span className="text-amber-400">Services</span>
          </h2>
          <p
            className={`text-gray-300 max-w-2xl mx-auto text-lg transition-all duration-500 delay-100 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-400 transition-all duration-300 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <div className="p-6">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${service.color} mb-6 text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-700 text-xs text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-500 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button className="inline-flex items-center px-6 py-3 border border-amber-400 text-amber-400 font-medium rounded-full hover:bg-amber-400 hover:text-gray-900 transition-colors duration-300">
            Get in Touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
