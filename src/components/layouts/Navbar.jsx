import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/svg/logo/W.svg";
import { Button } from "@/components/ui";
import { Menu, X, Download, Sun, MoonStar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toggleTheme } from "@/main";

function Navbar() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle the theme
  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  // Check if the user has a preferred theme
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <header className="border-b bg-secondary/50 backdrop-blur-sm shadow-md fixed w-full z-50">
      <nav className="container">
        <div className="flex items-center justify-between py-4 overflow-auto">
          {/* Logo */}
          <div className="lg:w-1/5">
            <Link
              to="/about"
              aria-label="Home"
              className="flex items-center pointer-events-auto z-50"
            >
              <img
                className="h-10 sm:h-14 cursor-pointer dark:invert"
                src={Logo}
                alt="Willy Permana"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="lg:w-3/5 hidden lg:flex items-center justify-center">
            <ul className="lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                        isActive
                          ? "text-primary after:w-full"
                          : "text-foreground/40 hover:text-primary after:w-0 hover:after:w-full"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle & Download CV */}
          <div className="flex lg:w-1/5 items-center lg:justify-end gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer group"
              onClick={handleToggleTheme}
            >
              {isDark ? (
                <Sun className="size-5 group-hover:rotate-45 transition-all duration-200 ease-in" />
              ) : (
                <MoonStar className="size-5 group-hover:-rotate-45 transition-all duration-200 ease-in" />
              )}
            </Button>
            {/* Button menu (mobile) */}
            <div className="flex items-center justify-center lg:hidden">
              <Button
                className="px-0 hover:bg-transparent size-fit"
                variant="ghost"
              >
                <Menu className="size-7" />
              </Button>
            </div>
            <Button size="lg" className="cursor-pointer hidden lg:flex">
              Download CV
              <Download className="size-4.5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
