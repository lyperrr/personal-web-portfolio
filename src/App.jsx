import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layouts";
import { useActiveSection } from "@/hooks/useActiveSection";
import HomePage from "@/pages/HomePage";
import PortfolioDetailPage from "@/pages/PortfolioDetailPage";
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
      <Layout activeSection={activeSection} scrollToSection={scrollToSection}>
        <Routes>
          {/* Main Portfolio Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic Portfolio Case Study Detail Page */}
          <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
