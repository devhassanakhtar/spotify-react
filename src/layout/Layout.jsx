import React from "react";
import MainNavbar from "../components/ui/MainNavbar";
import Sidebar from "../components/ui/sidebar";
import Outlit from "../components/ui/Outlit";

const Layout = () => {
  return (
    <div>
      <div className="h-screen bg-black">
        <MainNavbar />

        <main className="flex gap-5 px-4 py-3 text-white h-[calc(100vh-80px)]">
          <div className="hidden md:block w-[400px] shrink-0 h-full">
            <Sidebar />
          </div>

          <div className="flex-1 min-w-0 h-full">
            <Outlit />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
