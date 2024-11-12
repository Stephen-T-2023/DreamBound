import React, { createContext, useState, useRef, useContext } from 'react';

// Create an AudioContext to be shared across components
const AudioContext = createContext();

// Custom hook to access the audio context easily in other components
export const useAudio = () => {
  return useContext(AudioContext);
};

// AudioProvider component that wraps the application and provides audio functionality
export const AudioProvider = ({ children }) => {

  // tracks if the audio is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  // controls the audio volume, defaulting to 0.5 (50%)
  const [volume, setVolume] = useState(0.5);

  // Create a reference to the Audio object to control playback
  const audioRef = useRef(new Audio('../src/assets/background_loop.mp3'));

  // Ensure the audio file loops continuously during playback
  audioRef.current.loop = true;

  // Function to toggle between playing and pausing the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();  // Pause the audio if it's playing
    } else {
      audioRef.current.play();   // Play the audio if it's paused
    }
    setIsPlaying(!isPlaying);    // Update the isPlaying state
  };

  // Function to force play the audio (useful for scenarios like starting the game)
  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();  // Start playing the audio if not already playing
    } else {
      audioRef.current.play();  // Ensure the audio keeps playing
    }
    setIsPlaying(true);  // Set the state to indicate that audio is playing
  };

  // Function to handle volume changes, updating both the volume state and the actual audio volume
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);  // Get the new volume from the range input
    setVolume(newVolume);                          // Update the volume state
    audioRef.current.volume = newVolume;           // Set the audio element's volume
  };

  // Value object that contains all the states and functions to be shared across components
  const value = {
    isPlaying,
    volume,
    togglePlayPause,
    togglePlay,
    handleVolumeChange,
  };

  // Provide the audio context to child components
  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};
