import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Card = ({
  id,
  heading,
  description,
  href,
  link,
  activePopupId,
  setActivePopupId,
  onGetApp,
}) => {
  const showPopup = activePopupId === id;

  const handleClick = (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      e.preventDefault();
      setActivePopupId(id);
      return;
    }
  };

  return (
    <div className="relative bg-[var(--secondary-bg)] rounded-lg p-4 flex flex-col gap-4">
      <div>
        <h3 className="text-white font-bold text-base">{heading}</h3>

        <p className="text-[var(--text-secondary)] text-sm mt-1">
          {description}
        </p>
      </div>

      <Link
        to={href}
        onClick={handleClick}
        className="bg-white text-black w-max px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition"
      >
        {link}
      </Link>

      {showPopup && (
        <div className="absolute left-0 right-0 top-full mt-3 z-[9999]">
          <div className="relative bg-[#4b8fe2] text-white rounded-md p-4 shadow-2xl">
            <button
              onClick={() => setActivePopupId(null)}
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
                onClick={() => setActivePopupId(null)}
                className="text-white font-bold text-sm cursor-pointer"
              >
                Not now
              </button>

              <button
                onClick={onGetApp}
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm cursor-pointer"
              >
                Get App
              </button>
            </div>

            <div className="absolute top-[-8px] left-10 w-4 h-4 bg-[#4b8fe2] rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const SidebarCard = () => {
  const [activePopupId, setActivePopupId] = useState(null);
  const navigate = useNavigate();

  const sidebarData = [
    {
      id: 1,
      heading: "Create your first playlist",
      description: "It's easy, we'll help you",
      href: "/my-playlist",
      link: "Open Playlist",
    },
    {
      id: 2,
      heading: "Let's find some podcasts to follow",
      description: "We'll keep you updated on new episodes",
      href: "/podcasts",
      link: "Open Podcasts",
    },
  ];

  const handleGetApp = () => {
    setActivePopupId(null);
    navigate("/signup");
  };

  return (
    <div className="flex flex-col gap-3 mt-10">
      {sidebarData.map((card) => (
        <Card
          key={card.id}
          {...card}
          activePopupId={activePopupId}
          setActivePopupId={setActivePopupId}
          onGetApp={handleGetApp}
        />
      ))}
    </div>
  );
};

export default SidebarCard;