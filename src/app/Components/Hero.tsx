import React from "react";
import VerticalLine from "./VerticalLine";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <VerticalLine />
      <section id="hero">
        <div className="relative bg-[#070F16]  flex flex-col justify-center py-8 sm:min-h-screen sm:py-0">
          <div className="flex flex-col items-center px-4 text-center max-w-2xl mx-auto">
            {/* Name and Title */}
            <h1 className="text-amber-50 text-5xl md:text-7xl font-light mb-4">
              Bisma Arshad
            </h1>

            <h3 className="text-amber-50/80 font-light text-sm md:text-lg mb-8">
              <span>Front-End Developer</span>
              <span className="mx-3 hidden sm:inline-block">•</span>
              <span>Learning Python</span>
            </h3>

            {/* Description */}
            <p className="text-amber-50/80 mb-12 text-base md:text-lg leading-relaxed">
              Web Developer | Front-end (Next.js, TailwindCSS, TypeScript) | AI
              Learner at GIAIC | Passionate about responsive design & smooth
              user experiences.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
              <div className="flex items-center text-amber-50/90">
                <IoLocationOutline className="mr-2 text-lg" />
                <span className="text-sm md:text-base">Karachi, Pakistan</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-amber-50/40"></div>

              <div className="flex items-center text-amber-50/90">
                <MdOutlineAttachEmail className="mr-2 text-lg" />
                <span className="text-sm md:text-base">
                  bismaarshad975@gmail.com
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bismaarshad975@gmail.com"
                target="_blank"
              >
                <button className="px-8 py-3 border cursor-pointer border-amber-50 text-amber-50 hover:bg-amber-50/10 transition duration-300 rounded-sm text-sm md:text-base tracking-wider font-medium">
                  Email ME
                </button>
              </Link>

              <Link href="https://github.com/BBismaarshad" target="_blank">
                <button className="px-8 py-3 bg-amber-50 cursor-pointer text-gray-900 hover:bg-amber-200 transition duration-300 rounded-sm text-sm md:text-base tracking-wider font-medium">
                  VIEW PROJECTS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
