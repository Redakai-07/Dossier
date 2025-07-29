import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => (
    <>
        <Navbar />
        <div className="pt-20">
            <Outlet />
        </div>
    </>
);

export default Layout;