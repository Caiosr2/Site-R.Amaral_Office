import React from "react";
import { Outlet } from "react-router-dom";
import Header from './header';
import Footer from "./Footer";
import ScrollToTop from "./components/ui/scroll_to_top";

const Layout = () => {
  return (
    <div className="layout-container">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
