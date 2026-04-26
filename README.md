Weather Forecast App 🌤️

React app that shows a 5-day weather forecast with beautiful daily summaries — built to demonstrate API integration, routing, and reusable components.

Demo

To view the weather forecast page, head to:

http://localhost:5173/catalog

--

Features

Fetches 5-day weather forecast data from the OpenWeatherMap API

Displays daily weather summaries with icons, temperature, and descriptions

Clean, modular React components for easy maintenance and extension

React Router setup for scalable navigation

--

Status

⚠️ This project is still a work in progress! Some features are missing or incomplete — but the core weather display and API integration are fully functional.

--

Download or clone the project, then run:

npm install
npm run dev

--

Get an API key:

[Sign up at OpenWeatherMap](https://openweathermap.org/)

--

Create a .env file in the root directory and add your API key:

VITE_WEATHER_KEY=your_openweather_api_key_here

--

Run the app:

npm run dev

--

Open your browser at http://localhost:5173/catalog to see the weather forecast!

--

## 😂 Random Weather Meme

The app now fetches and displays a random meme to make the weather experience more fun and engaging.

**🚀 How It Works**

Fetches a random meme from the Meme API

Displays the meme image dynamically inside the app

Uses async fetch inside useEffect

Stores meme data in React state

Automatically loads a new meme on page load

**🧠 Tech Used**

External API integration

React useEffect

Async/Await

Dynamic image rendering

Clean state management

**🌐 API Used**

Meme API:
https://meme-api.com/gimme

**💡 What This Adds**

Makes the app more interactive

Adds personality to the UI

Demonstrates ability to work with multiple APIs in one project

--

## 🌠 Daily Motivation Quote

The app includes a “Reveal My Quote for Today” feature that displays a randomly generated motivational quote.

**🚀 How It Works**

Stores a collection of motivational quotes locally

Selects one quote randomly when the user clicks the button

Displays the quote dynamically in the UI

Hides the button after revealing the quote

Uses React state for conditional rendering

**🧠 Tech Highlights**

Random selection using Math.random()

Controlled UI behavior with useState

Conditional rendering (hideButton logic)

Clean component separation (quote logic in a separate API file)

**💡 Current Behavior**

The quote is randomly generated on button click

Refreshing the page allows a new quote to be generated

The feature simulates a “quote of the day” experience

⚠️ At the moment, the quote can be regenerated after a page refresh. In a future update, this will be enhanced to allow only one quote per day using persistent storage (e.g., localStorage).

--

## 🤖 AI Weather Chatbot (New Feature)

The app now includes an integrated AI-powered chatbot that allows users to interact directly within the weather app.

**🚀 How It Works**

Uses the OpenRouter API for AI-powered responses

Secure API key stored in environment variables

Sends user messages to the AI model and displays real-time responses

Shows a “Bot is typing…” indicator while waiting for a reply

Built with reusable React components and clean state management

**🧠 Tech Highlights**

Async API requests with fetch

Environment variable configuration via VITE_CHAT_BOT_KEY

Controlled input field

Dynamic message rendering

Conditional UI rendering (open/close chatbot)

Loading/typing state handling

**🔑 Setup (Chatbot)**

Create an account at OpenRouter

Generate an API key

Add it to your .env file:

VITE_CHAT_BOT_KEY=your_openrouter_api_key_here


Restart your dev server:

npm run dev

**💬 User Experience**

Click the "Chat Bot" button to open the assistant

Type a message and press Enter

The bot responds dynamically

Close and reopen anytime without refreshing the page

**⚠️ Notes**

The chatbot only responds after a user message is sent (no automatic API calls on page load)

Make sure your API key is valid and your .env file is properly configured

This feature demonstrates real-world API integration with conversational AI

--

## 🎙️ Voice Bot (Speech-to-Speech)

The app now includes a browser-based Voice Bot that allows users to speak into their microphone and receive an audio response in a selected AI voice.

**🚀 How It Works**

Uses the browser’s built-in SpeechRecognition API to convert speech to text

Sends the recognized text to the Speechify API

Receives an audio stream (Blob)

Plays the AI-generated voice response directly in the browser

No backend or Node.js server is required — everything runs client-side.

**🧠 Tech Highlights**

Browser SpeechRecognition API

External Speechify API integration

Audio streaming using Blob

URL.createObjectURL() for dynamic playback

React useRef for managing recognition instance

Environment variable security (VITE_VOICE_BOT_KEY)

**🔑 Setup (Voice Bot)**

Create an account with Speechify

Generate an API key

Add it to your .env file:

VITE_VOICE_BOT_KEY=your_speechify_api_key_here


Restart your development server:

npm run dev

**🎧 Features**

Click “Talk” to start recording

Click “Hang Up” to stop

AI repeats what the user says

The voice can be changed only in the component code by updating this line:

const botAudioBlob = await getVoiceBotResponse(text, "rob");

Available voices include (tested in the browser with test.js):
"rob", "lisa", "emily", "oliver", "jesse", "ken", "grady", "lela", etc.

To see all available voices, run the test.js script in your browser console. It will log all voice display names and IDs so you can pick any for the component.

Fully browser-based implementation

**⚠️ Notes**

Requires microphone permissions

Works only in browsers that support SpeechRecognition

Currently echoes the user's speech in an AI-generated voice

Future enhancement: connect Voice Bot with the AI Chatbot for intelligent spoken conversations
