const VOICE_BOT_SPECIAL_KEY = import.meta.env.VITE_VOICE_BOT_KEY;

fetch('https://api.sws.speechify.com/v1/voices', {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${VOICE_BOT_SPECIAL_KEY}`
    }
})
    .then(res => res.json())
    .then(voices => {
        console.log('All voices:', voices);
        voices.forEach(v => console.log('Display Name:', v.display_name, 'Voice ID:', v.id));
    })
    .catch(err => console.error('Error fetching voices:', err));

// test.js
// This script fetches all available Speechify voices and logs their display names and IDs.
// Tested in browser console to verify voice IDs before using them in the app.