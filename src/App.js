import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import Navbar from "./Components/nav-bar/NavHead";
import QuoteBoard from "./Components/quotes-generator/QuoteBoard";
import ThemeSelector from "./Components/theme-selector/ThemeSelector";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ThemesModal />
        <QuotesBody mode={"op"} />
      </div>
    </div>
  );
}

export default App;
