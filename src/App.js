import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import Navbar from "./Components/nav-bar/NavHead";
import QuoteBoard from "./Components/quotes-generator/QuoteBoard";
import ThemeSelector from "./Components/theme-selector/ThemeSelector";
import ThemesModal from "./Components/theme-selector/ThemesModal";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <ThemesModal />
          <QuotesBody />
        </div>
      </div>
    </Router>
  );
}

export default App;
