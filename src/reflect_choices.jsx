// ReflectChoicesScene.jsx

import { useNavigate, useLocation } from "react-router-dom";

const ReflectChoicesScene = () => {
    const navigate = useNavigate(); // Used to navigate between pages
    const location = useLocation(); // Used to access the state passed via navigation (in this case, the choices history)

    // Retrieves the choices history from the navigation state, or an empty array if no history exists.
    const choicesHistory = location.state?.choicesHistory || [];

    // Function to navigate back to the main menu when the user clicks the "Return to Main Menu" button.
    const returnToMenu = () => {
        navigate('/'); // Navigates to the home page ("/")
    };

    return (
        // Outer div for background styling, making the scene fullscreen and centering the content
        <div className="bg-starrysky w-screen h-screen flex justify-center items-center">
            {/* Main content area with background image, padding, and text styling */}
            <div className="bg-onyx text-ash border-2 border-black rounded-xl p-10 space-y-4 text-center w-11/12 max-w-screen-md opacity-90 font-body">
                {/* Title of the page */}
                <h1 className="font-heading text-6xl">Your Journey</h1>

                {/* Conditional rendering: If choicesHistory exists and has at least one choice, show the list of choices. */}
                {choicesHistory.length > 0 ? (
                    <>
                        {/* Subheading to explain the list of choices */}
                        <h2 className="font-body text-2xl">The choices you made:</h2>

                        {/* List of choices the player made during the game */}
                        <div className="h-2/3 max-h-[calc(100vh*2/3)] overflow-y-auto"> {/* This div will allow scrolling */}
                            <ul className="text-left list-disc list-inside">
                                {choicesHistory.map((choice, index) => (
                                    <li key={index}>
                                        {/* Display the story text and the user's choice */}
                                        <strong className="text-body">{choice.storyText}</strong> {/* The narrative text when the choice was made */}
                                        <br />
                                        <em className="text-body">You chose: {choice.choice}</em> {/* The specific option the user selected */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    /* If no choices were made, display a fallback message */
                    <p className="font-body text-2xl">No choices were recorded during your journey.</p>
                )}

                {/* Button to allow the user to return to the main menu */}
                <button 
                    onClick={returnToMenu} 
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded p-4 mt-4 focus:bg-buttonpressed"
                >
                    Return to Main Menu
                </button>
            </div>
        </div>
    );
}

export default ReflectChoicesScene;
