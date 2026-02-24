import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-brand-dark flex items-center justify-center z-10">
          <motion.div
            className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-brand-dark-lighter flex items-center justify-center">
          <p className="text-brand-text-muted text-center">Video could not be loaded</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
