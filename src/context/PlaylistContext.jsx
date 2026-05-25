import React, { createContext, useContext, useEffect, useState } from "react";

const PlaylistContext = createContext(null);

export const PlaylistProvider = ({ children }) => {
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem("savedSongs")) || [];
    setSavedSongs(storedSongs);
  }, []);

  const saveToLocalStorage = (songs) => {
    localStorage.setItem("savedSongs", JSON.stringify(songs));
  };

  const addToPlaylist = (song) => {
    if (!song) return;

    const alreadySaved = savedSongs.some((item) => item.id === song.id);

    if (alreadySaved) return;

    const updatedSongs = [...savedSongs, song];

    setSavedSongs(updatedSongs);
    saveToLocalStorage(updatedSongs);
  };

  const removeFromPlaylist = (songId) => {
    const updatedSongs = savedSongs.filter((song) => song.id !== songId);

    setSavedSongs(updatedSongs);
    saveToLocalStorage(updatedSongs);
  };

  const isSongSaved = (songId) => {
    return savedSongs.some((song) => song.id === songId);
  };

  const value = {
    savedSongs,
    addToPlaylist,
    removeFromPlaylist,
    isSongSaved,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error("usePlaylist must be used inside PlaylistProvider");
  }

  return context;
};