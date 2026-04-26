import { useRef, useState } from "react";
import { getVoiceBotResponse } from "../../api/voiceBot";

export default function VoiceBot() {

    const [recording, setRecording] = useState(false); // Tracks if the user is currently recording
    const recognitionRef = useRef(null); // Stores the SpeechRecognition instance... useRef doesn’t trigger a re-render

     // Function to start voice recording and send transcript to bot
    const sendVoiceMessage = () => {

        // Check if browser supports SpeechRecognition
        if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            alert("Speech recognition not supported in this browser."); // Alert user if unsupported
            return;
        }

        // Create a new SpeechRecognition instance
        // Get the browser's SpeechRecognition API (standard or webkit version) and create a new recognition instance

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = "en-US"; // Set language to English
        recognition.interimResults = false; // Only return final results
        recognition.maxAlternatives = 1; // Only keep the top result from speech recognition

        // Event triggered when speech is recognized
        recognition.onresult = async (event) => {
            const text = event.results[0][0].transcript; // Extract the recognized text
            const botAudioBlob = await getVoiceBotResponse(text, "lela"); // Send text to bot API and get audio
            // The bot supports many voices (e.g., "lisa", "emily", "rob", "oliver", "jesse", "ken", "grady", "lela" etc.).
            // The full list is long, so to see all available voices, run the `test.js` script in your browser console.
            // Then you can pick any voice from that output for the second argument here.
            if (!botAudioBlob) return; // Exit if API fails

            const botAudioUrl = URL.createObjectURL(botAudioBlob); // Create playable URL from audio Blob
            new Audio(botAudioUrl).play(); // Play the bot's audio response
        };

        recognition.onerror = () => setRecording(false); // Reset recording state on error
        recognition.onend = () => setRecording(false); // Reset recording state when speech recognition ends

        recognition.start(); // Start listening to user's speech
        recognitionRef.current = recognition; // Store instance for later stopping
        setRecording(true); // Set recording state to true

    };

    // Function to stop speech recognition
    const stopRecording = () => {
        if (recognitionRef.current) recognitionRef.current.stop(); // Stop the recognition instance
        setRecording(false); // Update recording state
    };

    return (
        <div className="voice-bot">
            {/* Button toggles between starting and stopping voice recording */}
            <button className="voice-bot-button" onClick={recording ? stopRecording : sendVoiceMessage}>
                {recording ? "Hang Up" : "Talk"} {/* Button text changes depending on recording state */}
            </button>
        </div>
    );

}

