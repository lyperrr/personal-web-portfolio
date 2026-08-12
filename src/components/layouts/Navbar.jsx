import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cvPdf from "@/assets/CV_Willy_Permana.pdf";
import { Button, LiquidTabs } from "@/components/ui";
import { Menu, X, Download, Sun, MoonStar, Loader2, Check } from "lucide-react";
import { toggleTheme } from "@/main";

function Navbar({ activeSection = "home", scrollToSection }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadingCV, setIsDownloadingCV] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  // Toggle theme
  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, sectionId) => {
    if (scrollToSection) {
      scrollToSection(e, sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  // Download CV Handler with smooth loading state & success feedback
  const handleDownloadCV = (e) => {
    if (e) e.preventDefault();
    if (isDownloadingCV) return;

    setIsDownloadingCV(true);

    setTimeout(() => {
      // Create temporary invisible link & trigger file download
      const link = document.createElement("a");
      link.href = cvPdf;
      link.download = "CV_I_Kadek_Willy_Dwi_Permana.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloadingCV(false);
      setDownloadSuccess(true);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 2000);
    }, 900);
  };

  const mobileMenuOverlay = (
    <div
      className={`lg:hidden fixed inset-0 z-[99999] w-full h-full min-h-[100dvh] backdrop-blur-3xl bg-background/90 dark:bg-background/95 flex flex-col justify-between p-6 sm:p-10 pb-[calc(2rem+env(safe-area-inset-bottom))] transition-all duration-300 ease-in-out overflow-y-auto ${
        isMobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Top Close Button Row (No Logo) */}
      <div className="flex items-center justify-end pt-2">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 rounded-full shadow-md"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Mobile Menu"
        >
          <X className="size-6" />
        </Button>
      </div>

      {/* Spacious Centered Nav Links with Apple Liquid Glass Button Styling */}
      <div className="flex-1 flex flex-col justify-center items-center my-auto py-6">
        <ul className="flex flex-col items-center gap-3.5 w-full max-w-xs sm:max-w-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="w-full text-center">
                <Button
                  asChild
                  variant={isActive ? "ghost" : "outline"}
                  size="xl"
                  className={`w-full text-xl font-bold justify-center py-4 h-auto border border-white/30 dark:border-white/15 backdrop-blur-2xl transition-all duration-300 ${
                    isActive ? "shadow-xl scale-105" : ""
                  }`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.name}
                  </a>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Download CV Action Button with Vibrant Loading Spinner */}
      <div className="w-full max-w-xs sm:max-w-sm mx-auto pt-2 pb-2">
        <Button
          variant="outline"
          size="xl"
          onClick={handleDownloadCV}
          className={`w-full text-base shadow-xl gap-2.5 transition-all duration-300 ${
            isDownloadingCV ? "pointer-events-none cursor-wait" : ""
          } ${
            downloadSuccess ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold" : ""
          }`}
        >
          {isDownloadingCV ? (
            <>
              <span className="font-semibold text-foreground">Preparing CV...</span>
              <Loader2 className="size-5 animate-spin text-primary" />
            </>
          ) : downloadSuccess ? (
            <>
              <span>Downloaded!</span>
              <Check className="size-5 text-emerald-500" />
            </>
          ) : (
            <>
              <span>Download CV</span>
              <Download className="size-5" />
            </>
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Solid Full-Width Apple Glass Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 border-b border-border/30 transition-colors">
        <nav className="container">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <div className="shrink-0">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                aria-label="Home"
                className="flex items-center w-fit cursor-pointer"
              >
                <img
                  className="h-9 sm:h-10 lg:h-16 dark:hidden transition-all"
                  src="/dark_logo.svg"
                  alt="Willy Permana Logo"
                />
                <img
                  className="h-9 sm:h-10 lg:h-16 hidden dark:block transition-all"
                  src="/light_logo.svg"
                  alt="Willy Permana Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation with Liquid Sliding Indicator */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <LiquidTabs
                tabs={navLinks}
                activeTab={activeSection}
                onChangeTab={(id) => handleNavClick(null, id)}
                className="bg-secondary/5! backdrop-blur-xs! p-1 border border-border/40"
              />
            </div>

            {/* Actions: Theme Toggle, Mobile Toggle & Download CV */}
            <div className="flex items-center justify-end gap-2.5 shrink-0">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="group"
                onClick={handleToggleTheme}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <Sun className="size-5 transition-transform duration-200" />
                ) : (
                  <MoonStar className="size-5 transition-transform duration-200" />
                )}
              </Button>

              {/* Mobile Menu Toggle Button */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <Menu className="size-6" />
              </Button>

              {/* Download CV (Desktop with Vibrant Loading Spinner) */}
              <Button
                size="md"
                onClick={handleDownloadCV}
                className={`hidden lg:flex gap-2 shadow-md transition-all duration-300 ${
                  isDownloadingCV ? "pointer-events-none cursor-wait" : ""
                } ${
                  downloadSuccess ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold" : ""
                }`}
              >
                {isDownloadingCV ? (
                  <>
                    <span className="font-semibold">Preparing...</span>
                    <Loader2 className="size-4 animate-spin text-primary" />
                  </>
                ) : downloadSuccess ? (
                  <>
                    <span>Downloaded!</span>
                    <Check className="size-4 text-emerald-500" />
                  </>
                ) : (
                  <>
                    <span>Download CV</span>
                    <Download className="size-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Render Fullscreen Mobile Navigation directly to document.body via Portal */}
      {typeof document !== "undefined" && createPortal(mobileMenuOverlay, document.body)}
    </>
  );
}

export default Navbar;
