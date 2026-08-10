import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    </>
  );
};

export default Layout;
