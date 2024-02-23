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
    setSelectedOption("random");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchQuote();
    }
  }, [inputValue, selectedOption]);

  return (
    <div className="Quotes-Box container">
      <div className="quote-container container mt-5">
        <div className="quote-box p-4 border rounded">
          <h1>A N I M E Q U O T E S G E N E R A T O R</h1>
          <h2 className="mb-3">{quote.quote}</h2>
          <p className="mb-0">{quote.name}</p>
          <p className="mb-0">{quote.anime}</p>
        </div>

        {(selectedOption === "anime" || selectedOption === "character") && (
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder={`Enter ${
                selectedOption === "anime" ? "anime" : "character"
              } name`}
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={handleDoneClick}>
              Done
            </button>
          </div>
        )}

        <div className="mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => handleOptionClick("anime")}
          >
            Fetch by Anime
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleOptionClick("character")}
          >
            Fetch by Character
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteBoard;
