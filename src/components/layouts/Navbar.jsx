import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cvPdf from "@/assets/CV_Willy_Permana.pdf";
import { Button, LiquidTabs, LanguageToggle, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui";
import { Menu, X, Download, Sun, MoonStar, Loader2, Check } from "lucide-react";
import { toggleTheme } from "@/main";
import { useTranslation } from "react-i18next";

function Navbar({ activeSection = "home", scrollToSection }) {
  const { t } = useTranslation(["nav"]);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadingCV, setIsDownloadingCV] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navLinks = [
    { name: t("home"), id: "home" },
    { name: t("about"), id: "about" },
    { name: t("education"), id: "education" },
    { name: t("skills"), id: "skills" },
    { name: t("portfolio"), id: "portfolio" },
    { name: t("contact"), id: "contact" },
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
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  const handleDownloadCV = () => {
    if (isDownloadingCV) return;
    setIsDownloadingCV(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cvPdf;
      link.download = "CV_Willy_Permana.pdf";
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
      className={`lg:hidden fixed inset-0 z-[99999] border w-full h-full min-h-[100dvh] backdrop-blur-3xl bg-background/90 dark:bg-background/95 flex flex-col justify-between container transition-all duration-300 ease-in-out overflow-y-auto py-4 ${isMobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* Top Close Button Row */}
      <div className="flex items-center justify-between">
        <LanguageToggle />
        <Button
          variant="outline"
          size="icon"
          asChild
          className="hamburger size-11 sm:size-12 rounded-full cursor-pointer p-0 shrink-0"
        >
          <label aria-label="Close Mobile Menu">
            <input
              type="checkbox"
              checked={isMobileMenuOpen}
              onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <svg viewBox="0 0 32 32" className="size-6 sm:size-6.5 text-foreground">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
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
                  className={`w-full text-xl font-bold justify-center py-4 h-auto border border-white/30 dark:border-white/15 backdrop-blur-2xl transition-all duration-300 ${isActive ? "shadow-xl scale-105" : ""
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
      <div className="w-full max-w-xs sm:max-w-sm mx-auto">
        <Button
          variant="outline"
          size="xl"
          onClick={handleDownloadCV}
          className={`w-full text-base shadow-xl gap-2.5 transition-all duration-300 ${isDownloadingCV ? "pointer-events-none cursor-wait" : ""
            } ${downloadSuccess ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 font-bold" : ""
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
      <header className="fixed top-0 left-0 w-full z-40 transition-colors">
        <nav className="container">
          <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between py-2.5 lg:py-3 gap-4">
            {/* Logo */}
            <div className="shrink-0 justify-self-start">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                aria-label="Home"
                className="flex items-center w-fit cursor-pointer"
              >
                <img
                  className="h-9 sm:h-10 lg:h-11 dark:hidden transition-all"
                  src="/dark_logo.svg"
                  alt="Willy Permana Logo"
                />
                <img
                  className="h-9 sm:h-10 lg:h-11 hidden dark:block transition-all"
                  src="/light_logo.svg"
                  alt="Willy Permana Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation with Liquid Sliding Indicator */}
            <div className="hidden lg:flex items-center justify-center justify-self-center">
              <LiquidTabs
                tabs={navLinks}
                activeTab={activeSection}
                onChangeTab={(id) => handleNavClick(null, id)}
                className="bg-secondary/5! backdrop-blur-xs! p-1 border border-border/40"
              />
            </div>

            {/* Actions: Theme Toggle, Language Toggle, Mobile Toggle & Download CV */}
            <div className="flex items-center justify-end justify-self-end gap-2.5 shrink-0">
              {/* Language Toggle (Desktop Header Only) */}
              <LanguageToggle className="hidden lg:flex" />

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="group size-10 rounded-full"
                onClick={handleToggleTheme}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <Sun className="size-5 transition-transform duration-200" />
                ) : (
                  <MoonStar className="size-5 transition-transform duration-200" />
                )}
              </Button>

              {/* Animated Hamburger Mobile Menu Toggle Button */}
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hamburger lg:hidden size-10 rounded-full cursor-pointer p-0 shrink-0"
              >
                <label aria-label="Toggle Mobile Menu">
                  <input
                    type="checkbox"
                    checked={isMobileMenuOpen}
                    onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                  <svg viewBox="0 0 32 32" className="size-6 text-foreground">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>
              </Button>

              {/* Download CV (Desktop Icon Button with Tooltip) */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDownloadCV}
                    className={`hidden lg:flex size-10 rounded-full shadow-sm transition-all duration-300 ${isDownloadingCV ? "pointer-events-none cursor-wait" : ""
                      } ${downloadSuccess ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-600 dark:text-emerald-400" : ""
                      }`}
                    aria-label="Download CV"
                  >
                    {isDownloadingCV ? (
                      <Loader2 className="size-5 animate-spin text-primary" />
                    ) : downloadSuccess ? (
                      <Check className="size-5 text-emerald-500" />
                    ) : (
                      <Download className="size-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {t("downloadCv") || "Download CV"}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </nav>
      </header>

      {/* Render Mobile Menu Overlay inside Portal */}
      {createPortal(mobileMenuOverlay, document.body)}
    </>
  );
}

export default Navbar;
