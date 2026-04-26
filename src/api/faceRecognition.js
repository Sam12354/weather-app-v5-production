import * as faceapi from "face-api.js";

export const loadModels = async () => {
    const MODEL_URL = "/models";

    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
};

// Assuming the models reside in public/models:
// https://github.com/justadudewhohacks/face-api.js?tab=readme-ov-file

// await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
// accordingly for the other models:
// await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
// await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
// ...

export const detectFace = async (video) => {
    const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()) // get descriptor
        .withFaceLandmarks()
        .withFaceDescriptor();

    return detection;
};