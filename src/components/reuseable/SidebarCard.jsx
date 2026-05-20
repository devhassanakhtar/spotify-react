import React from "react";
import { Link } from "react-router-dom";

const Card = ({ heading, description, href, link }) => {
  return (
    <div className="bg-[var(--secondary-bg)] rounded-lg p-4 flex flex-col gap-4">
      <div>
        <h3 className="text-white font-bold text-base">{heading}</h3>
        <p className="text-[var(--text-secondary)] text-sm mt-1">
          {description}
        </p>
      </div>

      <Link
        to={href}
        className="bg-white text-black w-max px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition"
      >
        {link}
      </Link>
    </div>
  );
};

const SidebarCard = () => {
  const sidebarData = [
    {
      id: 1,
      heading: "Create your first playlist",
      description: "It's easy, we'll help you",
      href: "/playlist",
      link: "Create Playlist",
    },
    {
      id: 2,
      heading: "Let's find some podcasts to follow",
      description: "We'll keep you updated on new episodes",
      href: "/podcasts",
      link: "Browse Podcasts",
    },
  ];

  return (
    <div className="flex flex-col gap-3 mt-10">
      {sidebarData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default SidebarCard;