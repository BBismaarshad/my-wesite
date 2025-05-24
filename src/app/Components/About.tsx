"use client";
import React from "react";
import Link from "next/link";
import { LuHardDriveDownload } from "react-icons/lu";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  const handleDownload = () => {
    const cvUrl = "/path/to/your/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Your_Name_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about">
      <div className="bg-gray-900 flex flex-col md:flex-row p-8 md:p-16 items-center md:items-start">
        <div className="w-full md:w-5/12 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-amber-50 text-4xl md:text-5xl lg:text-6xl font-light">
            About Me
          </h1>

          <p className="my-8 text-amber-50 font-light text-lg leading-relaxed">
            A passionate frontend developer from Pakistan. <br />
            🌱 I'm currently learning Python!
          </p>

          <div className="flex items-center gap-6 mb-8">
            <Link href="/assets/cv.pdf" target="_blank">
              <button
                onClick={handleDownload}
                className="flex items-center px-6 py-3 cursor-pointer bg-amber-50 text-gray-900 hover:bg-amber-200 rounded-md transition-colors duration-300"
              >
                <LuHardDriveDownload className="mr-2" />
                Download CV
              </button>
            </Link>

            <div className="flex flex-col gap-3 border-l border-amber-50/30 pl-6">
              <Link
                href="https://www.linkedin.com/in/bisma-arshad/"
                className="text-amber-50 cursor-pointer hover:text-amber-200 transition-colors duration-300 text-xl"
              >
                <GrLinkedin />
              </Link>
              <Link
                href="https://x.com/BismaArshad_Dev/status/1921113575889793041?t=e-Fi9yLqSdv9OpIvTdUPBw&s=19"
                className="text-amber-50 cursor-pointer hover:text-amber-200 transition-colors duration-300 text-xl"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.facebook.com/bisma.arshad.103354/"
                className="text-amber-50 cursor-pointer hover:text-amber-200 transition-colors duration-300 text-xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://github.com/BBismaarshad"
                className="text-amber-50 cursor-pointer hover:text-amber-200 transition-colors duration-300 text-xl"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 md:pt-16">
          {" "}
          {/* Added md:pt-16 to match the left section's top padding */}
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a dedicated and enthusiastic web developer with a strong passion
            for crafting responsive, user-friendly websites. My expertise lies
            in HTML, CSS, JavaScript, Typescript and modern frameworks like
            React and Next.js, allowing me to build sleek, high-performance, and
            scalable web applications.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6 md:mt-10">
            With a background in design, I bring a keen eye for detail and
            aesthetics to every project, ensuring that the interfaces I develop
            are not only visually appealing but also accessible and optimized
            for performance.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6 md:mt-10">
            I thrive on solving complex challenges through clean and efficient
            code, and I'm always eager to explore emerging technologies and
            collaborate on innovative, impactful projects.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-6 md:mt-10">
            Whether it's creating seamless user experiences, building full-stack
            applications with Next.js, or optimizing frontend performance, I aim
            to deliver solutions that truly make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
