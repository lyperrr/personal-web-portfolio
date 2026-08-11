import React, { Suspense, lazy } from "react";
import { Layout } from "@/components/layouts";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  LazySection,
  HeroSectionSkeleton,
  AboutSectionSkeleton,
  EducationSectionSkeleton,
  SkillsSectionSkeleton,
  PortfolioSectionSkeleton,
  ContactSectionSkeleton,
} from "@/components/loading";
import "@/index.css";

// Lazy-loaded sections for optimal web performance & instant page load
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const EducationSection = lazy(() => import("@/components/sections/EducationSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const PortfolioSection = lazy(() => import("@/components/sections/PortfolioSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

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
      <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
        {/* Hero Section: Render HeroSectionSkeleton fallback matching 1-to-1 with real Hero typography */}
        <Suspense fallback={<HeroSectionSkeleton />}>
          <HeroSection />
        </Suspense>

        {/* About Section: Triggered on scroll with 1-to-1 photo frame & bio skeleton */}
        <LazySection fallback={<AboutSectionSkeleton />} delay={700}>
          <Suspense fallback={<AboutSectionSkeleton />}>
            <AboutSection />
          </Suspense>
        </LazySection>

        {/* Education Section: Triggered on scroll with 1-to-1 timeline skeleton */}
        <LazySection fallback={<EducationSectionSkeleton />} delay={800}>
          <Suspense fallback={<EducationSectionSkeleton />}>
            <EducationSection />
          </Suspense>
        </LazySection>

        {/* Skills Section: Triggered on scroll with 1-to-1 8 skill card skeletons */}
        <LazySection fallback={<SkillsSectionSkeleton />} delay={900}>
          <Suspense fallback={<SkillsSectionSkeleton />}>
            <SkillsSection />
          </Suspense>
        </LazySection>

        {/* Portfolio Section: Triggered on scroll with 1-to-1 portfolio card skeletons */}
        <LazySection fallback={<PortfolioSectionSkeleton />} delay={850}>
          <Suspense fallback={<PortfolioSectionSkeleton />}>
            <PortfolioSection />
          </Suspense>
        </LazySection>

        {/* Contact Section: Triggered on scroll with 1-to-1 contact form skeletons */}
        <LazySection fallback={<ContactSectionSkeleton />} delay={750}>
          <Suspense fallback={<ContactSectionSkeleton />}>
            <ContactSection />
          </Suspense>
        </LazySection>
      </Layout>
    </div>
  );
}

export default App;
