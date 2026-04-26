import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VoicePassword() {

    const [talk, setTalk] = useState(false);
    const navigate = useNavigate();

    const secretPhrase = "unlock"; // “voice password”

    const voiceMessage = () => {

        if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
            alert("Speech recognition not supported in this browser."); // Alert user if unsupported
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        // window.SpeechRecognition is the standard Web Speech API implementation
        // window.webkitSpeechRecognition is the older Chrome-specific version
        const recognition = new SpeechRecognition();
        // SpeechRecognition is a class, and the instance (recognition) is the object that actually listens to the microphone and handles speech events

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript.toLowerCase(); // get the text

            if (spokenText === secretPhrase.toLowerCase()) {
                alert("Access granted! 🔓");
                navigate("/paypal"); // unlock page
            } else {
                alert("Wrong password ❌");
            }

        };

        recognition.lang = "en-US";

        recognition.onerror = () => setTalk(false);
        recognition.onend = () => setTalk(false);

        recognition.start();
        setTalk(true);

    }

    return (
        <div className="talk-main">
            <button className="voice-password-button" onClick={voiceMessage}>
                {talk ? "Listening…" : "Voice Password"}
            </button>
        </div>
    )

}