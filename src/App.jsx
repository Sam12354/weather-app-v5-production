import { Routes, Route } from 'react-router-dom'
import Catalog from './components/catalog/Catalog'
import ChatBot from './components/chatbot/ChatBot'
import VoiceBot from './components/voicebot/VoiceBot'
import PayPal from './components/paypal/Paypal'
import FaceLogin from './components/face-login/FaceLogin'
import Memes from './components/memes/Memes'
import VoicePassword from './components/voice-password/VoicePassword'
import QuizGeography from './components/quiz/QuizGeography'
import MixedCategoriesQuiz from './components/mixed-categories-quiz/MixedCategoriesQuiz'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Catalog />
                        <ChatBot />
                        <VoiceBot />
                        <FaceLogin />
                        <VoicePassword />
                    </>
                } />

                <Route path="/paypal" element={<PayPal />}  />
                <Route path="/memes" element={<Memes />} />
                <Route path="/geography-quiz" element={<QuizGeography />} />
                <Route path="/mixed-categories-quiz" element={<MixedCategoriesQuiz />} />
            </Routes>
        </>
    )
}

export default App
