import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Badge,
  Card,
  CardContent,
  Title,
  Text,
  FadeIn,
} from "@/components/ui";
import portfolioData from "@/data/portfolio.json";
import {
  Home,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Server,
  Zap,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Globe,
  Terminal,
  ShieldCheck,
} from "lucide-react";

export function PortfolioDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { projects } = portfolioData;

  // Find project by slug
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Scroll to top on page mount or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Helper to split comma-separated technology strings into individual Apple Liquid Glass Badges
  const renderTechBadges = (techString) => {
    if (!techString) return null;
    const items = techString.split(",").map((s) => s.trim());
    return (
      <div className="flex flex-wrap gap-2 pt-1.5">
        {items.map((item, idx) => (
          <Badge
            key={idx}
            variant="outline"
            className="text-xs px-3 py-1 bg-white/40 dark:bg-white/10 border-white/30 dark:border-white/15 backdrop-blur-md shadow-2xs text-foreground hover:border-primary/40"
          >
            {item}
          </Badge>
        ))}
      </div>
    );
  };

  // Handle 404 / project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center py-24 px-4 relative z-10">
        <Card className="max-w-md w-full p-8 text-center glass-panel shadow-2xl space-y-6">
          <div className="size-16 rounded-full glass-panel flex items-center justify-center mx-auto text-primary">
            <Layers className="size-8 animate-pulse" />
          </div>
          <Title level={2} className="text-2xl font-bold">
            Project Not Found
          </Title>
          <Text variant="muted" className="text-sm">
            The project you are looking for doesn't exist or may have been moved.
          </Text>
          <Button
            onClick={() => navigate("/#portfolio")}
            className="w-full gap-2 shadow-md"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Button>
        </Card>
      </div>
    );
  }

  // Next and Previous project for bottom pagination
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="portfolio-detail-page py-24 sm:py-28 relative z-10 min-h-screen">
      <div className="container max-w-6xl mx-auto space-y-12 px-4 sm:px-6">
        
        {/* Apple Liquid Glass Breadcrumb Navigation */}
        <FadeIn direction="down" delay={0.1}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate("/")}>
                    <Home className="size-3.5 text-primary" />
                    <span>Home</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate("/#portfolio")}>
                    <span>Portfolio</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Quick Back Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/#portfolio")}
              className="gap-2 text-xs font-semibold border border-white/30 dark:border-white/10 glass-panel shadow-xs"
            >
              <ArrowLeft className="size-3.5" />
              Back to All Projects
            </Button>
          </div>
        </FadeIn>

        {/* Hero Banner Master Card (Apple Liquid Glass) */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <Card className="rounded-[2.5rem] sm:rounded-[3.5rem] glass-panel p-6 sm:p-12 shadow-2xl">
            <div className="space-y-8 relative z-10">
              
              {/* Top Category Badge & Featured Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Badge variant="ghost" className="text-xs px-4 py-1.5 border border-primary/30 text-primary bg-primary/10">
                    <Layers className="size-3.5" />
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs px-3 py-1 gap-1">
                      <Sparkles className="size-3.5" />
                      Featured Case Study
                    </Badge>
                  )}
                </div>

                {/* Date / Status Tag */}
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground px-3.5 py-1 rounded-full glass-panel glass-specular-corner-subtle">
                  <Calendar className="size-3.5 text-primary" />
                  <span>2025 - Present</span>
                </div>
              </div>

              {/* Project Title & Tagline */}
              <div className="space-y-4 max-w-3xl">
                <Title level={1} className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight">
                  {project.title}
                </Title>
                <Text variant="secondary" className="text-lg sm:text-xl font-medium text-foreground/80 leading-relaxed">
                  {project.tagline || project.description}
                </Text>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 shadow-lg hover:shadow-primary/30 px-6"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4.5" />
                    Visit Live Demo
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 shadow-md border-white/40 dark:border-white/20 px-6"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4.5" />
                    View GitHub Source
                  </a>
                </Button>
              </div>

              {/* Tech Stack Tags Row */}
              <div className="pt-4 border-t border-white/15 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">
                  Core Stack:
                </span>
                {project.tags.map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="px-3.5 py-1 text-xs bg-white/30 dark:bg-white/10 backdrop-blur-md text-foreground border-white/20 dark:border-white/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

            </div>
          </Card>
        </FadeIn>

        {/* Impact Metrics Grid (4 Key Highlight Stats Cards) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {project.metrics.map((metric, idx) => (
              <Card key={idx} className="p-6 text-center shadow-lg">
                <CardContent className="p-0 space-y-1">
                  <div className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Main Case Study Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Full Description & Problem / Solution (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <Card className="glass-panel p-6 sm:p-8 shadow-xl space-y-4">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2.5 text-foreground">
                  <Globe className="size-5 text-primary" /> Project Overview
                </h3>
                <Text variant="muted" className="text-sm sm:text-base leading-relaxed text-justify">
                  {project.fullDescription || project.description}
                </Text>
              </CardContent>
            </Card>

            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Statement Card */}
              <Card className="p-6 shadow-lg border-amber-500/20 bg-amber-500/5">
                <CardContent className="p-0 space-y-3">
                  <h4 className="text-base font-bold flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <ShieldCheck className="size-4.5" /> Problem Challenge
                  </h4>
                  <Text variant="muted" className="text-xs sm:text-sm leading-relaxed text-justify">
                    {project.problemStatement || "Developing a scalable, user-friendly interface that balances complex data representation with instantaneous load speed."}
                  </Text>
                </CardContent>
              </Card>

              {/* Solution Card */}
              <Card className="p-6 shadow-lg border-emerald-500/20 bg-emerald-500/5">
                <CardContent className="p-0 space-y-3">
                  <h4 className="text-base font-bold flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Zap className="size-4.5" /> Implemented Solution
                  </h4>
                  <Text variant="muted" className="text-xs sm:text-sm leading-relaxed text-justify">
                    {project.solutionOverview || "Leveraged modern React 19 architecture, optimized state caching, and responsive glassmorphic design tokens."}
                  </Text>
                </CardContent>
              </Card>
            </div>

            {/* Key Features Grid */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <Card className="glass-panel p-6 sm:p-8 shadow-xl space-y-6">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2.5 text-foreground">
                    <Sparkles className="size-5 text-primary" /> Key Features & Capabilities
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl glass-card border border-white/30 dark:border-white/10 space-y-2 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                          <span>{feature.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Challenges & Learnings */}
            {project.challengesAndLearnings && (
              <Card className="p-6 sm:p-8 shadow-xl space-y-3">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <Terminal className="size-4.5 text-primary" /> Technical Insights & Learnings
                  </h3>
                  <Text variant="muted" className="text-xs sm:text-sm leading-relaxed text-justify">
                    {project.challengesAndLearnings}
                  </Text>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Right Column: Sticky Technical Architecture Details & Metadata Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start z-20">
            
            {/* Architecture Details Card */}
            <Card className="glass-panel p-6 shadow-xl space-y-6">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-lg font-bold flex items-center gap-2 text-foreground border-b border-white/15 dark:border-white/10 pb-4">
                  <Cpu className="size-5 text-primary" /> Tech Architecture
                </h3>

                {project.architecture ? (
                  <div className="space-y-5 text-xs sm:text-sm">
                    {project.architecture.frontend && (
                      <div className="space-y-1.5">
                        <div className="font-bold text-muted-foreground uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                          <Terminal className="size-3.5 text-primary" /> Frontend Stack
                        </div>
                        {renderTechBadges(project.architecture.frontend)}
                      </div>
                    )}

                    {project.architecture.backend && (
                      <div className="space-y-1.5">
                        <div className="font-bold text-muted-foreground uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                          <Server className="size-3.5 text-primary" /> Backend & APIs
                        </div>
                        {renderTechBadges(project.architecture.backend)}
                      </div>
                    )}

                    {project.architecture.database && (
                      <div className="space-y-1.5">
                        <div className="font-bold text-muted-foreground uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                          <Layers className="size-3.5 text-primary" /> Database & Storage
                        </div>
                        {renderTechBadges(project.architecture.database)}
                      </div>
                    )}

                    {project.architecture.deployment && (
                      <div className="space-y-1.5">
                        <div className="font-bold text-muted-foreground uppercase text-[11px] tracking-wider flex items-center gap-1.5">
                          <Globe className="size-3.5 text-primary" /> Hosting & DevOps
                        </div>
                        {renderTechBadges(project.architecture.deployment)}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t, idx) => (
                      <Badge key={idx} variant="outline" className="px-3 py-1 text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* External Action Buttons inside Sidebar */}
                <div className="pt-4 border-t border-white/15 dark:border-white/10 space-y-2.5">
                  <Button
                    asChild
                    size="md"
                    className="w-full gap-2 shadow-md"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="md"
                    className="w-full gap-2 border-white/40 dark:border-white/20"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" />
                      View Code on GitHub
                    </a>
                  </Button>
                </div>

              </CardContent>
            </Card>

          </div>

        </div>

        {/* Project Pagination Footer (Next / Previous Project Cards) */}
        <div className="pt-8 border-t border-white/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Previous Project Button */}
          <Card
            onClick={() => navigate(`/portfolio/${prevProject.slug}`)}
            className="p-5 cursor-pointer hover:scale-[1.02] transition-transform flex items-center gap-4 group"
          >
            <CardContent className="p-0 flex items-center gap-4 w-full">
              <div className="size-10 rounded-full glass-panel flex items-center justify-center text-primary shrink-0 group-hover:-translate-x-1 transition-transform">
                <ChevronLeft className="size-5" />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Previous Project
                </div>
                <div className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Project Button */}
          <Card
            onClick={() => navigate(`/portfolio/${nextProject.slug}`)}
            className="p-5 cursor-pointer hover:scale-[1.02] transition-transform flex items-center justify-end text-right gap-4 group"
          >
            <CardContent className="p-0 flex items-center justify-end gap-4 w-full text-right">
              <div className="truncate">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Next Project
                </div>
                <div className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <div className="size-10 rounded-full glass-panel flex items-center justify-center text-primary shrink-0 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="size-5" />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default PortfolioDetailPage;
