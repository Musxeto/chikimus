import React, { useState, useEffect } from "react";
import quotes from "./quotes";

function QuoteBoard() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randomIndex]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue("");
    setQuote("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchQuote = () => {
    console.log("Fetching quote...");
    console.log("Selected option:", selectedOption);
    console.log("Input value:", inputValue);
    if (!quotes || !Array.isArray(quotes)) {
      setQuote("Error: Quotes data is not available.");
      return;
    }

    if (selectedOption === "anime") {
      const filteredQuotes = quotes.filter(
        (q) => q.anime.toLowerCase() === inputValue.toLowerCase()
      );

      if (filteredQuotes && filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        setQuote(filteredQuotes[randomIndex]);
      } else {
        setQuote(`No quotes found for anime: ${inputValue}`);
      }
    } else if (selectedOption === "character") {
      const filteredQuotes = quotes.filter(
        (q) => q.name.toLowerCase() === inputValue.toLowerCase()
      );

      if (filteredQuotes && filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        setQuote(filteredQuotes[randomIndex]);
      } else {
        setQuote(`No quotes found for character: ${inputValue}`);
      }
    } else {
      console.log("No option selected.");
      setQuote("");
    }
  };

  const handleDoneClick = () => {
    setSelectedOption(null);
  };

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchQuote();
    }
  }, [inputValue, selectedOption]);

  return (
    <div>
      <div>
        <h3>
          {quote.name} {quote.anime}
        </h3>
        <h2>{quote.quote}</h2>
      </div>

      {(selectedOption === "anime" || selectedOption === "character") && (
        <div>
          <input
            type="text"
            placeholder={`Enter ${
              selectedOption === "anime" ? "anime" : "character"
            } name`}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleDoneClick}>Done</button>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleOptionClick("anime")}>
          Fetch by Anime
        </button>
        <button onClick={() => handleOptionClick("character")}>
          Fetch by Character
        </button>
      </div>
    </div>
  );
}

export default QuoteBoard;
