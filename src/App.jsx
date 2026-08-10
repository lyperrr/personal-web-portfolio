import React from "react";
import { Layout } from "@/components/layouts";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  PortfolioSection,
  ContactSection,
} from "@/components/sections";
import { LiquidBackground } from "@/components/ui";
import { useActiveSection } from "@/hooks/useActiveSection";
import "@/index.css";

function App() {
  const sectionIds = [
    "home",
    "about",
    "education",
    "skills",
    "portfolio",
    "contact",
  ];
  const { activeSection, scrollToSection } = useActiveSection(sectionIds, "home");

  return (
    <div className="App min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
      {/* Ambient Monochromatic Liquid Mesh Background */}


      <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </Layout>
    </div>
  );
}

export default App;
