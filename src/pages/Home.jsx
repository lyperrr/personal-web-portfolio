import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Text, Title, Badge, ShapeAnimate } from "@/components";
import { Mail, ArrowRight, Mouse, Github, MessageCircle } from "lucide-react";
import AboutInfo from "@/components/layouts/AboutInfo";

const Home = () => {
  const navigate = useNavigate();
  const socialMedia = [
    { href: "/", icon: MessageCircle, label: "Message" },
    { href: "/", icon: Github, label: "Github" },
    { href: "/", icon: Mail, label: "Email" },
  ];

  return (
    <>
      <section className="h-screen">
        <div className="container">
          <div className="flex items-center justify-center h-screen relative">
            <ShapeAnimate
              shape="square"
              size={16}
              animation="spin"
              bgColor="secondary"
              className="left-10"
            />
            <ShapeAnimate
              shape="square"
              size={10}
              animation="spin"
              bgColor="secondary"
              className="top-40 right-20"
            />
            <ShapeAnimate
              shape="square"
              size={10}
              animation="spin"
              bgColor="secondary"
              className="bottom-40 right-35"
            />

            <div className="flex flex-col items-center text-center">
              <Badge variant="ghost" className="-rotate-3 text-xl lg:text-2xl">
                Hello I'm
              </Badge>
              <Title
                level={2}
                variant="primary"
                className="mb-10 -rotate-3 uppercase text-3xl md:text-4xl lg:text-5xl font-bold px-10"
              >
                Willy Permana
              </Title>
              <Text
                variant="secondary"
                className=" text-xl md:text-2xl font-bold"
              >
                Web Developer & Designer
              </Text>
              <Text variant="muted" className="sm:w-3/4 lg:w-1/2 z-10">
                Passionate about creating beautiful, functional, and
                user-centered digital experiences. Bringing ideas to life
                through code and design.
              </Text>

              <div className="mt-6 flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-4">
                <Button
                  onClick={() => navigate("/contact")}
                  size="xl"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  Get In Touch
                  <Mail className="size-4.5" />
                </Button>

                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto group cursor-pointer"
                >
                  View Project
                  <ArrowRight className="group-hover:rotate-90 transition-all duration-200 ease-linear size-4.5" />
                </Button>
              </div>

              {/* Social Media */}
              <div className="">
                <ul className="flex sm:flex-col mt-6 sm:m-0 sm:top-1/2 sm:-translate-y-1/2 space-x-2 sm:fixed right-0 sm:right-10 *:bg-secondary/80 *:border *:opacity-70 *:hover:opacity-100 *:hover:bg-secondary *:p-3 sm:space-y-2 sm:space-x-0 *:rounded-full">
                  {socialMedia.map((item) => (
                    <li key={item.href} aria-label={item.label}>
                      <Link to={item.href}>
                        <item.icon className="size-6" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Mouse className="animate-bounce size-8 absolute bottom-20 sm:bottom-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <Title className="text-center text-8xl animate-pulse text-primary/10 mb-10">01</Title>
        <AboutInfo />
      </section>
    </>
  );
};

export default Home;
