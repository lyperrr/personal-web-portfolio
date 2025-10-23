import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Simple layout that renders Navbar once and wraps page content.
 * Pass `hideNavbar={true}` to hide the navbar on specific pages.
 */
const Layout = ({ children, hideNavbar = false, hiddenFooter = false }) => {
  return (
    <>
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
      {!hiddenFooter && <Footer />}
    </>
  );
};

export default Layout;
