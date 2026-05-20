import { Blend, Folder, Music, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const GuestSidebar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="min-h-screen rounded-lg  bg-[var(--primary-bg)] p-3">
      <div className="flex items-center justify-between">
        <h2 className="font-bold cursor-context-menu text-[15px]">
          Your Library
        </h2>
        <div ref={dropdownRef} className="relative">
          <h3
            onClick={() => setOpen(!open)}
            className=" flex items-center justify-between gap-2 bg-[var(--secondary-bg)] p-1 pr-5 rounded-full cursor-pointer hover:bg-[#333333] transition group"
          >
            <Plus
              size={20}
              className={`text-[var(--text-secondary)] group-hover:text-white transition-transform duration-300 ${
                open ? "rotate-45 text-white" : "rotate-0"
              }`}
            />
            <span className="hidden xl:block text-sm font-bold">Create</span>
          </h3>
          {open && (
            <div className="absolute top-10 left-0 mt-2 w-max bg-[var(--black-bg-var-1)] text-white rounded-lg shadow-lg p-1 z-50 flex flex-col gap-1">
              <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group">
                <span className="p-3 rounded-full bg-[var(--black-bg-var-2)]">
                  <Music
                    size={25}
                    className="group-hover:text-[var(--spotify-green)] transition group-hover:rotate-7 group-hover:scale-105"
                  />
                </span>
                <div>
                  <h1 className="font-semibold">Playlist</h1>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Create a playlist with songs or episodes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group">
                <span className="p-3 rounded-full bg-[var(--black-bg-var-2)]">
                  <Blend
                    size={25}
                    className="group-hover:text-[var(--spotify-green)] transition group-hover:rotate-7 group-hover:scale-105"
                  />
                </span>
                <div>
                  <h1 className="font-semibold">Blend</h1>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Combine your friend's taste into a playlist
                  </p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[var(--black-bg-var-2)]"></div>{" "}
              <div className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group">
                <span className="p-3 rounded-full bg-[var(--black-bg-var-2)]">
                  <Folder
                    size={25}
                    className="group-hover:text-[var(--spotify-green)] transition group-hover:rotate-7 group-hover:scale-105"
                  />
                </span>
                <div>
                  <h1 className="font-semibold">Folder</h1>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Organize your playlist
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestSidebar;
