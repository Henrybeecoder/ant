//@ts-ignore
//@ts-nocheck
'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  className?: string;
}

export const VideoPlayer = ({
  src,
  autoPlay = false,
  loop = false,
  showControls = false,
  className = ""
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        clearInterval(progressInterval.current);
      } else {
        videoRef.current.play();
        startProgressTimer();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const startProgressTimer = () => {
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    return () => {
      clearInterval(progressInterval.current);
    };
  }, []);

  return (
    <div className={`relative group ${className}`} style={{ aspectRatio: '16/9' }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setIsPlaying(true);
          startProgressTimer();
        }}
        onPause={() => {
          setIsPlaying(false);
          clearInterval(progressInterval.current);
        }}
        className="w-full h-full shadow-lg object-cover"
        style={{
          border: "0.5px solid #FFFFFF",
          boxShadow: "-4px 26px 27px 0px #080808D9",
        }}
        onClick={togglePlay}
      />
      
      {/* Center play/pause button */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity"
        onClick={togglePlay}
      >
        <div className="relative group overflow-hidden text-white lg:px-6 px-4 lg:py-3 py-2 hover:bg-[#151515] transition-all">
          <div className="w-full h-full flex flex-row items-center">
            <Image
              src={isPlaying ? '/assets/icons/pause-icon.svg' : '/assets/icons/play-icon.svg'}
              alt={isPlaying ? "Pause" : "Play"}
              width={20}
              height={20}
            />
            <p className="ml-2 lg:text-base text-[0.8rem]">
              {isPlaying ? "Tap to Pause" : "Tap to Play"}
            </p>
          </div>
          <span className="absolute top-0 left-0 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b-[0.5px] border-l-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
          <span className="absolute top-0 right-0 w-2 h-2 border-t-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-[0.5px] border-r-[0.5px] border-[#b1b1b1] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out"></span>
        </div>
      </div>
      
      {/* Bottom controls bar */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/80 to-transparent">
          <div className="w-full h-full px-4 flex flex-col justify-center">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1 mb-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};