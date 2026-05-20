import React from "react";
import Navbar from "../components/guest/Navbar";
import GuestSidebar from "../components/guest/GuestSidebar";
import GuestOutlit from "../components/guest/GuestOutlit";

const GuestLayout = () => {
  return (
    <div>
      <Navbar />

      <main className="flex px-4 py-2 gap-5 text-white">
        <div className="hidden md:block  w-[400px] shrink-0">
          <GuestSidebar />
        </div>

        <div className="flex-1 min-w-0">
          <GuestOutlit />
        </div>
      </main>
    </div>
  );
};

export default GuestLayout;
