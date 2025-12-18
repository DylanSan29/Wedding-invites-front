import React from "react";
import { Outlet } from "react-router-dom"; // Importa Outlet
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default Layout;
