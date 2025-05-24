"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python", level: 75 },
  { name: "Streamlit", level: 65 },
  { name: "Git & GitHub", level: 80 },
];

const qualifications = [
  // "100 Days of Python Challenge completed with 20+ projects",
  "GIAIC Generative AI - Quarter 4 in progress (2025)",
  "Built 5+ Front-End projects using Next.js & Tailwind CSS",
  "Mastered Object-Oriented Programming (OOP) concepts in Python",
  "Experienced in responsive web design and modern UI/UX principles",
];

const education = [
  {
    degree: "Matriculation (Science)",
    institution: " Girls SEC.School Junior Model, Karachi",
    year: "2018-2020",
    grade: "A+ Grade",
  },
  {
    degree: "Intermediate (Commerce)",
    institution: "Riaz Government Girls college , Karachi",
    year: "2020–2022",
    grade: "A Grade",
  },
  {
    degree: "GIAIC – Generative AI Certification",
    institution: "Governor Sindh IT Initiative",
    year: "2024–Present",
    grade: "In Progress",
  },
];

export default function SkillsSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-500 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            My <span className="text-white">SKills</span>
          </h2>
          <p
            className={`border-amber-50/80  text-amber-50 font-light py-10 max-w-2xl mx-auto text-lg transition-all duration-500 delay-100 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The skills, qualifications, and knowledge I&#39;ve acquired on my
            journey
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 transition-all duration-500 delay-200 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-amber-200 transition-all duration-300 group ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + idx * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-amber-50 font-medium">{skill.name}</span>
                <span className="text-amber-50/80 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-amber-50 to-amber-50/30  h-2 rounded-full transition-all duration-1000 delay-300"
                  style={{ width: show ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-12">
          {/* Qualifications */}
          <div
            className={`lg:w-1/2 transition-all duration-500 delay-300 ${
              show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <h3 className="text-3xl  mb-8 text-amber-50 font-bold text-center lg:text-left">
              My Qualifications
            </h3>
            <ul className="space-y-4">
              {qualifications.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 text-gray-300 transition-all duration-500 ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                >
                  <span className="text-amber-200 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="flex-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div
            className={`lg:w-1/2 transition-all duration-500 delay-400  ${
              show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <h3 className="text-3xl font-bold mb-8 text-amber-50 text-center lg:text-left">
              Education Background
            </h3>
            <div className="space-y-8 relative">
              {/* Timeline bar */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-amber-200 to-gray-800"></div>

              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`relative pl-12 transition-all duration-500 ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${400 + idx * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 bg-amber-200 rounded-full border-4 border-gray-800 z-10"></div>

                  <div className="bg-gray-800   p-6 rounded-xl border border-gray-700 hover:border-amber-200 transition-all duration-300">
                    <h4 className="text-xl font-bold text-amber-50 mb-1">
                      {edu.degree}
                    </h4>
                    <p className=" mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{edu.year}</span>
                      <span className="px-3 py-1 bg-gray-700 text-amber-200 rounded-full text-xs font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
