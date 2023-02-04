import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing costume made components
import Header from "./Header";
import SelectPage from "./pages/SelectPage";
import Footer from "./Footer";

// Importing the style file
import "../css/App.css";

// Creating the App component
const App = () => {
  // Setting up state
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState("");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Header score={score} />
        <Routes>
          <Route
            exact
            path="/"
            element={<SelectPage setSelection={setUserSelection} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// Exporting the App component
export default App;
