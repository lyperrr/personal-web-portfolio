import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Title, Text, Badge, Card, CardContent, SectionHeader, Button, FadeIn } from "@/components/ui";
import educationData from "@/data/education.json";
import { useTranslation } from "react-i18next";

// Import real school photos from src/assets/img/school
import sdn7KesimanImg from "@/assets/img/school/sdn_7_kesiman.jpg";
import sdn3BenoaImg from "@/assets/img/school/sdn_3_benoa.jpg";
import smpn5KutaSelatanImg from "@/assets/img/school/smpn_5_kutaselatan.jpg";
import sman2KutaSelatanImg from "@/assets/img/school/sman_2_kutaselatan.jpg";
import poltekbaliImg from "@/assets/img/school/poltekbali.jpg";

import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  ArrowUpDown,
  School,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

// Local image lookup map
const LOCAL_SCHOOL_IMAGES = {
  "/src/assets/img/school/sdn_7_kesiman.jpg": sdn7KesimanImg,
  "/src/assets/img/school/sdn_3_benoa.jpg": sdn3BenoaImg,
  "/src/assets/img/school/smpn_5_kutaselatan.jpg": smpn5KutaSelatanImg,
  "/src/assets/img/school/sman_2_kutaselatan.jpg": sman2KutaSelatanImg,
  "/src/assets/img/school/poltekbali.jpg": poltekbaliImg,
};

// Image map by ID for fallback matching
const SCHOOL_IMAGE_BY_ID = {
  1: sdn7KesimanImg,
  2: sdn3BenoaImg,
  3: smpn5KutaSelatanImg,
  4: sman2KutaSelatanImg,
  5: poltekbaliImg,
};

// Icon mapping per level
const LEVEL_ICONS = {
  "Sekolah Dasar": <School className="size-5 text-primary" />,
  "Elementary School": <School className="size-5 text-primary" />,
  "Sekolah Menengah Pertama": <BookOpen className="size-5 text-primary" />,
  "Junior High School": <BookOpen className="size-5 text-primary" />,
  "Sekolah Menengah Akhir": <Award className="size-5 text-primary" />,
  "Senior High School": <Award className="size-5 text-primary" />,
  "Perguruan Tinggi": <GraduationCap className="size-6 text-emerald-500" />,
  "Higher Education": <GraduationCap className="size-6 text-emerald-500" />,
};

/**
 * Premium Apple Liquid Glass Education Timeline with Alternating Left/Right Cards & Local School Hover Preview.
 */
export function EducationTimeline({
  data = educationData,
  className = "",
}) {
  const { t } = useTranslation(["education"]);
  const [isReverse, setIsReverse] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sectionNumber = t("sectionNumber", data.sectionNumber || "02");
  const badge = t("badge", data.badge);
  const description = t("description", data.description);
  const translatedItems = t("items", { returnObjects: true });
  
  const rawList = Array.isArray(translatedItems) && translatedItems.length > 0
    ? translatedItems
    : data.educationList || [];

  const educationList = rawList.map((item, idx) => ({
    ...item,
    image: item.image || SCHOOL_IMAGE_BY_ID[item.id] || SCHOOL_IMAGE_BY_ID[idx + 1],
    isCurrent: item.id === 5 || item.note === "Sedang Berjalan" || item.note === "In Progress",
  }));

  const items = isReverse ? [...educationList].reverse() : educationList;

  const resolveImage = (imgPath) => {
    return LOCAL_SCHOOL_IMAGES[imgPath] || imgPath;
  };

  const handleMouseEnter = (item, e) => {
    if (item.image) {
      setHoveredItem(item);
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Enlarged Cursor-Follow Floating Preview Card Overlay
  const floatingPreviewPortal = hoveredItem && (
    <div
      className="hidden md:block fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out select-none"
      style={{
        left: `${mousePos.x + 24}px`,
        top: `${mousePos.y + 24}px`,
      }}
    >
      <div className="w-80 h-52 sm:w-96 sm:h-60 rounded-3xl glass-card p-2 shadow-2xl border border-white/60 dark:border-white/25 overflow-hidden bg-background/90 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <img
            src={resolveImage(hoveredItem.image)}
            alt={hoveredItem.institution}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white text-sm font-bold text-center truncate">
            {hoveredItem.institution}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className={`py-20 border-t border-border/30 relative overflow-hidden ${className}`}>
      <div className="container space-y-12 relative">
        {/* Section Header */}
        <SectionHeader
          number={sectionNumber}
          title={badge}
          description={description}
        />

        {/* Ordering Toggle Pill */}
        <div className="flex justify-end max-w-5xl mx-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsReverse(!isReverse)}
            className="gap-2 shadow-sm transition-transform"
          >
            <ArrowUpDown className="size-3.5" />
            {isReverse ? t("orderNewest", "Urutan: Terbaru Dulu") : t("orderOldest", "Urutan: Dari Awal (SD)")}
          </Button>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto relative px-2 sm:px-4 pt-4">
          {/* Desktop Central Connecting Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/70 via-primary/40 to-border/20 rounded-full z-0" />

          {/* Mobile Left Connecting Line */}
          <div className="md:hidden absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/70 via-primary/40 to-border/20 rounded-full z-0" />

          {/* Timeline Items List */}
          <ol className="relative space-y-12 md:space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = LEVEL_ICONS[item.level] || <School className="size-5 text-primary" />;

              return (
                <li
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Mobile Stepper Node */}
                  <div
                    className={`md:hidden absolute left-0 top-6 size-12 rounded-full glass-panel flex items-center justify-center border shadow-lg backdrop-blur-xl z-20 transition-transform ${
                      item.isCurrent
                        ? "border-emerald-500/70 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : "border-white/40 dark:border-white/20"
                    }`}
                  >
                    {item.isCurrent ? (
                      <Sparkles className="size-5 text-emerald-500 animate-pulse" />
                    ) : (
                      IconComponent
                    )}
                  </div>

                  {/* Desktop Center Stepper Node */}
                  <div
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-14 rounded-full glass-panel items-center justify-center border shadow-xl backdrop-blur-2xl z-20 transition-all duration-300 ${
                      item.isCurrent
                        ? "border-emerald-500/80 shadow-[0_0_25px_rgba(16,185,129,0.45)] bg-emerald-500/10"
                        : "border-white/40 dark:border-white/20 hover:border-primary/50"
                    }`}
                  >
                    {item.isCurrent ? (
                      <Sparkles className="size-6 text-emerald-500 animate-pulse" />
                    ) : (
                      IconComponent
                    )}
                  </div>

                  {/* Card Column Wrapper (Alternating Left & Right) */}
                  <FadeIn
                    direction={isEven ? "left" : "right"}
                    delay={index * 0.1}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}
                  >
                    <Card
                      onMouseEnter={(e) => handleMouseEnter(item, e)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="shadow-xl hover:border-primary/40 cursor-pointer"
                    >
                      <CardContent className="p-6 sm:p-8 space-y-4">
                        {/* Meta Badge Row */}
                        <div className={`flex flex-wrap items-center gap-2 border-b border-white/15 dark:border-white/10 pb-4 ${isEven ? "md:justify-end" : "justify-start"}`}>
                          <Badge variant="ghost" className="px-3.5 py-1">
                            {item.level}
                          </Badge>

                          {item.isCurrent && (
                            <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 gap-1.5">
                              <CheckCircle2 className="size-3.5" />
                              {t("inProgress", "Sedang Berjalan")}
                            </Badge>
                          )}

                          {item.note && !item.isCurrent && (
                            <Badge variant="outline" className="px-3 py-1 text-muted-foreground">
                              {item.note}
                            </Badge>
                          )}

                          <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-white/20 dark:bg-white/10 px-3.5 py-1 rounded-full border border-white/20 dark:border-white/10">
                            <Calendar className="size-3.5 text-primary" />
                            <span>{item.year}</span>
                          </div>
                        </div>

                        {/* Institution Name */}
                        <div>
                          <Title level={3} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {item.institution}
                          </Title>

                          {item.degree && (
                            <Text variant="secondary" className="text-sm sm:text-base font-semibold mt-1 text-foreground/80">
                              {item.degree}
                            </Text>
                          )}
                        </div>

                        {/* Description */}
                        {item.description && (
                          <Text variant="muted" className="text-xs sm:text-sm leading-relaxed text-muted-foreground pt-1">
                            {item.description}
                          </Text>
                        )}
                      </CardContent>
                    </Card>
                  </FadeIn>

                  {/* Desktop Alternating Column Balance Spacer */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Render Floating Image Preview Portal */}
      {typeof document !== "undefined" && createPortal(floatingPreviewPortal, document.body)}
    </section>
  );
}

export default EducationTimeline;
