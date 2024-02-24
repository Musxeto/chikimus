import React, { useState } from "react";
import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import Navbar from "./Components/nav-bar/NavHead";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function App() {
  const [currentTheme, setCurrentTheme] = useState("");

  const handleThemeChange = (selectedTheme) => {
    setCurrentTheme(selectedTheme);
  };

  return (
    <div className={`App ${currentTheme}`}>
      <div>
        <Navbar />
        <ThemesModal onThemeChange={handleThemeChange} />
        <QuotesBody />
        <p>Theme: {currentTheme}</p>
      </div>
    </div>
  );
}

export default App;
