import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layouts";
import { useActiveSection } from "@/hooks/useActiveSection";
import { PreloaderProvider } from "@/context/PreloaderContext";
import { InitialPreloader } from "@/components/ui";
import HomePage from "@/pages/HomePage";
import "@/index.css";

const PortfolioDetailPage = lazy(() => import("@/pages/PortfolioDetailPage"));

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
    <PreloaderProvider>
      <div className="App min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
        <InitialPreloader />
        <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              {/* Main Portfolio Landing Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dynamic Portfolio Case Study Detail Page */}
              <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </PreloaderProvider>
  );
}

export default App;
