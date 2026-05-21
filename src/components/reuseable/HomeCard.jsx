import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

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

import Afusic from "../../assets/Artist-Images/afusic.jfif";
import Arijit from "../../assets/Artist-Images/arijit.jfif";
import Atif from "../../assets/Artist-Images/atif.jfif";
import Baryaan from "../../assets/Artist-Images/baryaan.jfif";
import Dhillon from "../../assets/Artist-Images/dhillon.jfif";
import Jain from "../../assets/Artist-Images/jain.jfif";
import Karan from "../../assets/Artist-Images/karan.jfif";
import Manuu from "../../assets/Artist-Images/manuu.jfif";
import Pritam from "../../assets/Artist-Images/pritam.jfif";
import Shubh from "../../assets/Artist-Images/shubh.jfif";

import Album1 from "../../assets/Album-Images/Album-1.jfif";
import Album2 from "../../assets/Album-Images/Album-2.jfif";
import Album3 from "../../assets/Album-Images/Album-3.jfif";
import Album4 from "../../assets/Album-Images/Album-4.jfif";
import Album5 from "../../assets/Album-Images/Album-5.jfif";
import Album6 from "../../assets/Album-Images/Album-6.jfif";
import Album7 from "../../assets/Album-Images/Album-7.jfif";
import Album8 from "../../assets/Album-Images/Album-8.jfif";
import Album9 from "../../assets/Album-Images/Album-9.jfif";
import Album10 from "../../assets/Album-Images/Album-10.jfif";

import Radio1 from "../../assets/Radio-Images/Radio-1.jfif";
import Radio2 from "../../assets/Radio-Images/Radio-2.jfif";
import Radio3 from "../../assets/Radio-Images/Radio-3.jfif";
import Radio4 from "../../assets/Radio-Images/Radio-4.jfif";
import Radio5 from "../../assets/Radio-Images/Radio-5.jfif";
import Radio6 from "../../assets/Radio-Images/Radio-6.jfif";
import Radio7 from "../../assets/Radio-Images/Radio-7.jfif";
import Radio8 from "../../assets/Radio-Images/Radio-8.jfif";
import Radio9 from "../../assets/Radio-Images/Radio-9.jfif";
import Radio10 from "../../assets/Radio-Images/Radio-10.jfif";

import Feature1 from "../../assets/Feature-Images/Feature-1.jpg";
import Feature2 from "../../assets/Feature-Images/Feature-2.jpg";
import Feature3 from "../../assets/Feature-Images/Feature-3.jpg";
import Feature4 from "../../assets/Feature-Images/Feature-4.jpg";

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

  return (
    <div className="relative group/section">
      <div className="flex items-center justify-between mb-4">
        <Link
          to={data.href}
          className="text-lg md:text-2xl text-white font-bold hover:underline"
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
                  alt={card.heading || data.title}
                  draggable="false"
                  className={`w-full aspect-square object-cover pointer-events-none ${
                    data.type === "artist" ? "rounded-full" : "rounded-md"
                  }`}
                />

                <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex shadow-lg cursor-pointer hover:scale-105 hover:bg-[#62d68b] items-center justify-center rounded-full bg-[var(--spotify-green)] w-10 h-10 sm:w-12 sm:h-12">
                  <Play color="black" fill="black" size={22} />
                </div>
              </div>

              {card.heading && (
                <h2 className="text-white font-bold mt-2 truncate">
                  {card.heading}
                </h2>
              )}

              <p className="text-[var(--text-secondary)] text-sm font-semibold line-clamp-2">
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
  );
};

const HomeCard = () => {
  const section = [
    {
      id: 1,
      title: "Trending songs",
      href: "/",
      type: "playlist",
      cards: [
        { id: 1, heading: "Janice STFU", image: Image1, desc1: "Drake" },
        {
          id: 2,
          heading: "Har Baar",
          image: Image2,
          desc1: "Murtaza Qizilbash",
          desc2: "Samar Jafri",
        },
        { id: 3, heading: "Sadi Sun", image: Image3, desc1: "Harsh Nussi" },
        {
          id: 4,
          heading: "On The Floor",
          image: Image4,
          desc1: "Jennifer Lopez",
          desc2: "Pitbull",
        },
        { id: 5, heading: "Broken", image: Image5, desc1: "Shubh" },
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
    {
      id: 2,
      title: "Popular Artist",
      href: "/",
      type: "artist",
      cards: [
        { id: 1, heading: "Afusic", image: Afusic, desc1: "Artist" },
        { id: 2, heading: "Arijit", image: Arijit, desc1: "Artist" },
        { id: 3, heading: "Atif", image: Atif, desc1: "Artist" },
        { id: 4, heading: "Bayaan", image: Baryaan, desc1: "Artist" },
        { id: 5, heading: "AP Dhillon", image: Dhillon, desc1: "Artist" },
        { id: 6, heading: "Anuv Jain", image: Jain, desc1: "Artist" },
        { id: 7, heading: "Karan Aujla", image: Karan, desc1: "Artist" },
        { id: 8, heading: "Maanu", image: Manuu, desc1: "Artist" },
        { id: 9, heading: "Pritam", image: Pritam, desc1: "Artist" },
        { id: 10, heading: "Shubh", image: Shubh, desc1: "Artist" },
      ],
    },
    {
      id: 3,
      title: "Popular albums and singles",
      href: "/",
      type: "album",
      cards: [
        {
          id: 1,
          heading: "Pal Pal",
          image: Album1,
          desc1: "Afusic, AliSoomoroMusic",
        },
        { id: 2, heading: "Sicario", image: Album2, desc1: "Shubh" },
        {
          id: 3,
          heading: "Jhol",
          image: Album3,
          desc1: "Maanu, Annural Khalid",
        },
        { id: 4, heading: "Safar", image: Album4, desc1: "Bayaan" },
        {
          id: 5,
          heading: "Afsoos",
          image: Album5,
          desc1: "Anuv Jain, AP Dhillon",
        },
        {
          id: 6,
          heading: "My Terrible Mind",
          image: Album6,
          desc1: "Talha Anjum, Umair",
        },
        {
          id: 7,
          heading: "Pal Pal",
          image: Album7,
          desc1: "Afusic, Talwiinder",
        },
        {
          id: 8,
          heading: "Making Memories",
          image: Album8,
          desc1: "Karan Aujla, Ikky",
        },
        {
          id: 9,
          heading: "Finding Her",
          image: Album9,
          desc1: "Khushagra, Bharath",
        },
        { id: 10, heading: "OKAY STFU", image: Album10, desc1: "AP Dhillon" },
      ],
    },
    {
      id: 4,
      title: "Popular radio",
      href: "/",
      type: "radio",
      cards: [
        {
          id: 1,
          image: Radio1,
          desc1: "With Jeet Gannguli, Pritam, Shaarib Toshi and more",
        },
        {
          id: 2,
          image: Radio2,
          desc1: "With Cheema Y, AP Dhillon, Juss and more",
        },
        {
          id: 3,
          image: Radio3,
          desc1: "By Spotify",
        },
        { id: 4, image: Radio4, desc1: "By Spotify" },
        {
          id: 5,
          image: Radio5,
          desc1: "With Shubh, Prem Dhillon, Jaura Phagwar and more",
        },
        {
          id: 6,
          image: Radio6,
          desc1: "With Young Stunners, Talhah Yunus, Jokhay and more",
        },
        {
          id: 7,
          image: Radio7,
          desc1: "With Karan Aujla, Shubh, Gurinder Gill and more",
        },
        {
          id: 8,
          image: Radio8,
          desc1: "With Shubh, AP Dhillon, DIVINE and more",
        },
        {
          id: 9,
          image: Radio9,
          desc1: "With Vishal Mishra, Sachin-Jigar, Pritam and more",
        },
        {
          id: 10,
          image: Radio10,
          desc1: "With Abdul Hannan, Maanu, Shehryar Khan and more",
        },
      ],
    },
    {
      id: 5,
      title: "Feature Charts",
      href: "/",
      type: "charts",
      cards: [
        {
          id: 1,
          image: Feature1,
          desc1: "Your weekly update of the most played tracks",
        },
        {
          id: 2,
          image: Feature2,
          desc1: "Your weekly update of the most played tracks",
        },
        {
          id: 3,
          image: Feature3,
          desc1: "Your weekly update of the most played tracks",
        },
        {
          id: 4,
          image: Feature4,
          desc1: "Your weekly update of the most played tracks",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {section.map((data) => (
        <HomeSection key={data.id} data={data} />
      ))}
    </div>
  );
};

export default HomeCard;
