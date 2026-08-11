import React, { Suspense, lazy } from "react";

// Lazy-loaded sections for optimal performance & code splitting
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const EducationSection = lazy(() => import("@/components/sections/EducationSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const PortfolioSection = lazy(() => import("@/components/sections/PortfolioSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>

      {/* Education Section */}
      <Suspense fallback={null}>
        <EducationSection />
      </Suspense>

      {/* Skills Section */}
      <Suspense fallback={null}>
        <SkillsSection />
      </Suspense>

      {/* Portfolio Section */}
      <Suspense fallback={null}>
        <PortfolioSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default HomePage;
