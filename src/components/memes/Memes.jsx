import { useEffect, useState } from "react";
import { getMeme } from "../../api/memes";

export default function Memes() {
    const [meme, setFunMeme] = useState({});

    useEffect(() => {
        async function fetchMeme() {

            try {
                const result = await getMeme()

                setFunMeme(result)

            } catch (error) {
                console.log(error.message);
            }

        }
        fetchMeme()
    }, [])

    return (

        <div className="memes">
            <div className="meme-container">
                <div className="meme-row">
                    {
                        <img src={meme.url} />
                    }
                </div>
            </div>
        </div>
    )
}