import React from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../context/PlaylistContext";
import {
  Clock,
  ListMusic,
  MoreHorizontal,
  PlusCircle,
  Play,
  CheckCircle,
} from "lucide-react";

import {
  playlistsData,
  albumsData,
  radioData,
} from "../data/playlistsData";

import { usePlayer } from "../context/PlayerContext";

const PlaylistDetails = () => {
  const { slug } = useParams();
  const { playPlaylist, currentSong } = usePlayer();
  const { addToPlaylist, isSongSaved } = usePlaylist();

  const allPlaylists = [...playlistsData, ...albumsData, ...radioData];

  const playlist = allPlaylists.find((item) => item.slug === slug);

  if (!playlist) {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold">Playlist not found</h1>
      </div>
    );
  }

  return (
    <div className="text-white -m-3">
      <div className="bg-gradient-to-b from-[#064b39] to-[#10251f] p-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-end">
          <img
            src={playlist.image}
            alt={playlist.title}
            className="w-44 h-44 md:w-56 md:h-56 object-cover rounded shadow-2xl"
          />

          <div>
            <p className="text-sm font-bold">{playlist.type}</p>

            <h1 className="text-4xl md:text-7xl font-black mt-2 leading-tight">
              {playlist.title}
            </h1>

            <p className="text-sm text-[#d5d5d5] mt-4">
              {playlist.description}
            </p>

            <p className="text-sm text-[#d5d5d5] mt-2">
              <span className="text-white font-bold">{playlist.owner}</span> •{" "}
              {playlist.saves} saves • {playlist.totalSongs} songs,{" "}
              {playlist.totalDuration}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#10251f] to-[#121212] px-6 py-5">
        <div className="flex items-center gap-5">
          <button
            onClick={() => playPlaylist(playlist.songs, 0)}
            className="w-14 h-14 rounded-full bg-[var(--spotify-green)] flex items-center justify-center hover:scale-105 transition"
          >
            <Play color="black" fill="black" size={28} />
          </button>

          <button className="text-[#b3b3b3] hover:text-white">
            <PlusCircle size={28} />
          </button>

          <button className="text-[#b3b3b3] hover:text-white">
            <MoreHorizontal size={28} />
          </button>

          <button className="ml-auto hidden md:flex items-center gap-2 text-[#b3b3b3] hover:text-white">
            List <ListMusic size={18} />
          </button>
        </div>

        <div className="hidden md:grid grid-cols-[40px_1.5fr_1fr_1fr_80px] text-sm text-[#b3b3b3] border-b border-[#333] pb-2 mt-8 px-4">
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span>Date added</span>
          <Clock size={17} />
        </div>

        <div className="mt-2 pb-28" onClick={() => playPlaylist(playlist.songs, index)}>
          {playlist.songs.map((song, index) => {
            const activeSong = currentSong?.id === song.id;
            const saved = isSongSaved(song.id);

            return (
              <div
                key={song.id}
                onClick={() => playPlaylist(playlist.songs, index)}
                className="group grid grid-cols-[40px_1fr_120px_80px] items-center gap-4 px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer"
              >
                <div className="text-[#b3b3b3]">
                  {activeSong ? (
                    <Play size={18} fill="currentColor" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-10 h-10 rounded object-cover"
                  />

                  <div className="min-w-0">
                    <h3 className={activeSong ? "text-[var(--spotify-green)] font-semibold truncate" : "text-white font-semibold truncate"}>
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

                <div className="flex items-center justify-end gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToPlaylist(song);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-[#b3b3b3] hover:text-white transition"
                  >
                    {saved ? (
                      <CheckCircle size={20} className="text-[var(--spotify-green)]" />
                    ) : (
                      <PlusCircle size={20} />
                    )}
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

export default PlaylistDetails;