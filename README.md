🎬 REACT MOVIE HUB

A modern, responsive movie application built with React, featuring a dynamic Three.js particle background, movie search functionality via the TMDb API, and persistent local storage for managing user favorites.

✨ Features

Dynamic Search: Search and discover popular movies using real-time data from The Movie Database (TMDb) API.

Persistent Favorites: Use React Context and local storage to easily add and remove movies from a personalized favorites list.

Interactive Background: A smooth, immersive, and interactive 3D particle nebula powered by Three.js and an ambient soundscape using Tone.js.

Routing: Seamless navigation between the Home (Search) page and the Favorites list using react-router-dom.

Component-Based: Clean, modular structure using functional React components and hooks.

🛠️ Tech Stack

Frontend: React (Functional Components & Hooks)

Styling: Custom CSS

State Management: React Context API & useState/useEffect

3D Visualization: Three.js

Audio: Tone.js

Routing: react-router-dom

Data Source: The Movie Database (TMDb) API

🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

Prerequisites

You need to have Node.js and npm/yarn installed on your computer.

Installation

Clone the Repository:

git clone [https://github.com/Mihirkool/REACT-MOVIE.git](https://github.com/Mihirkool/REACT-MOVIE.git)
cd REACT-MOVIE/frontend


(Note: Assuming your React code lives in the frontend subdirectory)

Install Dependencies:

npm install
# OR
yarn install


Setup API Key (Optional but Recommended):
The app requires an API key from TMDb. You should define this key in your application's service layer (src/services/api.js or similar) where API calls are made.

Run the Application:
Start the development server. The application will typically open at http://localhost:3000.

npm run dev 
# OR (depending on your project setup)
npm start


📂 Project Structure

The core components of the application are organized as follows:

REACT-MOVIE/
└── frontend/
    └── src/
        ├── components/
        │   ├── InteractiveBackground.jsx  # Three.js Visualization & Tone.js
        │   ├── MovieCard.jsx            # Displays movie data and favorite button
        │   └── NavBar.jsx
        ├── contexts/
        │   └── MovieContext.jsx         # Manages global favorites state (local storage persistence)
        ├── pages/
        │   ├── Favourites.jsx           # Displays list of saved favorites
        │   └── Home.jsx                 # Search page
        ├── css/
        │   └── *.*css                   # Styling files
        ├── services/
        │   └── api.js                   # Functions for fetching data from TMDb
        └── App.jsx                      # Main router and component layout


🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements, feature additions, or bug fixes, please open an issue or submit a pull request.
