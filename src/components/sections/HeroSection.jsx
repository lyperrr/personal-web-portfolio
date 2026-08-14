import React from "react";
import { Button, Text, Title, Badge, Tooltip, TooltipTrigger, TooltipContent, FadeIn } from "@/components/ui";
import heroData from "@/data/hero.json";
import { Mail, ArrowRight, Mouse, Github, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

// Social icon mapping
const SOCIAL_ICONS = {
  whatsapp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-6"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
    </svg>
  ),
  github: <Github className="size-6" />,
  instagram: <Instagram className="size-6" />,
};

const HeroSection = () => {
  const { t } = useTranslation(["hero"]);
  const { socialMedia } = heroData;

  const greeting = t("greeting");
  const name = t("name");
  const role = t("role");
  const bio = t("bio");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Apple Liquid Glass Badge */}
            <FadeIn direction="down" delay={0.1}>
              <Badge variant="ghost" className="text-sm sm:text-base -rotate-3 font-medium px-5 py-2 shadow-md backdrop-blur-xl backdrop-saturate-150">
                {greeting}
              </Badge>
            </FadeIn>

            {/* Glowing Name Title */}
            <FadeIn direction="up" delay={0.2} duration={0.6}>
              <Title
                level={1}
                className="mb-6 uppercase text-[2.5rem] -rotate-3 sm:text-6xl md:text-7xl xl:text-8xl font-black px-4 tracking-tight text-liquid drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)] dark:drop-shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
              >
                {name}
              </Title>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Text variant="secondary" className="text-xl sm:text-2xl font-bold mb-4 tracking-wide text-foreground/90">
                {role}
              </Text>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <Text variant="muted" className="sm:w-4/5 text-base sm:text-lg z-10 leading-relaxed mb-10 mx-auto">
                {bio}
              </Text>
            </FadeIn>

            {/* Liquid Glass CTA Pill Buttons */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 z-10 justify-center">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="xl"
                  className="shadow-lg hover:shadow-primary/25"
                >
                  <Mail className="size-5" />
                  {t("buttons.primary")}
                </Button>

                <Button
                  onClick={() => scrollToSection("portfolio")}
                  size="xl"
                  variant="ghost"
                  className="group shadow-md"
                >
                  {t("buttons.secondary")}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200 size-5" />
                </Button>
              </div>
            </FadeIn>

            {/* FLOATING APPLE LIQUID GLASS SOCIAL MEDIA ACTION BAR (Desktop Only) */}
            <FadeIn direction="right" delay={0.6} className="hidden sm:block sm:fixed right-8 top-1/2 -translate-y-1/2 z-30">
              <div className="flex flex-col items-center gap-2 p-2 rounded-full glass-panel glass-specular-corner shadow-xl border border-white/40 dark:border-white/15 select-none backdrop-blur-2xl bg-white/40 dark:bg-white/5">
                {socialMedia.map((item) => {
                  const icon = SOCIAL_ICONS[item.id] || <Github className="size-6" />;
                  const label = item.name || item.id.charAt(0).toUpperCase() + item.id.slice(1);

                  return (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="ghost"
                          size="icon-lg"
                          className="hover:scale-110 active:scale-115"
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                          >
                            {icon}
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </FadeIn>

            {/* Mouse Scroll Indicator */}
            <FadeIn direction="up" delay={0.7}>
              <button
                onClick={() => scrollToSection("about")}
                aria-label="Scroll to About Section"
                className="cursor-pointer focus:outline-none mt-14 p-3.5 rounded-full transition-all hover:scale-110 shadow-md"
              >
                <Mouse className="animate-bounce size-7 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
