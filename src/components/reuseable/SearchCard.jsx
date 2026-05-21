import React from "react";
import image1 from "../../assets/SearchImages/image-1.jfif";
import image2 from "../../assets/SearchImages/image-2.jpg";
import image3 from "../../assets/SearchImages/image-3.jfif";
import image4 from "../../assets/SearchImages/image-4.jfif";
import image5 from "../../assets/SearchImages/image-5.jfif";
import image6 from "../../assets/SearchImages/image-6.jfif";
import image7 from "../../assets/SearchImages/image-7.jfif";
import image8 from "../../assets/SearchImages/image-8.jfif";
import image9 from "../../assets/SearchImages/image-9.jpg";
import image10 from "../../assets/SearchImages/image-10.jfif";
import image11 from "../../assets/SearchImages/image-11.jfif";
import image12 from "../../assets/SearchImages/image-12.jfif";
import image13 from "../../assets/SearchImages/image-13.jfif";
import image14 from "../../assets/SearchImages/image-14.jfif";
import image15 from "../../assets/SearchImages/image-15.jfif";
import image16 from "../../assets/SearchImages/image-16.jfif";
import image17 from "../../assets/SearchImages/image-17.jfif";
import image18 from "../../assets/SearchImages/image-18.jfif";
import image19 from "../../assets/SearchImages/image-19.jfif";
import image20 from "../../assets/SearchImages/image-20.jfif";
import image21 from "../../assets/SearchImages/image-21.jfif";
import image22 from "../../assets/SearchImages/image-22.jfif";
import image23 from "../../assets/SearchImages/image-23.jfif";
import image24 from "../../assets/SearchImages/image-24.jfif";

const Card = ({ heading, backgroundColor, image }) => {
  return (
    <div
      style={{ backgroundColor }}
      className="relative w-full h-[110px] sm:h-[170px] rounded-lg p-5 overflow-hidden cursor-pointer"
    >
      <h1 className="font-bold text-xl lg:text-2xl text-white">
        {heading}
      </h1>

      <img
        src={image}
        alt={heading}
        className="absolute w-[95px] h-[95px] sm:w-[110px] sm:h-[110px] object-cover right-[-18px] bottom-[-12px] rotate-[25deg] shadow-lg"
      />
    </div>
  );
};

const SearchCard = () => {
  const searchData = [
    {
      id: 1,
      heading: "Music",
      backgroundColor: "#DC148C",
      image: image1,
    },
    {
      id: 2,
      heading: "Live Events",
      backgroundColor: "#8400E7",
      image: image2,
    },
    {
      id: 3,
      heading: "Made For You",
      backgroundColor: "#1E3264",
      image: image3,
    },
    {
      id: 4,
      heading: "New Releases",
      backgroundColor: "#608108",
      image: image4,
    },
    {
      id: 5,
      heading: "Desi",
      backgroundColor: "#E13300",
      image: image5,
    },
    {
      id: 6,
      heading: "Pop",
      backgroundColor: "#477D95",
      image: image6,
    },
    {
      id: 7,
      heading: "Hip-Hop",
      backgroundColor: "#477D95",
      image: image7,
    },
    {
      id: 8,
      heading: "Punjbai",
      backgroundColor: "#B02897",
      image: image8,
    },
    {
      id: 9,
      heading: "Charts",
      backgroundColor: "#8D67AB",
      image: image9,
    },
    {
      id: 10,
      heading: "Educational",
      backgroundColor: "#477D95",
      image: image10,
    },
    {
      id: 11,
      heading: "Documentary",
      backgroundColor: "#503750",
      image: image11,
    },
    {
      id: 12,
      heading: "Comedy",
      backgroundColor: "#B02897",
      image: image12,
    },
    {
      id: 13,
      heading: "Pop Culture",
      backgroundColor: "#DC148C",
      image: image13,
    },
    {
      id: 14,
      heading: "EQUAL",
      backgroundColor: "#DC148C",
      image: image14,
    },
    {
      id: 15,
      heading: "Indie",
      backgroundColor: "#E91429",
      image: image15,
    },
    {
      id: 16,
      heading: "Fresh Finds",
      backgroundColor: "#FF0090",
      image: image16,
    },
    {
      id: 17,
      heading: "Rock",
      backgroundColor: "#006450",
      image: image17,
    },
    {
      id: 18,
      heading: "Discover",
      backgroundColor: "#8D67AB",
      image: image18,
    },
    {
      id: 19,
      heading: "Latin",
      backgroundColor: "#0D73EC",
      image: image19,
    },
    {
      id: 20,
      heading: "Dance/Electronics",
      backgroundColor: "#B02897",
      image: image20,
    },
    {
      id: 21,
      heading: "Mood",
      backgroundColor: "#477D95",
      image: image21,
    },
    {
      id: 22,
      heading: "Workout Music",
      backgroundColor: "#777777",
      image: image22,
    },
    {
      id: 23,
      heading: "Country",
      backgroundColor: "#D84000",
      image: image23,
    },
    {
      id: 24,
      heading: "Chill",
      backgroundColor: "#B06239",
      image: image24,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pb-15">
      {searchData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

export default SearchCard;