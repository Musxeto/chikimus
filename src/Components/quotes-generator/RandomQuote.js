import React, { useState, useEffect } from "react";
import quotes from "./quotes";

function RandomQuote() {
  const [randomIndex, setRandomIndex] = useState(null);

  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setRandomIndex(newIndex);
  };

  const renderRandomQuote = () => {
    if (randomIndex !== null) {
      const randomQuote = quotes[randomIndex - 1];
      return (
        <div>
          <h3>
            {randomQuote.name} ({randomQuote.anime})
          </h3>
          <h2>{randomQuote.quote}</h2>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {renderRandomQuote()}
      <button onClick={getRandomQuote}>Random Quote</button>
    </div>
  );
}

export default RandomQuote;
