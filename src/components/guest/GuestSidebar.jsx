import { Blend, Folder, Music, Plus, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SidebarCard from "../reuseable/SidebarCard";
import { Link, useNavigate } from "react-router-dom";

const GuestSidebar = () => {
  const [open, setOpen] = useState(false);
  const [showLibraryPopup, setShowLibraryPopup] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleCreateOptionClick = () => {
    setOpen(false);
    setShowLibraryPopup(true);
  };

  const handleGetApp = () => {
    setShowLibraryPopup(false);
    navigate("/signup");
  };

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
    <div className="h-full rounded-lg bg-[var(--primary-bg)] p-3 relative">
      {showLibraryPopup && (
        <div className="absolute left-4 right-4 top-16 z-[9999]">
          <div className="relative bg-[#4b8fe2] text-white rounded-md p-4 shadow-2xl">
            <button
              onClick={() => setShowLibraryPopup(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-bold mb-2">Enjoy Your Library</h2>

            <p className="text-sm font-semibold leading-6 text-white/90">
              See your saved songs, podcasts, artists, and playlists in the
              Spotify App.
            </p>

            <div className="flex items-center justify-end gap-5 mt-5">
              <button
                onClick={() => setShowLibraryPopup(false)}
                className="text-white font-bold text-sm cursor-pointer"
              >
                Not now
              </button>

              <button
                onClick={handleGetApp}
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm cursor-pointer"
              >
                Get App
              </button>
            </div>

            <div className="absolute top-[-8px] left-10 w-4 h-4 bg-[#4b8fe2] rotate-45"></div>
          </div>
        </div>
      )}

      <div className="h-full flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="font-bold cursor-context-menu text-[15px]">
              Your Library
            </h2>

            <div ref={dropdownRef} className="relative">
              <h3
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between gap-2 bg-[var(--secondary-bg)] p-1 pr-5 rounded-full cursor-pointer hover:bg-[#333333] transition group"
              >
                <Plus
                  size={20}
                  className={`text-[var(--text-secondary)] group-hover:text-white transition-transform duration-300 ${
                    open ? "rotate-45 text-white" : "rotate-0"
                  }`}
                />

                <span className="hidden lg:block text-sm font-bold">
                  Create
                </span>
              </h3>

              {open && (
                <div className="absolute top-10 left-0 mt-2 w-max bg-[var(--black-bg-var-1)] text-white rounded-lg shadow-lg p-1 z-50 flex flex-col gap-1">
                  <button
                    onClick={handleCreateOptionClick}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group text-left w-full"
                  >
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
                  </button>

                  <button
                    onClick={handleCreateOptionClick}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group text-left w-full"
                  >
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
                  </button>

                  <div className="h-[1px] w-full bg-[var(--black-bg-var-2)]"></div>

                  <button
                    onClick={handleCreateOptionClick}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#333333] rounded-md group text-left w-full"
                  >
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
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Cards */}
          <SidebarCard />
        </div>

        {/* Sidebar Footer */}
        <div className="mb-20">
          <div className="pb-4">
            <Link to="/" className="text-xs pr-3">
              Legal
            </Link>
            <Link to="/" className="text-xs pr-3">
              Safety & Privacy Center
            </Link>
            <Link to="/" className="text-xs pr-3">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs pr-3">
              Cookies
            </Link>
            <Link to="/" className="text-xs pr-3">
              About Ads
            </Link>
            <Link to="/" className="text-xs pr-3">
              Accessibility
            </Link>
          </div>

          <div className="hover:scale-102 duration-75 max-w-fit">
            <Link to="/" className="text-sm pr-3 font-bold">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestSidebar;