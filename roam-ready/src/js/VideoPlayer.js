import React, { useState, useEffect, useRef } from 'react';
import '../css/constants.css'
import '../css/common.css'
import '../css/hero.css'
import travelVideo1 from '../videos/travelVideo1.mp4'
import travelVideo2 from '../videos/travelVideo2.mp4'
import travelVideo3 from '../videos/travelVideo3.mp4'

function VideoPlayer() {
  const videos = [travelVideo1, travelVideo2, travelVideo3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Event listener for when the video has loaded enough data
      const handleLoadedData = () => {
        videoElement.play().catch((error) => console.error("Error playing video: ", error));
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);

      // Load the new source
      videoElement.load();

      return () => {
        // Remove event listener when component unmounts or video changes
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [currentVideoIndex]);

  return (
    <video
      ref={videoRef}
      width="750"
      height="750"
      autoPlay
      muted
      onEnded={playNextVideo}
    >
      <source src={videos[currentVideoIndex]} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
