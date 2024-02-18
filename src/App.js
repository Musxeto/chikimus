import './App.css';
import RandomQuote from './Components/RandomQuote';
import NameQuote from './Components/NameQuote';
import AnimeQuote from './Components/AnimeQuote';
function App() {
  
  return (
    <div className="App">
      <AnimeQuote />
      <NameQuote />
      <RandomQuote />
    </div>
  );
}

export default App;