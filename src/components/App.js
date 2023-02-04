import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing costume made components
import Header from "./Header";

// Importing the style file
import '../css/App.css'

// Creating the App component
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Header />
      </div>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
