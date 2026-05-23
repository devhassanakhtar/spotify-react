import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Play, MoreHorizontal } from "lucide-react";
import { ArtistPlayListData } from "../data/playlistsData";
import { usePlayer } from "../context/PlayerContext";

const ArtistPlaylist = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { playPlaylist, playSong, currentSong, isPlaying } = usePlayer();

    const artist = ArtistPlayListData.find((item) => item.slug === slug);

    if (!artist) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-3">Artist not found</h1>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-white text-black px-5 py-2 rounded-full font-semibold"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const handlePlayArtist = () => {
        playPlaylist(artist.songs, 0);
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white overflow-y-auto pb-28">
            {/* Banner Section */}
            <div className="relative h-[380px] w-full">
                <img
                    src={artist.bannerImage || artist.image}
                    alt={artist.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#082025] via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-5">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                        {artist.title}
                    </h1>

                    <p className="mt-5 text-sm md:text-base font-semibold">
                        {artist.monthlyListeners || artist.saves} monthly listeners
                    </p>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-gradient-to-b from-[#082025] to-[#121212] px-5 py-6">
                {/* Buttons */}
                <div className="flex items-center gap-6 mb-8">
                    <button
                        onClick={handlePlayArtist}
                        className="w-14 h-14 rounded-full bg-[#1ed760] flex items-center justify-center hover:scale-105 transition"
                    >
                        <Play size={30} fill="black" className="text-black ml-1" />
                    </button>

                    <button className="border border-[#727272] px-5 py-2 rounded-full text-sm font-bold hover:border-white">
                        Follow
                    </button>

                    <button>
                        <MoreHorizontal size={28} className="text-[#b3b3b3]" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
                    {/* Popular Songs */}
                    <div>
                        <h2 className="text-2xl font-bold mb-5">Popular</h2>

                        <div className="space-y-2">
                            {artist.songs.slice(0, 5).map((song, index) => {
                                const activeSong = currentSong?.id === song.id;

                                return (
                                    <div
                                        key={song.id}
                                        onClick={() => playSong(song)}
                                        className="grid grid-cols-[30px_52px_1fr_130px_60px] items-center gap-4 px-3 py-2 rounded-md hover:bg-white/10 cursor-pointer group"
                                    >
                                        <p className="text-[#b3b3b3] text-sm">{index + 1}</p>

                                        <img
                                            src={song.image}
                                            alt={song.title}
                                            className="w-10 h-10 object-cover rounded"
                                        />

                                        <div>
                                            <h3
                                                className={`font-semibold ${activeSong ? "text-[#1ed760]" : "text-white"
                                                    }`}
                                            >
                                                {song.title}
                                            </h3>
                                            <p className="text-sm text-[#b3b3b3] md:hidden">
                                                {song.artist}
                                            </p>
                                        </div>

                                        <p className="hidden md:block text-[#b3b3b3] text-sm">
                                            {song.plays || "2,340,500,804"}
                                        </p>

                                        <p className="text-[#b3b3b3] text-sm text-right">
                                            {song.duration}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Artist Pick */}
                    <div>
                        <h2 className="text-2xl font-bold mb-5">Artist pick</h2>

                        <div className="flex gap-4">
                            <img
                                src={artist.artistPick?.image || artist.image}
                                alt={artist.artistPick?.title}
                                className="w-24 h-24 object-cover rounded"
                            />

                            <div>
                                <div className="bg-white text-black rounded-full px-3 py-1 text-sm mb-3 w-fit">
                                    {artist.artistPick?.subtitle || `${artist.title}, out now`}
                                </div>

                                <h3 className="font-bold">
                                    {artist.artistPick?.title || artist.title}
                                </h3>

                                <p className="text-[#b3b3b3] text-sm font-semibold">
                                    {artist.artistPick?.type || artist.type}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full Songs List */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5">Songs</h2>

                    <div className="space-y-1">
                        {artist.songs.map((song, index) => (
                            <div
                                key={song.id}
                                onClick={() => playSong(song)}
                                className="grid grid-cols-[30px_52px_1fr_1fr_80px] items-center gap-4 px-3 py-2 rounded-md hover:bg-white/10 cursor-pointer"
                            >
                                <p className="text-[#b3b3b3] text-sm">{index + 1}</p>

                                <img
                                    src={song.image}
                                    alt={song.title}
                                    className="w-10 h-10 object-cover rounded"
                                />

                                <div>
                                    <h3 className="font-semibold">{song.title}</h3>
                                    <p className="text-sm text-[#b3b3b3]">{song.artist}</p>
                                </div>

                                <p className="hidden md:block text-[#b3b3b3] text-sm">
                                    {song.album}
                                </p>

                                <p className="text-[#b3b3b3] text-sm text-right">
                                    {song.duration}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistPlaylist;