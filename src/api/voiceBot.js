const VOICE_BOT_SPECIAL_KEY = import.meta.env.VITE_VOICE_BOT_KEY;

export const getVoiceBotResponse = async (textMessage, voice_id) => {

    const url = 'https://api.sws.speechify.com/v1/audio/stream';
    const options = {
        method: 'POST',
        headers: {
            Accept: 'audio/mpeg',
            Authorization: `Bearer ${VOICE_BOT_SPECIAL_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input: textMessage,
            "voice_id": voice_id
        })
    };

    try {
        const response = await fetch(url, options);

        if(!response.ok) {
            console.error('Voicebot error:', response.statusText);
            return
        }

        const audioBlob = await response.blob();
        return audioBlob;
    } catch (error) {
        console.error(error);
    }

}
// This function works **only in the browser** without Node.js or a server,
// because it uses fetch to get audio directly as a Blob instead of reading/writing files with fs.
