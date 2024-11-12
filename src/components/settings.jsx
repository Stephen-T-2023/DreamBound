import AudioPlayer from "./AudioPlayer";

export default function Settings({ onClose, visible }) {
    // If the settings is not visible, return null (do not do anything)
    if (!visible) return null;

    return (
        // settings modal, with a semi-transparent background
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-wrap justify-center items-center">
            <div className="bg-ash rounded w-10/12 h-4/6 flex flex-wrap justify-center items-center">
                {/* Header for the settings modal */}
                <div className="font-heading text-8xl w-full flex justify-center">Settings</div>
                
                {/* Subtitle for the audio settings section */}
                <div className="font-heading text-5xl w-full flex justify-center">Audio Settings</div>
                
                {/* AudioPlayer component to control audio playback */}
                <AudioPlayer />
                
                {/* Button to close the settings modal */}
                <button onClick={onClose} className="w-full">Exit Settings</button>
            </div>
        </div>
    );
}
