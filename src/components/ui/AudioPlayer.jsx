import React, { useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Maximize2,
  CirclePlus,
} from "lucide-react";
import Tooltip from "../reuseable/Tooltip";

const AudioPlayer = () => {
  const songs = [
    {
      title: "Song 1",
      artist: "Artist 1",
      src: "/songs/song1.mp3",
      image: "/songs/song1.jpg",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      src: "/songs/song2.mp3",
      image: "/songs/song2.jpg",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      src: "/songs/song3.mp3",
      image: "/songs/song3.jpg",
    },
  ];

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(0.7);
  const [previousVolume, setPreviousVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentSongData = songs[currentSong];

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playPauseHandler = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playSelectedSong = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);

    setTimeout(() => {
      if (!audioRef.current) return;

      audioRef.current.volume = volume;
      audioRef.current.play();
    }, 100);
  };

  const nextSongHandler = () => {
    let nextIndex;

    if (shuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);

      if (songs.length > 1 && nextIndex === currentSong) {
        nextIndex = (nextIndex + 1) % songs.length;
      }
    } else {
      nextIndex = currentSong + 1;

      if (nextIndex >= songs.length) {
        nextIndex = 0;
      }
    }

    playSelectedSong(nextIndex);
  };

  const previousSongHandler = () => {
    let prevIndex = currentSong - 1;

    if (prevIndex < 0) {
      prevIndex = songs.length - 1;
    }

    playSelectedSong(prevIndex);
  };

  const volumeHandler = (e) => {
    const newVolume = Number(e.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = newVolume === 0;
    }

    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
      setPreviousVolume(newVolume);
    }
  };

  const muteHandler = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      const restoreVolume = previousVolume || 0.7;

      audioRef.current.muted = false;
      audioRef.current.volume = restoreVolume;

      setVolume(restoreVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);

      audioRef.current.muted = true;

      setVolume(0);
      setIsMuted(true);
    }
  };

  const loopHandler = () => {
    setLoop(!loop);
  };

  const shuffleHandler = () => {
    setShuffle(!shuffle);
  };

  const timeUpdateHandler = () => {
    if (!audioRef.current) return;

    setCurrentTime(audioRef.current.currentTime);
  };

  const loadedMetadataHandler = () => {
    if (!audioRef.current) return;

    setDuration(audioRef.current.duration);
    audioRef.current.volume = volume;
  };

  const progressClickHandler = (e) => {
    if (!audioRef.current || !progressRef.current || !duration) return;

    const progressWidth = progressRef.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / progressWidth) * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const songEndedHandler = () => {
    if (!loop) {
      nextSongHandler();
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] h-[88px] bg-black text-white px-3 sm:px-4 border-t border-[#181818]">
      <audio
        ref={audioRef}
        src={currentSongData.src}
        loop={loop}
        onEnded={songEndedHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={loadedMetadataHandler}
      />

      <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left Song Info */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={currentSongData.image}
            alt={currentSongData.title}
            className="w-14 h-14 rounded object-cover bg-[#282828]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="min-w-0">
            <h3 className="text-sm font-semibold truncate">
              {currentSongData.title}
            </h3>
            <p className="text-xs text-[#b3b3b3] truncate hover:text-white hover:underline cursor-pointer">
              {currentSongData.artist}
            </p>
          </div>
          <Tooltip text={"Add to playlist"}>
            <button className="hidden sm:flex  text-[#b3b3b3] items-center justify-center text-sm hover:text-white hover:border-white cursor-pointer">
              <CirclePlus size={18} />
            </button>
          </Tooltip>
        </div>

        {/* Center Controls */}
        <div className="flex flex-col items-center justify-center gap-2 w-[40vw] max-w-[650px] min-w-[280px]">
          <div className="flex items-center gap-4">
            <Tooltip
              text={
                Shuffle
                  ? `Enable Shuffle for ${currentSongData.title}`
                  : `Disable Shuffle for ${currentSongData.title}`
              }
            >
              <button
                onClick={shuffleHandler}
                className={`hover:scale-105 transition ${
                  shuffle
                    ? "text-[var(--spotify-green)]"
                    : "text-[#b3b3b3] hover:text-white cursor-pointer"
                }`}
              >
                <Shuffle size={18} />
              </button>
            </Tooltip>

            <Tooltip text={"Back"}>
              <button
                onClick={previousSongHandler}
                className="text-[#b3b3b3] hover:text-white hover:scale-105 transition cursor-pointer"
              >
                <SkipBack size={22} fill="currentColor" />
              </button>
            </Tooltip>

            <Tooltip text={isPlaying ? "Pause" : "Play"}>
              <button
                onClick={playPauseHandler}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition cursor-pointer"
              >
                {isPlaying ? (
                  <Pause size={22} fill="black" />
                ) : (
                  <Play size={22} fill="black" className="ml-[2px]" />
                )}
              </button>
            </Tooltip>

            <Tooltip text={"Next"}>
              <button
                onClick={nextSongHandler}
                className="relative text-[#b3b3b3] hover:text-white hover:scale-105 transition cursor-pointer"
              >
                <SkipForward size={22} fill="currentColor" />
              </button>
            </Tooltip>

            <Tooltip text={"loop"}>
              <button
                onClick={loopHandler}
                className={`hover:scale-105 transition ${
                  loop
                    ? "text-[var(--spotify-green)]"
                    : "text-[#b3b3b3] hover:text-white cursor-pointer"
                }`}
              >
                <Repeat size={18} />
              </button>
            </Tooltip>
          </div>

          <div className="flex items-center gap-3 w-full">
            <span className="text-xs text-[#b3b3b3] w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <div
              ref={progressRef}
              onClick={progressClickHandler}
              className="group flex-1 h-1 bg-[#4d4d4d] rounded-full cursor-pointer"
            >
              <div
                style={{ width: `${progressPercent}%` }}
                className="relative h-full bg-white group-hover:bg-[var(--spotify-green)] rounded-full"
              >
                <span className="hidden group-hover:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full"></span>
              </div>
            </div>

            <span className="text-xs text-[#b3b3b3] w-10">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center justify-end gap-3">
          <Tooltip text="Lyrics">
            <button className="text-[#b3b3b3] hover:text-white cursor-pointer">
              <Mic2 size={18} />
            </button>
          </Tooltip>

          <Tooltip text="Queue">
            <button className="text-[#b3b3b3] hover:text-white cursor-pointer">
              <ListMusic size={18} />
            </button>
          </Tooltip>

          <Tooltip text="Connect to a device">
            <button className="text-[#b3b3b3] hover:text-white cursor-pointer">
              <MonitorSpeaker size={18} />
            </button>
          </Tooltip>

          <Tooltip text={isMuted ? "Unmute" : "Mute"}>
            <button
              onClick={muteHandler}
              className="text-[#b3b3b3] hover:text-white cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={18} />
              ) : (
                <Volume2 size={18} />
              )}
            </button>
          </Tooltip>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeHandler}
            className="w-[95px] h-[5px] accent-white hover:accent-[var(--spotify-green)] cursor-pointer"
          />
          <Tooltip text="Enter Full Screen">
            <button className="text-[#b3b3b3] hover:text-white cursor-pointer">
              <Maximize2 size={18} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
