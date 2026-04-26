import { use, useEffect, useState } from "react";
import CatalogItem from "./catalog-item/CatalogItem";
import { getAll } from "../../api/weather-Api";
import { getFunFacts } from "../../api/funFacts";
import FunFactsItem from "./catalog-item/FunFactsItem";
import { getMeme } from "../../api/memes";
import { getquotesForToday } from "../../api/quotesForToday";
import { useNavigate } from "react-router-dom";


export default function Catalog() {

    const [items, setItems] = useState([]);
    const [funFacts, setFunfacts] = useState([]);
    // const [meme, setFunMeme] = useState({});
    const [quotes, setQuotes] = useState("");
    // empty string because storing one single quote, not a list.
    const [hideButton, setHideButton] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {

            try {

                const result = await getAll();
                const funFactsResult = getFunFacts();

                // map to turn API data into simple pieces your component can easily show on the screen.
                const transformed = result.map((item, index) => ({
                    _id: index.toString(),
                    // unique key so React can efficiently track and update each list item when rendering
                    day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
                    // Converts the timestamp from the API into a readable weekday name like "Monday" 
                    temperature: `${Math.round(item.temp.day)} ℃`,
                    image: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    description: item.weather[0].description
                }));



                setItems(transformed);
                setFunfacts(funFactsResult);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, []);

    // useEffect(() => {
    //     async function fetchMeme() {

    //         try {
    //             const result = await getMeme()

    //             setFunMeme(result)

    //             // map samo pri array a az iskam da mi vru6ta edin object, a sega prosto polzvam result.url za6toto vru6ta obect
    //         } catch (error) {
    //             console.log(error.message);
    //         }

    //     }
    //     fetchMeme()
    // }, [])

    return (
        <>
            <div className="main">
                <div className="facts-and-meme">

                    <div className="fun-facts-div">

                        <div className="forecast">
                            <h2 className="section-heading text-uppercase">Fun Facts</h2>
                        </div>
                        <div className="makeCSS">
                            <section className="page-section bg-light" id="portfolio">
                                <div className="container">
                                    <div className="row">
                                        {
                                            <FunFactsItem facts={funFacts} />
                                        }
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>

                    {/* <div className="memes">
                        <div className="meme-container">
                            <div className="meme-row">
                                {
                                    <img src={meme.url} />
                                }
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="forecast">
                    <h2 className="section-heading text-uppercase">Weather Forecast</h2>
                </div>

                <div className="quiz-buttons-on-main-page">

                    <div>
                        <button className="navigate-to-geography-quiz"
                            onClick={() => navigate("/geography-quiz")}
                        > 
                        Geography Quiz
                        </button>
                    </div>

                    <div>
                        <button className="navigate-to-geography-quiz"
                            onClick={() => navigate("/mixed-categories-quiz")}
                        > 
                        Knowledge Quiz
                        </button>
                    </div>
                </div>

                <div className="makeCSS">
                    <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                            <div className="row">
                                {
                                    items.map(item => <CatalogItem key={item._id} {...item} />)
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div className="button-luck">
                {!hideButton && (
                    <button
                        className="luck-btn"
                        onClick={() => {
                            setQuotes(getquotesForToday());
                            setHideButton(true); 
                        }}
                    >
                        Reveal My Quote for Today 🌠
                    </button>
                )}
                {quotes && <p className="quote">{quotes}</p>}
            </div>

        </>
    )
}