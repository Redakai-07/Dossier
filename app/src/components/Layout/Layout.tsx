import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default Layout;