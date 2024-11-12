import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Settings from "./components/settings";
import { useAudio } from './components/AudioContext';

const Menu = () => {

    // navigate function allows for a button to smoothly change the page
    const navigate = useNavigate();

    // when the button is pressed, it will navigate the user to the choices screen
    const startClick = () => {
            setTimeout ( () => {
            navigate('/choice')
            },
        250)} //numner

    // allows the audio to be toggled (play or pause) upon clicking the associated button
    const { togglePlay } = useAudio();
    
    // controls the state for the visibility of the settings page
    const [showSettings, setShowSettings] = useState(false);

    // closes the settings page when called
    const handleonClose = () => setShowSettings(false);

    return (
        // menu screen, setting up full-screen layout and centering elements
        <div className="bg-onyx w-screen h-screen flex flex-wrap justify-center items-center">
            
            {/* holds all the buttons and the game title, with layout and styling */}
            <div className="bg-paynegrey border-2 border-black rounded w-11/12 h-5/6 space-y-2 flex flex-wrap justify-center">
                
                {/* empty div used for layout purposes */}
                <div className="bg-paynegrey"></div>

                {/* game title section with styling for centered text */}
                <div className="bg-starrysky text-ash border-2 border-black rounded-xl w-8/12 h-32 gap-4 flex justify-center items-center">
                    <h1 className="font-heading 2xl:text-8xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-6xl text-4xl">DreamBound</h1>
                </div>

                {/* start game button that navigates to the choices screen and toggles audio when clicked */}
                <button 
                    onClick={() => {
                        startClick();  // navigate to '/choice'
                        togglePlay();  // play audio
                    }}  
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center focus:bg-buttonpressed"
                >
                    <h2 className="font-heading 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl">Start Game</h2>
                </button>

                {/* settings button that opens the settings */}
                <button 
                    onClick={() => setShowSettings(true)} 
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center focus:bg-buttonpressed"
                >
                    <h2 className="font-heading 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl">Settings</h2>
                </button>

                {/* link to GitHub profile, opening in a new tab */}
                <a 
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded font-heading 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl w-8/12 h-24 gap-4 flex justify-center items-center focus:bg-buttonpressed" 
                    href="https://github.com/Stephen-T-2023" 
                    target="blank"
                >
                    Github
                </a>

                {/* exit game button, not currently functional but styled like other buttons */}
                <button 
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded w-8/12 h-24 gap-4 flex justify-center items-center focus:bg-buttonpressed"
                >
                    <h2 className="font-heading 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl">Exit Game</h2>
                </button>
            </div>

            {/* settings component, controlled by showSettings state */}
            <Settings onClose={handleonClose} visible={showSettings} />
        </div>
    );
}

export default Menu;
