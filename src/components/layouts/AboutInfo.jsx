import React from "react";
import Profile from "@/assets/img/photo-profile.png";
import CvResume from "@/assets/img/CV_Willy_Permana.png";
import { Title, Text, SectionHeader, FadeIn } from "@/components/ui";
import { useTranslation } from "react-i18next";

const AboutInfo = () => {
  const { t } = useTranslation(["about"]);
  const paragraphs = t("paragraphs", { returnObjects: true }) || [];

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-12 sm:gap-16">
          {/* Photo Profile Frame with Tilted Liquid Glass CV Emergence Hover Effect (LG Desktop Only) */}
          <FadeIn direction="left" duration={0.6} className="flex-shrink-0 mx-auto lg:m-0">
            <div className="relative group cursor-pointer select-none">
              {/* Emerging CV Image Preview (High-Impact Shift Upwards & Left - Desktop LG+ Only) */}
              <div className="hidden lg:flex absolute top-0 left-0 w-full h-full z-0 items-center justify-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-90 translate-x-0 translate-y-0 rotate-0 lg:group-hover:opacity-100 lg:group-hover:scale-110 lg:group-hover:-translate-x-36 xl:group-hover:-translate-x-44 lg:group-hover:-translate-y-20 xl:group-hover:-translate-y-24 lg:group-hover:-rotate-15">
                <div className="w-72 xl:w-80 rounded-2xl glass-panel glass-specular-corner p-2 shadow-[0_30px_70px_rgba(0,0,0,0.55)] border border-white/70 dark:border-white/35 backdrop-blur-2xl bg-white/85 dark:bg-white/15 overflow-hidden">
                  <img
                    src={CvResume}
                    alt="Willy Permana CV Resume Preview"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-xl object-cover shadow-xl"
                  />
                  <div className="p-2 text-center">
                    <span className="text-xs font-bold tracking-wider uppercase text-primary text-liquid">
                      CV Resume Preview
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Profile Photo Glass Frame */}
              <div className="relative z-10 border border-white/40 dark:border-white/20 inline-block rounded-3xl glass-panel glass-specular-corner p-2 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:group-hover:rotate-2 lg:group-hover:scale-[1.02] lg:group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
                {/* Inner Image */}
                <img
                  src={Profile}
                  alt="Foto Profil Willy Permana"
                  loading="lazy"
                  decoding="async"
                  className="size-80 sm:size-96 object-cover rounded-2xl overflow-hidden transition-transform duration-500"
                />

                {/* Kotak Dekoratif Kanan Atas Liquid Glass */}
                <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 z-20 pointer-events-none">
                  <div className="size-14 sm:size-16 rounded-2xl glass-panel glass-specular-corner border border-white/60 dark:border-white/25 shadow-xl relative backdrop-blur-2xl">
                    <div className="size-9 sm:size-10 rounded-xl glass-card border border-white/50 dark:border-white/20 absolute left-1/2 -translate-x-1/2 -bottom-5 -translate-y-1/2 shadow-md"></div>
                  </div>
                </div>

                {/* Kotak Dekoratif Kiri Bawah Liquid Glass */}
                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 pointer-events-none -rotate-90">
                  <div className="size-12 sm:size-14 rounded-2xl glass-panel glass-specular-corner border border-white/60 dark:border-white/25 shadow-xl relative backdrop-blur-2xl">
                    <div className="size-7 sm:size-8 rounded-lg glass-card border border-white/50 dark:border-white/20 absolute left-1/2 -translate-x-1/2 -bottom-4 -translate-y-1/2 shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* About Me Description with Left-Aligned SectionHeader */}
          <FadeIn direction="right" duration={0.6} className="lg:w-1/2 space-y-4">
            <div className="w-full">
              <SectionHeader
                align="left"
                number={t("sectionNumber", "01")}
                title={t("badge")}
                className="mb-2"
              />

              <Title level={2} className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                {t("title")}
              </Title>

              <div className="space-y-4 text-justify leading-relaxed">
                {Array.isArray(paragraphs) && paragraphs.map((textItem, index) => (
                  <Text key={index} variant="muted" className="text-sm sm:text-base leading-relaxed">
                    {textItem}
                  </Text>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
