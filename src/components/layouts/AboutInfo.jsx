import React from "react";
import Profile from "@/assets/img/photo-profile.png";
import { Badge, Title, Text } from "@/components/ui";

const AboutInfo = () => {
  const aboutDescription = [
    {
      txt: "With over 5 years of experience in web development and design, I specialize in creating digital solutions that are both beautiful and functional.",
    },
    {
      txt: "My journey started with a curiosity about how websites work, and it has evolved into a passion for crafting user experiences that make a difference. I believe that great design is not just about how something looks, but how it works.",
    },
    {
      txt: "When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while sketching new ideas.",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-12 sm:gap-16">
          {/* Photo Profile Frame with Original Decorative Glass Boxes */}
          <div className="flex-shrink-0 mx-auto lg:m-0">
            {/* Bingkai Utama */}
            <div className="relative border border-white/40 dark:border-white/20 inline-block rounded-3xl glass-panel glass-specular-corner p-2 shadow-2xl">
              {/* Inner Image with valid rounded-2xl class */}
              <img
                src={Profile}
                alt="Foto Profil Willy Permana"
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

          {/* About Me Description */}
          <div className="lg:w-1/2 space-y-4">
            <div className="w-fit">
              <Badge variant="outline" className="text-sm font-semibold rounded-full px-4 py-1 mb-3">
                About Me
              </Badge>
              <Title level={2} className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Creating Digital Experiences
              </Title>
              <div className="space-y-4 text-justify leading-relaxed">
                {aboutDescription.map((item, index) => (
                  <Text key={index} variant="muted" className="text-sm sm:text-base leading-relaxed">
                    {item.txt}
                  </Text>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
