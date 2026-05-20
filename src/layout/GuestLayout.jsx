import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/guest/Navbar";
import GuestSidebar from "../components/guest/GuestSidebar";
import SignUpBar from "../components/ui/SignUpBar";

const GuestLayout = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />

      <main className="flex gap-5 px-4 py-3 text-white h-[calc(100vh-80px)]">
        <div className="hidden md:block w-[400px] shrink-0 h-full">
          <GuestSidebar />
        </div>

        <div className="flex-1 min-w-0 h-full">
          <div className="h-full rounded-lg bg-[var(--primary-bg)] p-3 overflow-auto">
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
