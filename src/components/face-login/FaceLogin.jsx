import { useEffect, useRef, useState } from "react";
import { loadModels, detectFace } from "../../api/faceRecognition";
import { useNavigate } from "react-router-dom";

export default function FaceLogin() {

    const videoRef = useRef(null);
    const [status, setStatus] = useState("Loading AI models...");
    const navigate = useNavigate();

    useEffect(() => {
        start();
    }, []);

    const start = async () => {
        await loadModels();

        setStatus("Starting camera...");

        const stream = await navigator.mediaDevices.getUserMedia({
            // navigator.mediaDevices.getUserMedia() is a built-in Web API from the browser
            video: true
        });

        videoRef.current.srcObject = stream;

        setStatus("Camera ready. Detecting face...");
    };

    const checkFace = async () => {
        const result = await detectFace(videoRef.current);

        if (result) {
            setStatus("Face detected! 🔓 Secret mode unlocked");
            navigate("/memes");
        } else {
            setStatus("No face detected");
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Face Login</h2>

            <video
                ref={videoRef}
                autoPlay
                muted
                width="400"
                height="300"
                style={{ borderRadius: "10px" }}
            />

            <br /><br />

            <button onClick={checkFace}>
                Scan Face
            </button>

            <p>{status}</p>
        </div>
    );
}