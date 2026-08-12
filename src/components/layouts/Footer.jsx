import React from "react";
import { Github, Instagram, Mail, MapPin, Sparkles, Heart } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import BackToTop from "@/components/ui/back-to-top.jsx";
import { useTranslation } from "react-i18next";

function Footer({ scrollToSection }) {
  const { t } = useTranslation(["footer", "nav"]);

  const navLinks = [
    { label: t("nav:home"), id: "home" },
    { label: t("nav:about"), id: "about" },
    { label: t("nav:education"), id: "education" },
    { label: t("nav:skills"), id: "skills" },
    { label: t("nav:portfolio"), id: "portfolio" },
    { label: t("nav:contact"), id: "contact" },
  ];

  const socialMedia = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/6281246329192?text=Halo%20Willy%2C%20saya%20tertarik%20untuk%20berdiskusi!",
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
    { id: "github", label: "GitHub", url: "https://github.com/lyperrr", icon: <Github className="size-4.5" /> },
    { id: "instagram", label: "Instagram", url: "https://instagram.com/willyprmnaa/", icon: <Instagram className="size-4.5" /> },
  ];

  const handleNavClick = (e, sectionId) => {
    if (scrollToSection) {
      scrollToSection(e, sectionId);
    }
  };

  return (
    <footer className="relative mt-24 pb-12">
      <div className="container">
        {/* Apple Liquid Glass Master Footer Card */}
        <Card className="">
          <CardContent className="p-6 sm:p-12 space-y-10">
            {/* Top Brand Header Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/20 dark:border-white/10 relative z-10">
              <div className="space-y-2.5 max-w-md">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <img
                    className="h-9 dark:hidden transition-transform duration-300 group-hover:scale-105"
                    src="/dark_logo.svg"
                    alt="Willy Permana Logo"
                  />
                  <img
                    className="h-9 hidden dark:block transition-transform duration-300 group-hover:scale-105"
                    src="/light_logo.svg"
                    alt="Willy Permana Logo"
                  />
                  <span className="text-xl font-extrabold tracking-tight text-foreground">
                    Willy Permana
                  </span>
                </a>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("tagline")}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {/* Active Availability Status Pill */}
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel glass-specular-corner-subtle text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-xs">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                  </span>
                  {t("availabilityPill")}
                </div>

                {/* Desktop-Only Back to Top Component with Tooltip */}
                <BackToTop variant="desktop-footer" scrollToSection={scrollToSection} />
              </div>
            </div>

            {/* Middle Information Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {/* Column 1: Quick Navigation */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Sparkles className="size-3.5 text-primary" /> {t("navigationTitle")}
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
                  <Mail className="size-3.5 text-primary" /> {t("contactTitle")}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2.5 font-medium">
                    <Mail className="size-4 text-foreground/70" />
                    <a href="mailto:kadekwilly006@gmail.com" className="hover:text-foreground transition-colors">
                      kadekwilly006@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 font-medium">
                    <MapPin className="size-4 text-foreground/70" />
                    <span>Nusadua, Bali, Indonesia</span>
                  </li>
                  <li className="text-xs text-muted-foreground/80 pt-1">
                    {t("openForOpportunities")}
                  </li>
                </ul>
              </div>

              {/* Column 3: Social Connections */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  {t("socialTitle")}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {socialMedia.map((item) => (
                    <Button
                      key={item.id}
                      asChild
                      variant="outline"
                      size="sm"
                      className="shadow-xs hover:scale-105 transition-all border-white/40 dark:border-white/20 gap-2"
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
                {t("copyright", { year: new Date().getFullYear() })}
              </p>

              <p className="flex items-center gap-1.5 font-medium">
                <span>{t("craftedWith")}</span>
                <Heart className="size-3.5 text-rose-500 fill-rose-500 inline-block" />
                <span className="font-bold text-foreground">Passion & Precision</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Back To Top Button on Scroll for Mobile */}
      <BackToTop variant="floating" scrollToSection={scrollToSection} />
    </footer>
  );
}

export default Footer;
