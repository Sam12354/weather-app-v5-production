import { useEffect, useState } from "react";
import { getQuizResponse } from "../../api/quiz-api";

export default function QuizGeography() {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]); // track user answers
    const [score, setScore] = useState(null);

    useEffect(() => {

        async function fetchQuizQuestions() {

            try {

                const result = await getQuizResponse()

                result.forEach(q => {
                    q.options = shuffleArray([q.correctAnswer, ...q.incorrectAnswers]);
                });
            // shuffle once when data comes from the API, save it in q.options, and React just displays it without changing it again

                setQuestions(result)
            } catch (error) {
                console.log(error);

            }

        }
        fetchQuizQuestions()

    }, [])

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    const handleSelect = (index, answer) => {
        const newAnswers = [...answers]; // copy existing answers
        newAnswers[index] = answer;      // set the selected answer
        setAnswers(newAnswers);          // update state
    };

    const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correctAnswer) correctCount++;
        });
        setScore(correctCount);
    };

    // {String.fromCharCode(65 + i)}. {opt}
    // turns the button number into a letter: 0 = A, 1 = B, 2 = C, 3 = D, so each answer shows like “A. …”, “B. …” on the button
    return (
        <div className="geography-quiz">
            {questions.map((q, index) => {
                return (
                    <div className="geography-quiz-div-buttons" key={index}>
                        <p>{q.question.text}</p>
                        {q.options.map((opt, i) => (
                            <button className="geography-quiz-answer-buttons"
                                key={i}
                                onClick={() => handleSelect(index, opt)}
                                style={{
                                    backgroundColor: answers[index] === opt ? "#d3f8d3" : "#f0f0f0",
                                }}
                            >
                                {String.fromCharCode(65 + i)}. {opt}
                            </button>
                        ))}
                    </div>
                );
            })}
            <div className="score-and-button-div">
                <button className="geography-quiz-button" onClick={handleSubmit}>Submit</button>
                {score !== null && <p className="score-paragraph-geography">Score: {score}/{questions.length}</p>}
            </div>
        </div>
    );

}