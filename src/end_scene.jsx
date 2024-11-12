import { useNavigate } from "react-router-dom";

const EndScene = () => {
    const navigate = useNavigate();

    const restartGame = () => {
        navigate('/'); // Navigates back to the main menu
    };

    return (
        <div className="bg-starrysky w-screen h-screen flex justify-center items-center">
            <div className="bg-onyx text-ash border-2 border-black rounded-xl p-10 space-y-4 text-center opacity-90">
                <h1 className="font-heading text-6xl">The End</h1>
                <p className="font-body text-2xl">Your journey has reached its conclusion. Thank you for playing</p>
                <button 
                    onClick={restartGame} 
                    className="bg-outerspace text-whitesmoke border-2 border-black rounded p-4 mt-4 focus:bg-buttonpressed"
                >
                    Return to Main Menu
                </button>
            </div>
        </div>
    );
}

export default EndScene;
