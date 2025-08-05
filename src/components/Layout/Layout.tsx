import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { preloadCriticalComponents } from "../../utils/preloadUtils";

const Layout = () => {
  useEffect(() => {
    // Preload critical components after initial render
    preloadCriticalComponents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;