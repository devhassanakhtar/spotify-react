import { Home, Search, Library, Disc3, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const MobileNavbar = () => {
  const [showLibraryPopup, setShowLibraryPopup] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const navLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 text-xs font-bold transition ${
      isActive ? "text-white" : "text-[#b3b3b3]"
    }`;

  const handleLibraryClick = (e) => {
    if (!token) {
      e.preventDefault();
      setShowLibraryPopup(true);
      return;
    }

    navigate("/my-playlist");
  };

  const handleGetApp = () => {
    setShowLibraryPopup(false);
    navigate("/signup");
  };

  return (
    <>
      {showLibraryPopup && (
        <div className="fixed left-3 right-3 bottom-20 z-[11000] md:hidden">
          <div className="relative bg-[#4b8fe2] text-white rounded-md p-4 shadow-2xl">
            <button
              onClick={() => setShowLibraryPopup(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-bold mb-2">Enjoy Your Library</h2>

            <p className="text-sm font-semibold leading-6 text-white/90 max-w-[290px]">
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

            <div className="absolute bottom-[-10px] left-[62%] w-5 h-5 bg-[#4b8fe2] rotate-45"></div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-black text-[#b3b3b3] h-16 flex items-center justify-around md:hidden z-[10000] border-t border-[#282828]">
        <NavLink to="/" end className={navLinkClass}>
          <Home size={25} />
          <h2>Home</h2>
        </NavLink>

        <NavLink to="/search" className={navLinkClass}>
          <Search size={25} />
          <h2>Search</h2>
        </NavLink>

        <NavLink
          to={token ? "/my-playlist" : "/my-playlist"}
          onClick={handleLibraryClick}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs font-bold transition ${
              token && isActive ? "text-white" : "text-[#b3b3b3]"
            }`
          }
        >
          <Library size={25} />
          <h2>Your Library</h2>
        </NavLink>

        <NavLink to="/premium" className={navLinkClass}>
          <Disc3 size={25} />
          <h2>Premium</h2>
        </NavLink>
      </div>
    </>
  );
};

export default MobileNavbar;