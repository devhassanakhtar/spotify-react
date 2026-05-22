import React, { useEffect, useRef, useState } from "react";
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
import { usePlayer } from "../../context/PlayerContext";

const AudioPlayer = () => {
  const {
    audioRef,
    currentSong,
    queue,
    isPlaying,
    setIsPlaying,
    playPause,
    nextSong,
    previousSong,
  } = usePlayer();

  const progressRef = useRef(null);

  const [volume, setVolume] = useState(0.7);
  const [previousVolume, setPreviousVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const defaultSong = {
    title: "Choose a song",
    artist: "No song playing",
    image: "",
    src: "",
  };

  const currentSongData = currentSong || defaultSong;

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.loop = loop;
  }, [loop, audioRef]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
      nextSong();
    }
  };

  const shuffleHandler = () => {
    setShuffle(!shuffle);
  };

  const loopHandler = () => {
    setLoop(!loop);
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
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {currentSongData.image ? (
            <img
              src={currentSongData.image}
              alt={currentSongData.title}
              className="w-14 h-14 rounded object-cover bg-[#282828]"
            />
          ) : (
            <div className="w-14 h-14 rounded bg-[#282828]"></div>
          )}

          <div className="min-w-0">
            <h3 className="text-sm font-semibold truncate">
              {currentSongData.title}
            </h3>

            <p className="text-xs text-[#b3b3b3] truncate hover:text-white hover:underline cursor-pointer">
              {currentSongData.artists?.join(", ") || currentSongData.artist}
            </p>
          </div>

          <Tooltip text={"Add to playlist"}>
            <button className="hidden sm:flex text-[#b3b3b3] items-center justify-center text-sm hover:text-white hover:border-white cursor-pointer">
              <CirclePlus size={18} />
            </button>
          </Tooltip>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-[40vw] max-w-[650px] min-w-[280px]">
          <div className="flex items-center gap-4">
            <Tooltip text={shuffle ? "Disable shuffle" : "Enable shuffle"}>
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
                onClick={previousSong}
                disabled={queue.length === 0}
                className="text-[#b3b3b3] hover:text-white hover:scale-105 transition cursor-pointer disabled:opacity-40"
              >
                <SkipBack size={22} fill="currentColor" />
              </button>
            </Tooltip>

            <Tooltip text={isPlaying ? "Pause" : "Play"}>
              <button
                onClick={playPause}
                disabled={!currentSong}
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition cursor-pointer disabled:opacity-40"
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
                onClick={nextSong}
                disabled={queue.length === 0}
                className="relative text-[#b3b3b3] hover:text-white hover:scale-105 transition cursor-pointer disabled:opacity-40"
              >
                <SkipForward size={22} fill="currentColor" />
              </button>
            </Tooltip>

            <Tooltip text={loop ? "Disable loop" : "Enable loop"}>
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
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </Tooltip>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={volumeHandler}
            className="w-24 accent-white cursor-pointer"
          />

          <Tooltip text="Full screen">
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