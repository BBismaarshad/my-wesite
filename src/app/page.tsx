import React from "react";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
import ProjectSection from "./Components/ProjectSection";
import SkillsSection from "./Components/SkillsSection";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default page;
