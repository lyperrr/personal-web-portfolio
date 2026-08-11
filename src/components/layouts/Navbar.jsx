import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "/logo.svg";
import { Button, LiquidTabs } from "@/components/ui";
import { Menu, X, Download, Sun, MoonStar } from "lucide-react";
import { toggleTheme } from "@/main";

function Navbar({ activeSection = "home", scrollToSection }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const mobileMenuOverlay = (
    <div
      className={`lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-[9999] w-full min-w-full h-full min-h-screen backdrop-blur-2xl bg-background/85 flex flex-col justify-between p-6 sm:p-10 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Top Right Close Button */}
      <div className="flex items-center justify-end pt-2">
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer rounded-full size-12 shadow-sm transition-transform"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close Mobile Menu"
        >
          <X className="size-7" />
        </Button>
      </div>

      {/* Pure Navigation Links Centered using Button asChild */}
      <div className="flex-1 flex flex-col justify-center items-center my-auto py-6">
        <ul className="flex flex-col items-center gap-4 w-full max-w-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="w-full text-center">
                <Button
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="xl"
                  className={`w-full text-xl font-bold justify-center transition-all duration-300 ${
                    isActive ? "shadow-xl scale-105" : "text-muted-foreground hover:text-foreground"
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

      {/* Bottom Download CV Action Button */}
      <div className="w-full max-w-xs mx-auto pb-4">
        <Button size="xl" className="w-full cursor-pointer gap-2 rounded-full text-base shadow-lg">
          Download CV
          <Download className="size-5" />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Solid Full-Width Apple Glass Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 transition-colors">
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
                  className="h-9 sm:h-10 dark:invert transition-all"
                  src={Logo}
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
                className="cursor-pointer group rounded-full"
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
                className="lg:hidden cursor-pointer rounded-full"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <Menu className="size-6" />
              </Button>

              {/* Download CV (Desktop) */}
              <Button size="md" className="cursor-pointer hidden lg:flex gap-2 rounded-full shadow-md transition-transform">
                Download CV
                <Download className="size-4" />
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
