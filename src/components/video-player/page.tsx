



//@ts-ignore
//@ts-nocheck
'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Chapter {
  time: number;
  title: string;
}

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  className?: string;
  poster?: string;
  chapters?: Chapter[];
}

export const VideoPlayer = ({
  src,
  autoPlay = false,
  loop = false,
  showControls = false,
  poster = "/assets/images/thumbnail.png",
  className = "",
  chapters = []
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [showSpeedOptions, setShowSpeedOptions] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();
  const speedOptions = [0.5, 1, 1.5, 2];

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
      // Set initial playback rate
      videoRef.current.playbackRate = playbackRate;
    }
  };



  const startProgressTimer = () => {
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        
        // Update active chapter based on current time
        if (chapters.length > 0) {
          const newChapter = chapters.findIndex((chap, index) => {
            const nextChapterTime = chapters[index + 1]?.time || duration;
            return videoRef.current!.currentTime >= chap.time && 
                   videoRef.current!.currentTime < nextChapterTime;
          });
          if (newChapter !== -1 && newChapter !== activeChapter) {
            setActiveChapter(newChapter);
          }
        }
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

  const handleChapterClick = (chapterIndex: number) => {
    if (videoRef.current && chapters[chapterIndex]) {
      videoRef.current.currentTime = chapters[chapterIndex].time;
      setCurrentTime(chapters[chapterIndex].time);
      setActiveChapter(chapterIndex);
    }
  };

  const changePlaybackRate = (rate: number) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
    setShowSpeedOptions(false);
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
        poster={poster}
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
          {/* Chapter progress bar (if chapters exist) */}
          {/* {chapters.length > 0 && (
            <div className="w-full h-1.5 flex bg-gray-600/50">
              {chapters.map((chapter, index) => {
                const nextChapterTime = chapters[index + 1]?.time || duration;
                const chapterDuration = nextChapterTime - chapter.time;
                const chapterPercentage = (chapterDuration / duration) * 100;
                
                return (
                  <div 
                    key={index}
                    className={`h-full ${index === activeChapter ? 'bg-red-500' : 'bg-gray-400'}`}
                    style={{ width: `${chapterPercentage}%` }}
                    onClick={() => handleChapterClick(index)}
                  />
                );
              })}
            </div>
          )} */}
          
          {/* Time progress bar */}
          <div className="w-full h-2 mb-6 ">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1.5 mt-[-100px] appearance-none bg-transparent cursor-pointer"
              style={{
                background: `linear-gradient(to right, #919191 ${(currentTime / (duration || 1)) * 100}%, transparent 0%)`
              }}
            />
          </div>
          
          <div className="w-full px-4 pb-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* <button onClick={togglePlay} className="text-white">
                {isPlaying ? (
                  <Image src="/assets/icons/pause-icon.svg" alt="Pause" width={16} height={16} />
                ) : (
                  <Image src="/assets/icons/play-icon.svg" alt="Play" width={16} height={16} />
                )}
              </button> */}
              
              <div className="relative">
                <button 
                  onClick={() => setShowSpeedOptions(!showSpeedOptions)}
                  className="text-white text-xs px-2 py-1 bg-gray-700 rounded"
                >
                  {playbackRate}x
                </button>
                
                {showSpeedOptions && (
                  <div className="absolute bottom-full left-0 mb-2 bg-gray-800 rounded shadow-lg z-10">
                    {speedOptions.map((rate) => (
                      <button
                        key={rate}
                        onClick={() => changePlaybackRate(rate)}
                        className={`block w-full text-left px-3 py-1 text-white text-xs hover:bg-gray-700 ${
                          rate === playbackRate ? 'bg-[#FF4733]' : ''
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            {/* Chapter title display */}
            {chapters.length > 0 && chapters[activeChapter] && (
              <span className="text-white text-xs truncate max-w-[150px]">
                {chapters[activeChapter].title}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};