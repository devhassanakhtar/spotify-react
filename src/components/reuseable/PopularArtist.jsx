import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Image1 from "../../assets/PlaylistImages/image-1.jfif";
import Image2 from "../../assets/PlaylistImages/image-2.jfif";
import Image3 from "../../assets/PlaylistImages/image-3.jfif";
import Image4 from "../../assets/PlaylistImages/image-4.jfif";
import Image5 from "../../assets/PlaylistImages/image-5.jfif";
import Image6 from "../../assets/PlaylistImages/image-6.jfif";
import Image7 from "../../assets/PlaylistImages/image-7.jfif";
import Image8 from "../../assets/PlaylistImages/image-8.jfif";
import Image9 from "../../assets/PlaylistImages/image-9.jfif";
import Image10 from "../../assets/PlaylistImages/image-10.jfif";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const PopularArtist = () => {
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const section = [
    {
      id: 1,
      title: "Trending songs",
      href: "/",
      cards: [
        {
          id: 1,
          heading: "Janice STFU",
          image: Image1,
          desc1: "Drake",
        },
        {
          id: 2,
          heading: "Har Baar",
          image: Image2,
          desc1: "Murtaza Qizilbash",
          desc2: "Samar Jafri",
        },
        {
          id: 3,
          heading: "Sadi Sun",
          image: Image3,
          desc1: "Harsh Nussi",
        },
        {
          id: 4,
          heading: "On The Floor",
          image: Image4,
          desc1: "Jennifer Lopez",
          desc2: "Pitbull",
        },
        {
          id: 5,
          heading: "Broken",
          image: Image5,
          desc1: "Shubh",
        },
        {
          id: 6,
          heading: "Dil Sukoon",
          image: Image6,
          desc1: "Third Fret",
          desc2: "HAVI",
        },
        {
          id: 7,
          heading: "Bebasi",
          image: Image7,
          desc1: "Talhah Yunus, Jokhay,",
          desc2: "Umair",
        },
        {
          id: 8,
          heading: "Khasara",
          image: Image8,
          desc1: "Abdul Hannan",
          desc2: "Samar Jafri",
        },
        {
          id: 9,
          heading: "The Beast",
          image: Image9,
          desc1: "Cheema Y",
          desc2: "Gur Sidhu",
        },
        {
          id: 10,
          heading: "Udeekan Vich",
          image: Image10,
          desc1: "Armaan Bedil, Amber,",
          desc2: "Naaz",
        },
      ],
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col gap-8">
      {section.map((data) => (
        <div key={data.id} className="relative group/section">
          <div className="flex items-center justify-between mb-4">
            <Link
              to={data.href}
              className="text-2xl text-white font-bold hover:underline"
            >
              {data.title}
            </Link>

            <Link
              to={data.href}
              className="text-sm text-[var(--text-secondary)] font-bold hover:underline"
            >
              Show all
            </Link>
          </div>

          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover/section:opacity-100 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover/section:opacity-100 transition"
          >
            <ChevronRight />
          </button>

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
                className="group min-w-[42%] w-[42%] sm:min-w-[180px] sm:w-[180px] cursor-pointer rounded-md"
              >
                <div className="p-3 rounded-md group-hover:bg-[var(--secondary-bg)] transition duration-200">
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={card.image}
                      alt={card.heading}
                      draggable="false"
                      className="w-full h-[160px] object-cover rounded-md pointer-events-none"
                    />

                    <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex shadow-lg cursor-pointer hover:scale-105 hover:bg-[#62d68b] items-center justify-center rounded-full bg-[var(--spotify-green)] w-12 h-12">
                      <Play color="black" fill="black" />
                    </div>
                  </div>

                  <h2 className="text-white font-bold mt-2 truncate">
                    {card.heading}
                  </h2>

                  <p className="text-[var(--text-secondary)] text-sm font-semibold truncate">
                    {card.desc1}
                  </p>

                  {card.desc2 && (
                    <p className="text-[var(--text-secondary)] text-sm font-semibold truncate">
                      {card.desc2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularArtist;
