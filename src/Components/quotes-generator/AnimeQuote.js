import React, { useState } from "react";
import quotes from "./quotes";

function NameQuote() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [anime, setAnime] = useState("");
  const [clicked, setClicked] = useState(false);

  const getRandomQuoteByAnime = () => {
    let attempts = 0;
    const maxAttempts = quotes.length;

    while (attempts < maxAttempts) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if (quotes[randomIndex].anime.toLowerCase() === anime.toLowerCase()) {
        setRandomQuote(quotes[randomIndex]);
        return;
      }
      attempts++;
    }

    setRandomQuote(null);
  };

  const handleInputChange = (event) => {
    setAnime(event.target.value);
  };

  const generateQuote = () => {
    getRandomQuoteByAnime();
    setClicked(true);
  };

  const renderRandomQuote = () => {
    if (!clicked) return;
    if (randomQuote !== null) {
      return (
        <div>
          <h3>
            {randomQuote.name} ({randomQuote.anime})
          </h3>
          <h2>{randomQuote.quote}</h2>
        </div>
      );
    }
    return <p>No quotes found for this anime.</p>;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter anime name"
        value={anime}
        onChange={handleInputChange}
      />
      <button onClick={generateQuote}>Get Random Quote</button>
      {renderRandomQuote()}
    </div>
  );
}

export default NameQuote;
