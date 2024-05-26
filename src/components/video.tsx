import { Play } from "lucide-react";
import { useState, useRef } from "react";

interface VideoProps {
  width?: string | "w-full";
  height?: string | "h-full";
  videoSrc?: string;
}

export default function Video({ width, height, videoSrc }: VideoProps) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayButtonClick = () => {
    setIsOverlayVisible(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.controls = true;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full h-full">
      {isOverlayVisible && (
        <>
          <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black opacity-65"></div>
          <div className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col justify-center gap-2 font-bold">
            <button
              className="bg-gray-800 bg-opacity-45 rounded-full p-4 flex items-center justify-center"
              onClick={handlePlayButtonClick}
            >
              <Play size={"50"} />
            </button>
            <span className="text-2xl">
              Dê o play e conheça melhor as soluções SEL
            </span>
          </div>
        </>
      )}

      <video
        ref={videoRef}
        style={{ width: "100%", maxWidth: "100%", height: "auto" }}
        preload="auto"
        autoPlay
        muted
        loop
      >
        <source src={videoSrc} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
