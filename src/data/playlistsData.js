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

import Afusic from "../assets/Artist-Images/afusic.jfif";
import Arijit from "../assets/Artist-Images/arijit.jfif";
import Atif from "../assets/Artist-Images/atif.jfif";
import Bayaan from "../assets/Artist-Images/baryaan.jfif";
import Dhillon from "../assets/Artist-Images/dhillon.jfif";
import Jain from "../assets/Artist-Images/Jain.jfif";
import Karan from "../assets/Artist-Images/karan.jfif";
import Maanu from "../assets/Artist-Images/manuu.jfif";
import Shubh from "../assets/Artist-Images/shubh.jfif";
import Pritam from "../assets/Artist-Images/Pritam.jfif";

import Album1 from "../assets/Album-Images/Album-1.jfif";
import Album2 from "../assets/Album-Images/Album-2.jfif";
import Album3 from "../assets/Album-Images/Album-3.jfif";
import Album4 from "../assets/Album-Images/Album-4.jfif";
import Album5 from "../assets/Album-Images/Album-5.jfif";
import Album6 from "../assets/Album-Images/Album-6.jfif";
import Album7 from "../assets/Album-Images/Album-7.jfif";
import Album8 from "../assets/Album-Images/Album-8.jfif";
import Album9 from "../assets/Album-Images/Album-9.jfif";
import Album10 from "../assets/Album-Images/Album-10.jfif";

import Radio1 from "../assets/Radio-Images/Radio-1.jfif";
import Radio2 from "../assets/Radio-Images/Radio-2.jfif";
import Radio3 from "../assets/Radio-Images/Radio-3.jfif";
import Radio4 from "../assets/Radio-Images/Radio-4.jfif";
import Radio5 from "../assets/Radio-Images/Radio-5.jfif";
import Radio6 from "../assets/Radio-Images/Radio-6.jfif";
import Radio7 from "../assets/Radio-Images/Radio-7.jfif";
import Radio8 from "../assets/Radio-Images/Radio-8.jfif";
import Radio9 from "../assets/Radio-Images/Radio-9.jfif";
import Radio10 from "../assets/Radio-Images/Radio-10.jfif";

import { getSongsByIds } from "./songsData";

const defaultSongIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const createPlaylist = ({
  id,
  title,
  slug,
  type = "album",
  image,
  description,
  owner = "Spotify",
  saves = "15,420",
  totalDuration = "about 30 min",
  songIds = defaultSongIds,
  isFeatured = false,
  isTrending = false,
  isArtistPlaylist = false,
  isAlbum = false,
  isRadio = false,
  bannerImage,
  monthlyListeners,
}) => {
  const songs = getSongsByIds(songIds);

  return {
    id,
    title,
    slug,
    type,
    image,
    bannerImage,
    description,
    owner,
    saves,
    monthlyListeners,
    totalSongs: songs.length,
    totalDuration,
    songIds,
    songs,
    isFeatured,
    isTrending,
    isArtistPlaylist,
    isAlbum,
    isRadio,
  };
};

export const playlistsData = [
  createPlaylist({
    id: 1,
    title: "On The Floor",
    slug: "jennifer-lopez",
    type: "Album",
    image: OnTheFloorimg,
    description: "Jennifer Lopez, Pitbull",
    saves: "39,138",
    totalDuration: "about 30 min",
    isTrending: true,
  }),
  createPlaylist({
    id: 2,
    title: "Har Baar",
    slug: "har-bar",
    image: HarBaarimg,
    description: "Murtaza Qizilbash, Samar Jafri",
    isTrending: true,
  }),
  createPlaylist({
    id: 3,
    title: "Sadi Sun",
    slug: "sadi-sun",
    image: SadiSunimg,
    description: "Harsh Nussi",
    isTrending: true,
  }),
  createPlaylist({
    id: 4,
    title: "Janice STFU",
    slug: "janice-stfu",
    image: DrakeJaniceSTFUimg,
    description: "Drake",
    isTrending: true,
  }),
  createPlaylist({
    id: 5,
    title: "Broken",
    slug: "broken",
    image: Brokenimg,
    description: "Shubhneet Singh",
    isTrending: true,
  }),
  createPlaylist({
    id: 6,
    title: "Dil Sukoon",
    slug: "dil-sukoon",
    image: DilSukoonimg,
    description: "Abdur Rahman Sajid",
    isTrending: true,
  }),
  createPlaylist({
    id: 7,
    title: "Bebasi",
    slug: "bebasi",
    image: Bebasiimg,
    description: "Talhah Yunus",
    isTrending: true,
  }),
  createPlaylist({
    id: 8,
    title: "Khasara",
    slug: "khasara",
    image: Khasaraimg,
    description: "Abdul Hannan",
    isTrending: true,
  }),
  createPlaylist({
    id: 9,
    title: "The Beast",
    slug: "the-beast",
    image: TheBeastimg,
    description: "Cheema Y, Gur Sidhu",
    isTrending: true,
  }),
  createPlaylist({
    id: 10,
    title: "Udeekan Vich",
    slug: "udeekan-vich",
    image: UdeekanVichimg,
    description: "Armaan Bedil, Amber, NAAZ",
    isTrending: true,
  }),
];

export const ArtistPlayListData = [
  createPlaylist({
    id: 1,
    title: "Afusic",
    slug: "afusic",
    type: "Artist",
    image: Afusic,
    description: "Artist",
    saves: "39,138",
    monthlyListeners: "39,138",
    isArtistPlaylist: true,
    songIds: [1, 2, 3, 4, 5],
  }),
  createPlaylist({
    id: 2,
    title: "Arijit",
    slug: "arijit",
    type: "Artist",
    image: Arijit,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [6, 7, 8, 9, 10],
  }),
  createPlaylist({
    id: 3,
    title: "Atif",
    slug: "atif",
    type: "Artist",
    image: Atif,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [1, 3, 5, 7, 9],
  }),
  createPlaylist({
    id: 4,
    title: "Bayaan",
    slug: "bayaan",
    type: "Artist",
    image: Bayaan,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [2, 4, 6, 8, 10],
  }),
  createPlaylist({
    id: 5,
    title: "AP Dhillon",
    slug: "ap-dhillon",
    type: "Artist",
    image: Dhillon,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [1, 2, 5, 8, 9],
  }),
  createPlaylist({
    id: 6,
    title: "Anuv Jain",
    slug: "anuv-jain",
    type: "Artist",
    image: Jain,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [3, 4, 6, 7, 10],
  }),
  createPlaylist({
    id: 7,
    title: "Karan Aujla",
    slug: "karan-aujla",
    type: "Artist",
    image: Karan,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [1, 4, 5, 8, 10],
  }),
  createPlaylist({
    id: 8,
    title: "Maanu",
    slug: "maanu",
    type: "Artist",
    image: Maanu,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [2, 3, 6, 7, 9],
  }),
  createPlaylist({
    id: 9,
    title: "Shubh",
    slug: "shubh",
    type: "Artist",
    image: Shubh,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [5, 7, 8, 9, 10],
  }),
  createPlaylist({
    id: 10,
    title: "Pritam",
    slug: "pritam",
    type: "Artist",
    image: Pritam,
    description: "Artist",
    isArtistPlaylist: true,
    songIds: [1, 2, 3, 4, 6],
  }),
];

export const albumsData = [
  createPlaylist({
    id: 1,
    title: "Trending Album 1",
    slug: "album-1",
    type: "Album",
    image: Album1,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [1, 2, 3, 4],
  }),
  createPlaylist({
    id: 2,
    title: "Trending Album 2",
    slug: "album-2",
    type: "Album",
    image: Album2,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [2, 3, 4, 5],
  }),
  createPlaylist({
    id: 3,
    title: "Trending Album 3",
    slug: "album-3",
    type: "Album",
    image: Album3,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [3, 4, 5, 6],
  }),
  createPlaylist({
    id: 4,
    title: "Trending Album 4",
    slug: "album-4",
    type: "Album",
    image: Album4,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [4, 5, 6, 7],
  }),
  createPlaylist({
    id: 5,
    title: "Trending Album 5",
    slug: "album-5",
    type: "Album",
    image: Album5,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [5, 6, 7, 8],
  }),
  createPlaylist({
    id: 6,
    title: "Trending Album 6",
    slug: "album-6",
    type: "Album",
    image: Album6,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [6, 7, 8, 9],
  }),
  createPlaylist({
    id: 7,
    title: "Trending Album 7",
    slug: "album-7",
    type: "Album",
    image: Album7,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [7, 8, 9, 10],
  }),
  createPlaylist({
    id: 8,
    title: "Trending Album 8",
    slug: "album-8",
    type: "Album",
    image: Album8,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [1, 3, 5, 7],
  }),
  createPlaylist({
    id: 9,
    title: "Trending Album 9",
    slug: "album-9",
    type: "Album",
    image: Album9,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [2, 4, 6, 8],
  }),
  createPlaylist({
    id: 10,
    title: "Trending Album 10",
    slug: "album-10",
    type: "Album",
    image: Album10,
    description: "Popular album and single",
    isAlbum: true,
    songIds: [3, 5, 7, 9],
  }),
];

export const radioData = [
  createPlaylist({
    id: 1,
    title: "Radio 1",
    slug: "radio-1",
    type: "Radio",
    image: Radio1,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [1, 4, 7, 10],
  }),
  createPlaylist({
    id: 2,
    title: "Radio 2",
    slug: "radio-2",
    type: "Radio",
    image: Radio2,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [2, 5, 8],
  }),
  createPlaylist({
    id: 3,
    title: "Radio 3",
    slug: "radio-3",
    type: "Radio",
    image: Radio3,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [3, 6, 9],
  }),
  createPlaylist({
    id: 4,
    title: "Radio 4",
    slug: "radio-4",
    type: "Radio",
    image: Radio4,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [4, 7, 10],
  }),
  createPlaylist({
    id: 5,
    title: "Radio 5",
    slug: "radio-5",
    type: "Radio",
    image: Radio5,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [5, 8, 1],
  }),
  createPlaylist({
    id: 6,
    title: "Radio 6",
    slug: "radio-6",
    type: "Radio",
    image: Radio6,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [6, 9, 2],
  }),
  createPlaylist({
    id: 7,
    title: "Radio 7",
    slug: "radio-7",
    type: "Radio",
    image: Radio7,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [7, 10, 3],
  }),
  createPlaylist({
    id: 8,
    title: "Radio 8",
    slug: "radio-8",
    type: "Radio",
    image: Radio8,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [8, 1, 4],
  }),
  createPlaylist({
    id: 9,
    title: "Radio 9",
    slug: "radio-9",
    type: "Radio",
    image: Radio9,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [9, 2, 5],
  }),
  createPlaylist({
    id: 10,
    title: "Radio 10",
    slug: "radio-10",
    type: "Radio",
    image: Radio10,
    description: "Popular radio playlist",
    isRadio: true,
    songIds: [10, 3, 6],
  }),
];