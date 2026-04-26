import { useEffect, useState } from "react";
import { getResponse } from "../../api/chatBot";
import Message from "./message/Message";

export default function ChatBot() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    // useEffect(() => {

    //     async function fetchData() {

    //         try {

    //             const result = await getResponse();

    //             setMessages(prev => [
    //                 ...prev,
    //                 { _id: Date.now(), content: result }
    //             ]);

    //         } catch (error) {
    //             console.log(error.message);
    //         }

    //     }

    //     fetchData()
    // }, []);

    // the bot should only respond after the user sends a message, 
    // and useEffect was calling the API with no input on page load, which broke the request and caused the errors.

    const sendMessage = async (e) => {
        e.preventDefault();

        const trimmed = input.trim();

        if (!trimmed) {
            return
        }

        // Add user message
        setMessages(prev => [...prev, { _id: Date.now(), content: trimmed }]);
        setInput('');

        setIsTyping(true)

        // Get bot reply and add it
        const botReply = await getResponse(trimmed);
        setMessages(prev => [...prev, { _id: Date.now() + 1, content: botReply }]);
        setIsTyping(false)
    }

    return (

        <>
            <div>
                {isOpen ? (
                    <div className="parent-chat-bot-main">
                        <div className="chat-bot-main">
                            <div className="row">
                                {
                                    messages.map(msg => <Message key={msg._id} {...msg} />)
                                }
                            </div>
                        </div>

                        {isTyping && <div className="typing-indicator">Bot is typing...</div>}
                        
                        <form onSubmit={sendMessage}>
                            <input
                                type="text"
                                placeholder="Type message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </form>

                        <button 
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                        >
                        ❌
                        </button>

                    </div>
                    

                ) : (
                    <button 
                    className="chat-button" 
                    onClick={() => setIsOpen(true)}
                    >
                    Chat Bot
                    </button>
                )}
            </div>
        </>

    )

}