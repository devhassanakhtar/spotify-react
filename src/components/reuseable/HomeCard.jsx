import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import {
  playlistsData,
  ArtistPlayListData,
  albumsData,
  radioData,
} from "../../data/playlistsData";
import { artistsData } from "../../data/artistData";
import { songsData } from "../../data/songsData";
import { usePlayer } from "../../context/PlayerContext";

const HomeSection = ({ data }) => {
  const scrollRef = useRef(null);
  const { playPlaylist } = usePlayer();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const hideScrollButtons = data.type === "charts";

  const limitText = (text, maxLength = 45) => {
    if (!text) return "";

    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getCardLink = (card) => {
    if (data.type === "playlist") return `/playlist/${card.slug}`;
    if (data.type === "artist") return `/artist/${card.slug}`;
    if (data.type === "playlist") return `/playlist/${card.slug}`;
    return `/playlist/${card.slug || card.id}`;
  };

  const getCardTitle = (card) => {
    return card.title || card.name || "";
  };

  const getCardDescription = (card) => {
    return (
      card.description ||
      card.artists?.join(", ") ||
      card.artist ||
      card.type ||
      ""
    );
  };

  const handlePlayClick = (e, card) => {
    e.preventDefault();
    e.stopPropagation();

    if (card.songs) {
      playPlaylist(card.songs);
      return;
    }

    if (card.src) {
      playPlaylist([card]);
      return;
    }

    console.log("This card has no playable songs");
  };

  return (
    <div className="relative group/section">
      <div className="flex items-center justify-between mb-4">
        <Link
          to={data.href}
          className="text-lg md:text-2xl text-white font-bold hover:underline pl-3"
        >
          {data.title}
        </Link>

        <Link
          to={data.href}
          className="hidden sm:block text-sm text-(text-secondary) font-bold hover:underline"
        >
          Show all
        </Link>
      </div>

      {!hideScrollButtons && (
        <>
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover/section:opacity-100 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover/section:opacity-100 transition"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`flex gap-3 overflow-x-auto custom-scrollbar-trending select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
      >
        {data.cards.map((card) => (
          <Link
            to={getCardLink(card)}
            key={card.id}
            className="group min-w-[43%] w-[43%] sm:min-w-[180px] sm:w-[180px] cursor-pointer rounded-md"
          >
            <div className="p-2 sm:p-3 rounded-md group-hover:bg-[var(--secondary-bg)] transition duration-200">
              <div className="relative">
                <img
                  src={card.image}
                  alt={getCardTitle(card)}
                  draggable="false"
                  className={`w-full aspect-square object-cover pointer-events-none ${data.type === "artist" ? "rounded-full" : "rounded-md"
                    }`}
                />

                {data.type !== "artist" && (
                  <button
                    onClick={(e) => handlePlayClick(e, card)}
                    className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex shadow-lg cursor-pointer hover:scale-105 hover:bg-[#62d68b] items-center justify-center rounded-full bg-[var(--spotify-green)] w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Play color="black" fill="black" size={22} />
                  </button>
                )}
              </div>

              <h2 className="text-white font-bold mt-2 line-clamp-2">
                {limitText(getCardTitle(card), 45)}
              </h2>

              <p className="text-[var(--text-secondary)] text-sm font-semibold line-clamp-2">
                {limitText(getCardDescription(card), 60)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const HomeCard = () => {
  const featuredPlaylists = playlistsData.filter(
    (playlist) => playlist.isTrending
  );

  const popularArtists = ArtistPlayListData.filter(
    (artist) => artist.isArtistPlaylist
  );

  const albumSingles = albumsData;

  const radioSongs = radioData;

  const sections = [
    {
      id: 1,
      title: "Trending songs",
      href: "/",
      type: "playlist",
      cards: featuredPlaylists,
    },
    {
      id: 2,
      title: "Popular Artists",
      href: "/artists",
      type: "artist",
      cards: popularArtists,
    },
    {
      id: 3,
      title: "Popular albums and singles",
      href: "/",
      type: "album",
      cards: albumSingles,
    },
    {
      id: 4,
      title: "Popular radio",
      href: "/",
      type: "radio",
      cards: radioSongs,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {sections
        .filter((section) => section.cards.length > 0)
        .map((section) => (
          <HomeSection key={section.id} data={section} />
        ))}
    </div>
  );
};

export default HomeCard;