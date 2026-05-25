import React, { useEffect, useMemo, useState } from "react";
import SearchCard from "../components/reuseable/SearchCard";
import { Search, Play } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { songsData } from "../data/songsData";
import { usePlayer } from "../context/PlayerContext";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromUrl = searchParams.get("q") || "";

  const [search, setSearch] = useState(queryFromUrl);

  const { playSong } = usePlayer();

  useEffect(() => {
    setSearch(queryFromUrl);
  }, [queryFromUrl]);

  const filteredSongs = useMemo(() => {
    const cleanSearch = queryFromUrl.trim().toLowerCase();

    if (!cleanSearch) return [];

    return songsData.filter((song) => {
      const title = song.title?.toLowerCase() || "";
      const artist = song.artist?.toLowerCase() || "";
      const artists = song.artists?.join(" ").toLowerCase() || "";
      const album = song.album?.toLowerCase() || "";
      const genre = song.genre?.toLowerCase() || "";
      const language = song.language?.toLowerCase() || "";

      return (
        title.includes(cleanSearch) ||
        artist.includes(cleanSearch) ||
        artists.includes(cleanSearch) ||
        album.includes(cleanSearch) ||
        genre.includes(cleanSearch) ||
        language.includes(cleanSearch)
      );
    });
  }, [queryFromUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanSearch = search.trim();

    if (!cleanSearch) {
      setSearchParams({});
      return;
    }

    setSearchParams({ q: cleanSearch });
  };

  return (
    <div className="sm:p-3 pb-28">
      <form onSubmit={handleSubmit} className="text-white md:hidden">
        <h1 className="font-bold text-2xl">Search</h1>

        <div className="flex items-center gap-2 bg-white p-2 rounded-sm mt-3 max-w-[500px]">
          <button type="submit">
            <Search color="black" />
          </button>

          <input
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What do you want to listen to?"
            className="w-full h-8 outline-none text-black placeholder:font-semibold"
          />
        </div>
      </form>

      {queryFromUrl.trim() ? (
        <div className="mt-8">
          <h2 className="text-white text-2xl font-bold mb-4">
            Search results for "{queryFromUrl}"
          </h2>

          {filteredSongs.length > 0 ? (
            <div className="flex flex-col gap-2">
              {filteredSongs.map((song, index) => (
                <div
                  key={song.id}
                  onClick={() => playSong(song)}
                  className="group grid grid-cols-[40px_1fr_100px] md:grid-cols-[40px_1fr_1fr_100px] items-center gap-4 px-4 py-3 rounded-md hover:bg-white/10 cursor-pointer text-white"
                >
                  <div className="text-[#b3b3b3]">
                    <span className="group-hover:hidden">{index + 1}</span>

                    <Play
                      size={18}
                      fill="currentColor"
                      className="hidden group-hover:block text-white"
                    />
                  </div>

                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="w-11 h-11 object-cover rounded"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold truncate">{song.title}</h3>

                      <p className="text-sm text-[#b3b3b3] truncate">
                        {song.artists?.join(", ") || song.artist}
                      </p>
                    </div>
                  </div>

                  <p className="hidden md:block text-sm text-[#b3b3b3] truncate">
                    {song.album}
                  </p>

                  <p className="text-sm text-[#b3b3b3] text-right">
                    {song.duration}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#b3b3b3] mt-4">
              No songs found. Try another song, artist, album, genre, or language.
            </p>
          )}
        </div>
      ) : (
        <>
          <h1 className="font-bold md:text-2xl mb-5 mt-10">Browse all</h1>
          <SearchCard />
        </>
      )}
    </div>
  );
};

export default SearchPage;