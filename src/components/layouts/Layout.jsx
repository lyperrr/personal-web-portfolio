import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { WhatsAppWidget } from "@/components/ui";

/**
 * Layout component wrapping single-page navigation and footer.
 */
const Layout = ({
  children,
  activeSection,
  scrollToSection,
  hideNavbar = false,
  hiddenFooter = false,
}) => {
  return (
    <>
      {!hideNavbar && (
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
      )}
      <main>{children}</main>
      {!hiddenFooter && <Footer scrollToSection={scrollToSection} />}
      <WhatsAppWidget />
    </>
  );
};

export default Layout;
