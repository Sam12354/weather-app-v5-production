import { useEffect, useState } from "react";
import { getMixedQuizResponse } from "../../api/mixedCategoriesQuiz";

export default function MixedCategoriesQuiz() {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(null)

    useEffect(() => {

        async function fetchMixedQuizQuestions() {

            try {

                const result = await getMixedQuizResponse()

                result.forEach(q => {
                    q.options = [q.correctAnswer, ...q.incorrectAnswers].sort(() => Math.random() - 0.5);
                });

                setQuestions(result)

            } catch (error) {

                console.log(error);

            }

        }
        fetchMixedQuizQuestions()

    }, [])

    const handleSelect = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer; 
        setAnswers(newAnswers); 
    }

    const handleSubmit = () => {

        let correctCount = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correctAnswer) correctCount++;
        });
        setScore(correctCount)

    }

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
                                    backgroundColor: answers[index] === opt ? "#e6f60b" : "#f0f0f0",
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