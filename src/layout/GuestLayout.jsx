import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/guest/Navbar";
import GuestSidebar from "../components/guest/GuestSidebar";
import SignUpBar from "../components/ui/SignUpBar";

const GuestLayout = () => {
  const location = useLocation();

  const hideNavbarOnMobile = location.pathname === "/search";
  return (
    <div className="h-screen bg-black">
      <div className={hideNavbarOnMobile ? "hidden md:block" : "block"}>
        <Navbar />
      </div>

      <main className="flex gap-5 sm:px-4 sm:py-3  text-white h-[calc(100vh-80px)]">
        <div className="hidden md:block lg:w-[400px] md:w-[250px] shrink-0 h-full">
          <GuestSidebar />
        </div>

        <div className="flex-1 min-w-0 h-full">
          <div className="h-full rounded-lg bg-[var(--primary-bg)] p-3 overflow-auto custom-scrollbar">
            <Outlet />
          </div>
        </div>
      </main>

      <footer className="absolute left-0 bottom-0 w-full text-white">
        <SignUpBar />
      </footer>
    </div>
  );
};

export default GuestLayout;
