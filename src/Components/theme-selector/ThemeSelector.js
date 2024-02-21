// ThemeSelector.js
import React from "react";
import { Link } from "react-router-dom";

const ThemeSelector = () => {
  return (
    <div className="theme-selector">
      <label>Select Theme:</label>
      <div className="anime-logos">
        <a href="/naruto">
          <img src="/naruto-logo.png" alt="Naruto Logo" />
        </a>
        <a href="/jjk">
          <img src="/jjk-logo.png" alt="JJK Logo" />
        </a>
        <a href="/bleach">
          <img src="/bleach-logo.png" alt="One Piece Logo" />
        </a>
        <a href="/demonslayer">
          <img src="/demonslayer-logo.png" alt="Demon Slayer Logo" />
        </a>
        <a href="/evangelion">
          <img src="/evangelion-logo.png" alt="Evangelion Logo" />
        </a>
      </div>
    </div>
  );
};

export default ThemeSelector;
