import React from "react";
import Profile from "@/assets/img/profile.png";
import { Badge, Title, Text } from "@/components";

const AboutInfo = () => {
  const aboutDescription = [
    {
      txt: "With over 5 years of experience in web development and design, I specialize in creating digital solutions that are both beautiful and functional.",
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
        <div className="flex flex-col lg:flex-row lg:justify-center gap-10">
          {/* Photo Profile */}
          <div className="flex-shrink-0 mx-auto lg:m-0">
            {/* Bingkai utama */}
            <div className="relative border-3 border-black inline-block">
              <img
                src={Profile}
                alt="Foto Profil"
                className="size-80 sm:size-100 object-cover"
              />

              {/* Kotak dekoratif kanan atas */}
              <div className="absolute -top-7.5 -right-7.5">
                <div className="size-14 bg-gray-400 relative">
                  <div className="size-10 bg-gray-300 absolute left-1/2 -translate-x-1/2 -bottom-10 -translate-y-1/2"></div>
                </div>
              </div>

              {/* Kotak dekoratif kiri atas */}
              <div className="absolute -bottom-5.5 -left-5.5 -rotate-90">
                <div className="size-10 bg-gray-400 relative">
                  <div className="size-6 bg-gray-300 absolute left-1/2 -translate-x-1/2 -bottom-6 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-1/2">
            <div className="w-fit">
              <Badge variant="outlineBottom" className="text-xl">
                About Me
              </Badge>
              <Title level={2} className="mb-5">
                Creating Digital Experiences
              </Title>
              <div className="text-justify">
                {aboutDescription.map((item) => (
                  <Text key={item.txt} variant="muted">
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
