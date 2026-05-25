import React from "react";
import {
  Clock,
  Play,
  Trash2,
  Shuffle,
  Download,
  UserPlus,
  MoreHorizontal,
  ListMusic,
  CirclePlus,
} from "lucide-react";

import { usePlaylist } from "../context/PlaylistContext";
import { usePlayer } from "../context/PlayerContext";

const MyPlaylist = () => {
  const { savedSongs, removeFromPlaylist } = usePlaylist();
  const { playPlaylist, currentSong } = usePlayer();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = currentUser?.email || "user@gmail.com";
  const username = userEmail.split("@")[0];

  const playlistTitle = "My Playlist";

  const totalSeconds = savedSongs.reduce((total, song) => {
    return total + (song.durationSeconds || 0);
  }, 0);

  const formatTotalDuration = (seconds) => {
    if (!seconds) return "0 sec";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes === 0) {
      return `${remainingSeconds} sec`;
    }

    return `${minutes} min ${remainingSeconds} sec`;
  };

  const playlistCover = savedSongs[0]?.image;

  if (savedSongs.length === 0) {
    return (
      <div className="min-h-screen bg-[#121212] text-white -m-3">
        <div className="bg-gradient-to-b from-[#4b0000] to-[#121212] px-6 py-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-end">
            <div className="w-44 h-44 md:w-56 md:h-56 bg-[#282828] shadow-2xl rounded flex items-center justify-center">
              <CirclePlus size={70} className="text-[#b3b3b3]" />
            </div>

            <div>
              <p className="text-sm font-bold">Public Playlist</p>

              <h1 className="text-5xl md:text-7xl font-black mt-3">
                {playlistTitle}
              </h1>

              <p className="text-sm text-[#d5d5d5] mt-5">
                <span className="text-white font-bold">{username}</span> • 0 songs
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-10">
          <h2 className="text-2xl font-bold">No songs added yet</h2>
          <p className="text-[#b3b3b3] mt-2">
            Go to any playlist and click the plus icon to add songs here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white -m-3 pb-28 bg-[#121212] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#b00000] via-[#6d0000] to-[#221111] px-6 pt-10 pb-8">
        <div className="flex flex-col md:flex-row gap-6 md:items-end">
          <div className="w-44 h-44 md:w-56 md:h-56 bg-[#282828] shadow-2xl rounded overflow-hidden shrink-0">
            <img
              src={playlistCover}
              alt={playlistTitle}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pb-2">
            <p className="text-sm font-bold">Public Playlist</p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mt-3 leading-none">
              {playlistTitle}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#d5d5d5] mt-6 flex-wrap">
              <CirclePlus size={22} className="text-[#b3b3b3]" />

              <span className="text-white font-bold">{username}</span>

              <span>•</span>

              <span>
                {savedSongs.length} {savedSongs.length === 1 ? "song" : "songs"}
              </span>

              <span>•</span>

              <span>{formatTotalDuration(totalSeconds)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-b from-[#221111] to-[#121212] px-6 py-6">
        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={() => playPlaylist(savedSongs, 0)}
            className="w-14 h-14 rounded-full bg-[var(--spotify-green)] flex items-center justify-center hover:scale-105 transition"
          >
            <Play color="black" fill="black" size={30} className="ml-1" />
          </button>

          <button className="text-[#b3b3b3] hover:text-white transition">
            <img
              src={playlistCover}
              alt=""
              className="w-11 h-11 rounded object-cover border border-[#b3b3b3]"
            />
          </button>

          {/* <button className="text-[#b3b3b3] hover:text-white transition">
            <Shuffle size={30} />
          </button>

          <button className="text-[#b3b3b3] hover:text-white transition">
            <Download size={30} />
          </button>

          <button className="text-[#b3b3b3] hover:text-white transition">
            <UserPlus size={32} />
          </button>

          <button className="border border-[#b3b3b3] px-5 py-2 rounded-full text-sm font-bold hover:border-white hover:text-white transition">
            Mix
          </button>

          <button className="text-[#b3b3b3] hover:text-white transition">
            <MoreHorizontal size={30} />
          </button>

          <button className="ml-auto hidden md:flex items-center gap-2 text-[#b3b3b3] hover:text-white text-sm font-semibold">
            List <ListMusic size={20} />
          </button> */}
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[40px_1.8fr_1.1fr_1fr_80px] gap-4 px-5 py-2 border-b border-white/10 text-[#b3b3b3] text-sm">
          <span>#</span>
          <span>Title</span>
          <span className="hidden md:block">Album</span>
          <span className="hidden lg:block">Date added</span>
          <div className="flex justify-end">
            <Clock size={18} />
          </div>
        </div>

        {/* Songs */}
        <div className="mt-3">
          {savedSongs.map((song, index) => {
            const activeSong = currentSong?.id === song.id;

            return (
              <div
                key={song.id}
                onClick={() => playPlaylist(savedSongs, index)}
                className="group grid grid-cols-[40px_1.8fr_1.1fr_1fr_80px] gap-4 items-center px-5 py-3 rounded-md hover:bg-white/10 cursor-pointer"
              >
                <div className="text-[#b3b3b3] text-base">
                  {activeSong ? (
                    <Play
                      size={18}
                      fill="currentColor"
                      className="text-[var(--spotify-green)]"
                    />
                  ) : (
                    <span className="group-hover:hidden">{index + 1}</span>
                  )}

                  {!activeSong && (
                    <Play
                      size={18}
                      fill="currentColor"
                      className="hidden group-hover:block text-white"
                    />
                  )}
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-11 h-11 rounded object-cover"
                  />

                  <div className="min-w-0">
                    <h3
                      className={`font-semibold truncate ${
                        activeSong
                          ? "text-[var(--spotify-green)]"
                          : "text-white"
                      }`}
                    >
                      {song.title}
                    </h3>

                    <p className="text-sm text-[#b3b3b3] truncate">
                      {song.artists?.join(", ") || song.artist}
                    </p>
                  </div>
                </div>

                <p className="hidden md:block text-sm text-[#b3b3b3] truncate">
                  {song.album}
                </p>

                <p className="hidden lg:block text-sm text-[#b3b3b3]">
                  {song.dateAdded || "1 hour ago"}
                </p>

                <div className="flex items-center justify-end gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromPlaylist(song.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-[#b3b3b3] hover:text-white transition"
                  >
                    <Trash2 size={18} />
                  </button>

                  <span className="text-sm text-[#b3b3b3]">
                    {song.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPlaylist;