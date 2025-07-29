import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => (
    <>
        <Navbar />
        <div className="pt-20">
            <Outlet />
        </div>
        <Footer />
    </>
);

export default Layout;