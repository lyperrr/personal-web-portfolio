import React from "react";
import Logo from "/logo.svg";
import { Github, Instagram, ArrowUp, Mail, MapPin, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui";

function Footer({ scrollToSection }) {
  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const socialMedia = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-4.5"
          fill="currentColor"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
        </svg>
      ),
    },
    { id: "github", label: "GitHub", url: "https://github.com", icon: <Github className="size-4.5" /> },
    { id: "instagram", label: "Instagram", url: "https://instagram.com", icon: <Instagram className="size-4.5" /> },
  ];

  const handleNavClick = (e, sectionId) => {
    if (scrollToSection) {
      scrollToSection(e, sectionId);
    }
  };

  return (
    <footer className="relative mt-24 pb-12 overflow-hidden">
      <div className="container">
        {/* Floating Apple Liquid Glass Master Footer Card Container */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] glass-panel glass-specular-corner shadow-2xl border border-white/50 dark:border-white/18 backdrop-blur-3xl bg-white/40 dark:bg-white/10 p-8 sm:p-12 overflow-hidden space-y-10">
          
          {/* Top Brand Header Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/20 dark:border-white/10 relative z-10">
            <div className="space-y-2.5 max-w-md">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <img
                  className="h-9 dark:invert transition-transform duration-300 group-hover:scale-105"
                  src={Logo}
                  alt="Willy Permana Logo"
                />
                <span className="text-xl font-extrabold tracking-tight text-foreground">
                  Willy Permana
                </span>
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Crafting high-performance web applications, interactive user interfaces, and modern digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Active Availability Status Pill */}
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel glass-specular-corner-subtle text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-xs">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                </span>
                Available for New Opportunities
              </div>

              {/* Scroll to Top Button */}
              <Button
                variant="outline"
                size="icon-lg"
                onClick={(e) => handleNavClick(e, "home")}
                className="rounded-full cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-white/50 dark:border-white/20 shrink-0"
                aria-label="Back to Top"
              >
                <ArrowUp className="size-5" />
              </Button>
            </div>
          </div>

          {/* Middle Information Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
            {/* Column 1: Quick Navigation */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Sparkles className="size-3.5 text-primary" /> Navigation
              </h4>
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors inline-block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Mail className="size-3.5 text-primary" /> Contact Details
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5 font-medium">
                  <Mail className="size-4 text-foreground/70" />
                  <a href="mailto:willypermana@example.com" className="hover:text-foreground transition-colors">
                    willypermana@example.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <MapPin className="size-4 text-foreground/70" />
                  <span>Indonesia</span>
                </li>
                <li className="text-xs text-muted-foreground/80 pt-1">
                  Open for freelance & full-time opportunities.
                </li>
              </ul>
            </div>

            {/* Column 3: Social Connections */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                Social Connect
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {socialMedia.map((item) => (
                  <Button
                    key={item.id}
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full shadow-xs hover:scale-105 transition-all border-white/40 dark:border-white/20 gap-2"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-8 border-t border-white/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground relative z-10">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="hover:underline font-bold text-foreground"
              >
                Willy Permana
              </a>
              . All rights reserved.
            </p>

            <p className="flex items-center gap-1.5 font-medium">
              <span>Crafted with</span>
              <Heart className="size-3.5 text-rose-500 fill-rose-500 inline-block" />
              <span className="font-bold text-foreground">Passion & Precision</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
