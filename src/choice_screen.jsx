import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Settings from "./components/settings";
import textData from './assets/textData';

const Choices = () => {

    // allows for navigation from the choices page to the main menu on button press
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/');
    };

    // manages the state to control the visibility of the settings page
    const [showSettings, setShowSettings] = useState(false);
    const handleonClose = () => setShowSettings(false);

    // sets the initial text content on the screen and updates as options are selected
    const [textFill, setTextFill] = useState(textData.start);

    // stores the URL of the background image for the choices page in case a feature where the background can change wants to be added in the future
    const imageURL = (textFill.backgroundImage);

    // track the users choice history
    const [choicesHistory, setChoicesHistory] = useState([]);

    // updates the displayed text and options based on the user's choice, if a valid path exists
    const handleOptionClick = (nextPath, selectedOption) => {
        setTimeout( () => {
            if (nextPath === null) {
                if (selectedOption === "Reflect on Choices.") {
                    navigate('/reflect', {state: {choicesHistory} });
                } else {
                    navigate('/choice');
                }
            } else if (nextPath && textData[nextPath]) {
                setChoicesHistory(prevChoices => [
                    ...prevChoices,
                    {choice: selectedOption, storyText: textFill.text}
                ]);
                setTextFill(textData[nextPath]); 
            } else {
                console.log("No further path available.");
            }},
        250)// timeout numner
    };

    return (
        // setting the background and layout
        <div className="w-screen h-screen flex flex-wrap justify-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${imageURL})`}}>
            
            {/* top navigation bar with Home, Github, and Settings buttons */}
            <div className="font-heading 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl w-full h-20 flex">
                <button onClick={homeClick} className="bg-ash border-2 border-black rounded w-1/2 h-20 focus:bg-buttonpressed">Home</button>
                <button onClick={() => setShowSettings(true)} className="bg-ash border-2 border-black rounded w-1/2 h-20 focus:bg-buttonpressed">Settings</button>
                <a className="bg-ash border-2 border-black rounded w-1/2 h-20 flex justify-center items-center focus:bg-buttonpressed" href="https://github.com/Stephen-T-2023" target="blank">Github</a>
            </div>

            {/* main text display area, showing story content and options */}
            <div className="bg-no-repeat bg-cover bg-center bg-fixed w-screen h-4/6 flex flex-wrap justify-center items-center">
                <div className="bg-buttonpressed opacity-90 border-2 border-black rounded w-11/12 h-5/6 flex justify-center">
                    <h1 className="font-body 2xl:text-2xl xl:text-2xl lg:text-1xl md:text-1xl sm:text-1xl text-1xl overflow-y-auto text-whitesmoke p-4 break-keep flex justify-center items-center">{textFill.text}</h1>
                </div>
            </div>

            {/* option buttons, allowing the user to make choices to progress the story */}
            <div className="flex flex-wrap w-10/12 h-20">
                <button 
                    className="bg-outerspace border-2 border-black rounded font-heading 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-1xl sm:text-1xl text-1xl text-whitesmoke w-1/3 h-full focus:bg-buttonpressed"
                    onClick={() => handleOptionClick(textFill.option1path, textFill.option1text)}
                >
                    {textFill.option1text}
                </button>
                <div className="w-1/3 h-full"/>
                <button 
                    className="bg-outerspace border-2 border-black rounded font-heading 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-1xl sm:text-1xl text-1xl text-whitesmoke w-1/3 h-full focus:bg-buttonpressed"
                    onClick={() => handleOptionClick(textFill.option2path, textFill.option2text)} 
                >
                    {textFill.option2text}
                </button>
            </div>
            <Settings onClose={handleonClose} visible={showSettings} />
        </div>
    );
};

export default Choices;