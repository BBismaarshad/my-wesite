"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#070F16] sticky top-0 z-50">
      {/* Main Navbar Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex Container for Logo and Menu */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2 text-amber-50">
              <span className="text-3xl">💻</span>
              <span className="font-medium text-xl sm:text-2xl">
                Front-End_Dev
              </span>
            </div>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 sm:space-x-8 lg:space-x-10">
              <Link
                href="#hero"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Skills & Qualifications
              </Link>
              <Link
                href="#projects"
                className="text-amber-50 hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                My Project
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Hidden on desktop */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-50 hover:text-amber-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shows on small screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141b25]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="block px-3 py-2 text-base font-medium text-amber-50 hover:text-amber-200 border-b border-gray-700"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-base font-medium text-amber-50 hover:text-amber-200 border-b border-gray-700"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 text-base font-medium text-amber-50 hover:text-amber-200 border-b border-gray-700"
            >
              Skills & Qualifications
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-base font-medium text-amber-50 hover:text-amber-200 border-b border-gray-700"
            >
              My Project
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
