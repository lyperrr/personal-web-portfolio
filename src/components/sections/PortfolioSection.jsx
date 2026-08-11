import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Title, Text, Badge, Button, Card, CardContent, SectionHeader, LiquidTabs } from "@/components/ui";
import portfolioData from "@/data/portfolio.json";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const { sectionNumber, badge, description, categories, projects } = portfolioData;

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 border-t border-border/30 relative overflow-hidden">
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

        {/* Projects Grid using Apple Liquid Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-4">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group rounded-3xl transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full relative">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Layers className="size-5 text-primary" />
                      <Badge variant="ghost" className="text-xs font-semibold rounded-full px-3 py-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <Link to={`/portfolio/${project.slug}`} className="block group/title">
                    <Title level={3} className="text-2xl font-bold mb-3 group-hover/title:text-primary transition-colors line-clamp-2 cursor-pointer">
                      {project.title}
                    </Title>
                  </Link>

                  <Text variant="muted" className="text-sm leading-relaxed mb-6">
                    {project.description}
                  </Text>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1 text-xs bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full text-foreground font-medium border border-white/20 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 pt-5 border-t border-white/15 dark:border-white/10">
                  <Button
                    asChild
                    size="md"
                    className="flex-1 cursor-pointer gap-1.5 rounded-full shadow-md text-xs font-bold"
                  >
                    <Link to={`/portfolio/${project.slug}`}>
                      <span>Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="cursor-pointer rounded-full"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="cursor-pointer rounded-full"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="size-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
