import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import { songsData } from "../../data/songsData";
import { artistsData } from "../../data/artistData";

const HomeSection = ({ data }) => {
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const hideScrollButtons = data.type === "charts";

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

  const limitText = (text, maxLength = 45) => {
    if (!text) return "";

    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
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
          className="hidden sm:block text-sm text-[var(--text-secondary)] font-bold hover:underline"
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
        className={`flex gap-3 overflow-x-auto custom-scrollbar-trending select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {data.cards.map((card) => (
          <div
            key={card.id}
            className="group min-w-[43%] w-[43%] sm:min-w-[180px] sm:w-[180px] cursor-pointer rounded-md"
          >
            <div className="p-2 sm:p-3 rounded-md group-hover:bg-[var(--secondary-bg)] transition duration-200">
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title || card.name || data.title}
                  draggable="false"
                  className={`w-full aspect-square object-cover pointer-events-none ${
                    data.type === "artist" ? "rounded-full" : "rounded-md"
                  }`}
                />

                <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex shadow-lg cursor-pointer hover:scale-105 hover:bg-[#62d68b] items-center justify-center rounded-full bg-[var(--spotify-green)] w-10 h-10 sm:w-12 sm:h-12">
                  <Play color="black" fill="black" size={22} />
                </div>
              </div>

              <h2 className="text-white font-bold mt-2 line-clamp-2">
                {limitText(card.title || card.name, 45)}
              </h2>

              <p className="text-[var(--text-secondary)] text-sm font-semibold line-clamp-2">
                {limitText(
                  card.artists?.join(", ") || card.artist || card.type,
                  60,
                )}
              </p>

              {/* {card.album && (
                <p className="text-[var(--text-secondary)] text-sm font-semibold">
                  {limitText(card.album, 45)}
                </p>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeCard = () => {
  const trendingSongs = songsData.filter(
    (song) => song.isTrending === true || song.category === "trending",
  );

  const popularSongs = songsData.filter(
    (song) => song.isPopular === true || song.category === "popular",
  );

  const albumSongs = songsData.filter(
    (song) => song.category === "album" || song.type === "album",
  );

  const popularArtists = artistsData.filter((artist) => artist.isPopular);

  const sections = [
    {
      id: 1,
      title: "Trending songs",
      href: "/",
      type: "playlist",
      cards: trendingSongs,
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
      cards: albumSongs,
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
