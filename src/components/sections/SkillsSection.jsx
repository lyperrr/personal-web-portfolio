import React, { useState } from "react";
import { Title, Text, Card, CardContent, SectionHeader, LiquidTabs } from "@/components/ui";
import skillsData from "@/data/skills.json";
import {
  Code,
  Atom,
  FileCode,
  Palette,
  Layout,
  Layers,
  Server,
  Cpu,
  Database,
  HardDrive,
  GitBranch,
  Zap,
  Figma,
  Box,
} from "lucide-react";

// Lucide Icon mapping for fallback when image logo is not specified
const ICON_MAP = {
  Atom,
  Code,
  FileCode,
  Palette,
  Layout,
  Layers,
  Server,
  Cpu,
  Database,
  HardDrive,
  GitBranch,
  Zap,
  Figma,
  Box,
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const { sectionNumber, badge, description, categories, skills } = skillsData;

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getLevelBadgeVariant = (level) => {
    switch (level?.toLowerCase()) {
      case "advanced":
      case "expert":
        return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 backdrop-blur-md";
      case "intermediate":
        return "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30 backdrop-blur-md";
      default:
        return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30 backdrop-blur-md";
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative">
        {/* Section Header */}
        <SectionHeader
          number={sectionNumber}
          title={badge}
          description={description}
        />

        {/* Liquid Glass Category Filter Tabs with Sliding Active Pill */}
        <LiquidTabs
          tabs={categories}
          activeTab={activeCategory}
          onChangeTab={setActiveCategory}
        />

        {/* Skills Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconName] || Code;

            return (
              <Card
                key={skill.id}
                className="group relative rounded-3xl glass-card transition-all duration-300 hover:shadow-2xl hover:border-primary/50 overflow-hidden"
              >
                {/* Top Glossy Specular Highlight */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 dark:via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Bottom Glossy Specular Highlight */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-l from-transparent via-white/60 dark:via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Skill Card Header: Logo slot & Level badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Dedicated Logo / Icon Container */}
                      <div className="size-14 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="size-full object-contain"
                          />
                        ) : (
                          <IconComponent className="size-7 text-primary group-hover:rotate-6 transition-transform duration-300" />
                        )}
                      </div>

                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelBadgeVariant(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <Title level={3} className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {skill.name}
                    </Title>

                    {/* Category Tag */}
                    <Text variant="muted" className="text-xs font-medium mb-3">
                      {skill.category}
                    </Text>

                    {/* Short Description */}
                    <Text variant="muted" className="text-xs leading-relaxed line-clamp-2 mb-4">
                      {skill.description}
                    </Text>
                  </div>

                  {/* Silky Liquid Glass Skill Meter */}
                  <div className="pt-3.5 border-t border-white/15 dark:border-white/10">
                    <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
                      <span>Proficiency</span>
                      <span className="text-primary font-bold">{skill.percentage}%</span>
                    </div>

                    {/* Outer Crystal Glass Tube Trough */}
                    <div className="h-3 w-full rounded-full bg-black/15 dark:bg-white/5 border border-white/40 dark:border-white/15 p-0.5 backdrop-blur-xl shadow-inner relative overflow-hidden">
                      {/* Silky Glowing Liquid Fill Capsule */}
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-white/40 via-white/70 to-white dark:from-white/20 dark:via-white/50 dark:to-white/90 backdrop-blur-2xl shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {/* Top Edge Specular Reflection Line */}
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/80" />

                        {/* Smooth Continuous Flowing Liquid Shimmer */}
                        <div className="absolute inset-0 animate-liquid-flow pointer-events-none" />

                        {/* Silky Fluid Meniscus Edge Glow */}
                        <div className="absolute right-0 top-0 bottom-0 w-2.5 rounded-full bg-white/90 blur-[0.5px]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
