import React, { Suspense, lazy } from "react";
import {
  HeroSectionSkeleton,
  AboutSectionSkeleton,
  EducationSectionSkeleton,
  SkillsSectionSkeleton,
  PortfolioSectionSkeleton,
  ContactSectionSkeleton,
} from "@/components/loading";

// Lazy-loaded sections for optimal bundle splitting & fast load
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
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<AboutSectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Education Section */}
      <Suspense fallback={<EducationSectionSkeleton />}>
        <EducationSection />
      </Suspense>

      {/* Skills Section */}
      <Suspense fallback={<SkillsSectionSkeleton />}>
        <SkillsSection />
      </Suspense>

      {/* Portfolio Section */}
      <Suspense fallback={<PortfolioSectionSkeleton />}>
        <PortfolioSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<ContactSectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
}

export default HomePage;
