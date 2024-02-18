import React, { useState } from 'react';
import quotes from './quotes';

function NameQuote() {
  const [randomQuote, setRandomQuote] = useState(null);
  const [name, setName] = useState('');
  const [clicked, setClicked] = useState(false);

  const getRandomQuoteByName = () => {
    let attempts = 0;
    const maxAttempts = quotes.length;

    while (attempts < maxAttempts) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      if (quotes[randomIndex].name.toLowerCase() === name.toLowerCase()) {
        setRandomQuote(quotes[randomIndex]);
        return;
      }
      attempts++;
    }

    setRandomQuote(null);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const generateQuote = () => {
    getRandomQuoteByName();
    setClicked(true);
  };

  const renderRandomQuote = () => {
    if (!clicked) return; // Using !clicked instead of clicked === false
    if (randomQuote !== null) {
      return (
        <div>
          <h3>{randomQuote.name} ({randomQuote.anime})</h3>
          <h2>{randomQuote.quote}</h2>
        </div>
      );
    }
    return <p>No quotes found for this character.</p>;
  };
  
  return (
    <div>
      <input
        type='text'
        placeholder='enter character name'
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={generateQuote}>Get Random Quote</button>
      {renderRandomQuote()}
    </div>
  );
}

export default NameQuote;
