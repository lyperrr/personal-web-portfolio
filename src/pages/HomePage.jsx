import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  HeroSectionSkeleton,
  AboutSectionSkeleton,
  EducationSectionSkeleton,
  SkillsSectionSkeleton,
  PortfolioSectionSkeleton,
  ContactSectionSkeleton,
} from "@/components/loading";

// Lazy-loaded sections for optimal performance & code splitting
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const EducationSection = lazy(() => import("@/components/sections/EducationSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const PortfolioSection = lazy(() => import("@/components/sections/PortfolioSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

/**
 * SectionLoader component ensures that Skeleton Loaders render consistently
 * in both production and development builds with smooth fade-in transitions.
 */
function SectionLoader({ fallback, children, delay = 400 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return <div className="animate-pulse duration-500">{fallback}</div>;
  }

  return (
    <div className="animate-in fade-in duration-500 ease-out">
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Suspense fallback={<HeroSectionSkeleton />}>
        <SectionLoader fallback={<HeroSectionSkeleton />} delay={300}>
          <HeroSection />
        </SectionLoader>
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<AboutSectionSkeleton />}>
        <SectionLoader fallback={<AboutSectionSkeleton />} delay={350}>
          <AboutSection />
        </SectionLoader>
      </Suspense>

      {/* Education Section */}
      <Suspense fallback={<EducationSectionSkeleton />}>
        <SectionLoader fallback={<EducationSectionSkeleton />} delay={400}>
          <EducationSection />
        </SectionLoader>
      </Suspense>

      {/* Skills Section */}
      <Suspense fallback={<SkillsSectionSkeleton />}>
        <SectionLoader fallback={<SkillsSectionSkeleton />} delay={450}>
          <SkillsSection />
        </SectionLoader>
      </Suspense>

      {/* Portfolio Section */}
      <Suspense fallback={<PortfolioSectionSkeleton />}>
        <SectionLoader fallback={<PortfolioSectionSkeleton />} delay={450}>
          <PortfolioSection />
        </SectionLoader>
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<ContactSectionSkeleton />}>
        <SectionLoader fallback={<ContactSectionSkeleton />} delay={450}>
          <ContactSection />
        </SectionLoader>
      </Suspense>
    </>
  );
}

export default HomePage;
