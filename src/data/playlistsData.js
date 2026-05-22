// import Playlist1 from "../assets/PlaylistImages/";
// import Playlist2 from "../assets/PlaylistImages/image-2.jfif";

import Playlist1 from "../assets/PlaylistImages/DrakeJaniceSTFU.jfif";
import Playlist2 from "../assets/PlaylistImages/HarBaar.jfif";


import DrakeJaniceSTFUimg from "../assets/PlaylistImages/DrakeJaniceSTFU.jfif";
import HarBaarimg from "../assets/PlaylistImages/HarBaar.jfif";
import SadiSunimg from "../assets/PlaylistImages/SadiSun.jfif";
import OnTheFloorimg from "../assets/PlaylistImages/OnTheFloor.jfif";
import Brokenimg from "../assets/PlaylistImages/Broken.jfif";
import DilSukoonimg from "../assets/PlaylistImages/DilSukoon.jfif";
import Bebasiimg from "../assets/PlaylistImages/Bebasi.jfif";
import Khasaraimg from "../assets/PlaylistImages/Khasara.jfif";
import TheBeastimg from "../assets/PlaylistImages/TheBeast.jfif";
import UdeekanVichimg from "../assets/PlaylistImages/UdeekanVich.jfif";


import DrakeJaniceSTFU from "../assets/songs/Drake - Janice STFU.mp3";
import HarBaar from "../assets/songs/Har Baar.mp3";
import SadiSun from "../assets/songs/Sadi Sun.mp3";
import OnTheFloor from "../assets/songs/On The Floor.mp3";
import Broken from "../assets/songs/Broken.mp3";
import DilSukoon from "../assets/songs/Dil Sukoon.mp3";
import Bebasi from "../assets/songs/Bebasi.mp3";
import Khasara from "../assets/songs/Khasara.mp3";
import TheBeast from "../assets/songs/The Beast.mp3";
import UdeekanVich from "../assets/songs/Udeekan Vich.mp3";

export const playlistsData = [
  {
    id: 1,
    title: "New Music Friday Pakistan",
    slug: "new-music-friday-pakistan",
    type: "Public Playlist",
    image: Playlist1,
    description:
      "New tracks from Samar Jafri, Humnaava, Olivia Rodrigo, Sheheryar Rehan and many more.",
    owner: "Spotify",
    saves: "39,138",
    totalSongs: 4,
    totalDuration: "about 20 min",
    isFeatured: true,
    isTrending: true,

    songs: [
      {
        id: 1,
        title: "Kami",
        artist: "Samar Jafri",
        artists: ["Samar Jafri"],
        album: "Kami",
        image: DrakeJaniceSTFU,
        src: DrakeJaniceSTFU,
        duration: "4:00",
        dateAdded: "11 hours ago",
      },
      {
        id: 2,
        title: "Lost In Love",
        artist: "Humnaava",
        artists: ["Humnaava", "Zain Zohaib", "Damsaz"],
        album: "Lost In Love",
        image: HarBaar,
        src: HarBaar,
        duration: "8:19",
        dateAdded: "11 hours ago",
      },
      {
        id: 3,
        title: "The Cure",
        artist: "Olivia Rodrigo",
        artists: ["Olivia Rodrigo"],
        album: "The Cure",
        image: SadiSun,
        src: SadiSun,
        duration: "4:57",
        dateAdded: "11 hours ago",
      },
      {
        id: 4,
        title: "Kya Kehnay",
        artist: "Sheheryar Rehan",
        artists: ["Sheheryar Rehan"],
        album: "Kya Kehnay",
        image: OnTheFloor,
        src: OnTheFloor,
        duration: "2:28",
        dateAdded: "11 hours ago",
      },
    ],
  },

  {
    id: 2,
    title: "Trending Songs Pakistan",
    slug: "trending-songs-pakistan",
    type: "Playlist",
    image: Playlist2,
    description: "The hottest songs people are listening to right now.",
    owner: "Spotify",
    saves: "15,420",
    totalSongs: 2,
    totalDuration: "about 8 min",
    isFeatured: true,
    isTrending: true,

    songs: [
      {
        id: 1,
        title: "Song One",
        artist: "Artist One",
        artists: ["Artist One"],
        album: "Song One",
        image: DilSukoon,
        src: DilSukoon,
        duration: "3:30",
        dateAdded: "Today",
      },
      {
        id: 2,
        title: "Song Two",
        artist: "Artist Two",
        artists: ["Artist Two"],
        album: "Song Two",
        image: TheBeast,
        src: TheBeast,
        duration: "4:10",
        dateAdded: "Today",
      },
    ],
  },
];