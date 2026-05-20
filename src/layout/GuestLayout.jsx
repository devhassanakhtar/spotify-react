import React from "react";
import Navbar from "../components/guest/Navbar";
import GuestSidebar from "../components/guest/GuestSidebar";
import GuestOutlit from "../components/guest/GuestOutlit";

const GuestLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Navbar />

      <main className="flex gap-5 px-4 py-3 text-white h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-[400px] shrink-0 h-full">
          <GuestSidebar />
        </div>

        <div className="flex-1 min-w-0 h-full">
          <GuestOutlit />
        </div>
      </main>
    </div>
  );
};

export default GuestLayout;
