import React, { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [queue, setQueue] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = queue[currentSongIndex];

  const playPlaylist = (songs = [], startIndex = 0) => {
    const playableSongs = songs.filter((song) => song.src);

    if (playableSongs.length === 0) {
      console.log("No playable songs found");
      return;
    }

    setQueue(playableSongs);
    setCurrentSongIndex(startIndex);
    setIsPlaying(true);

    setTimeout(() => {
      if (!audioRef.current) return;
      audioRef.current.play();
    }, 100);
  };

  const playSong = (song) => {
    if (!song || !song.src) return;

    setQueue([song]);
    setCurrentSongIndex(0);
    setIsPlaying(true);

    setTimeout(() => {
      if (!audioRef.current) return;
      audioRef.current.play();
    }, 100);
  };

  const playPause = async () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const nextSong = () => {
    if (queue.length === 0) return;

    const nextIndex =
      currentSongIndex + 1 >= queue.length ? 0 : currentSongIndex + 1;

    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);

    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  const previousSong = () => {
    if (queue.length === 0) return;

    const prevIndex =
      currentSongIndex - 1 < 0 ? queue.length - 1 : currentSongIndex - 1;

    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);

    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        queue,
        currentSong,
        currentSongIndex,
        isPlaying,
        setIsPlaying,
        playPlaylist,
        playSong,
        playPause,
        nextSong,
        previousSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
};
