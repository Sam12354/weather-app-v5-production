const CHAT_BOT_SPECIAL_KEY = import.meta.env.VITE_CHAT_BOT_KEY;

export const getResponse = async (userMessage) => {

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${CHAT_BOT_SPECIAL_KEY}`,
            'HTTP-Referer': 'http://localhost:5173/catalog', // Optional. Site URL for rankings on openrouter.ai.
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "openrouter/free",
            messages: [
                {
                    role: 'user',
                    content: userMessage,
                },
            ],
        }),
    });

    if(!response.ok) {
        console.error('Chatbot error:', response.statusText);
        return
    }

    const data = await response.json()

    return data.choices[0].message.content

}
