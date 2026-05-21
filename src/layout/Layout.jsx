import React from "react";
import MainNavbar from "../components/ui/MainNavbar";
import Sidebar from "../components/ui/sidebar";
import Body from "../components/ui/Body";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const hideNavbarOnMobile = location.pathname === "/search";
  return (
    <div>
      <div className="h-screen bg-black">
        <div className={hideNavbarOnMobile ? "hidden md:block" : "block"}>
          <MainNavbar />
        </div>

        <main className="flex gap-5 px-4 py-3 text-white h-[calc(100vh-80px)]">
          <div className="hidden md:block w-[400px] shrink-0 h-full">
            <Sidebar />
          </div>

          <div className="flex-1 min-w-0 h-full">
            <div className="h-full rounded-lg bg-[var(--primary-bg)] p-3 overflow-auto">
              <Body />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
