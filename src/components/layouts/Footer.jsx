import { NavLink, Link } from "react-router-dom";
import { MessageCircle, Github, Instagram } from "lucide-react";

function Footer() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  const socialMedia = [
    { url: "/", icon: MessageCircle },
    { url: "/", icon: Github },
    { url: "/", icon: Instagram },
  ];
  return (
    <footer className="bg-secondary border-t py-8 gap-8">
      <div className="container space-y-5">
        {/* Navigation */}
        <div className="">
          <ul className="flex justify-center gap-4 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-primary/50 hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="">
          <ul className="flex items-center justify-center gap-4 text-primary *:bg-secondary *:border *:hover:-translate-y-1 *:transition-all *:p-2 *:rounded-full">
            {socialMedia.map((item) => (
              <li key={item.url}>
                <Link to={item.url}>
                  <item.icon className="size-6" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center bg-accent text-xs">
          Copyright © 2025 <a href="">Willy Permana</a>. All rights reservered.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
