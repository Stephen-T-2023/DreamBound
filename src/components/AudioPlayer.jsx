import React from 'react';
import { useAudio } from './AudioContext';

const AudioPlayer = () => {
  // values from the AudioContext to manage audio state and volume
  const { isPlaying, togglePlayPause, volume, handleVolumeChange } = useAudio();

  return (
    // main container for the audio player, with styling for layout and appearance
    <div className='bg-ash rounded-xl flex flex-wrap justify-center w-1/6 font-heading text-1xl'>
      
      {/* button to toggle between play and pause states, dynamically displaying the text based on isPlaying state */}
      <button onClick={togglePlayPause} className='border-2 border-black w-full'>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* volume control slider, allowing the user to adjust the audio volume */}
      <div className='w-full flex justify-center'>
        <label>Volume: </label>
        
        {/* input range for volume control, with values between 0 and 1, adjusted by small steps */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
