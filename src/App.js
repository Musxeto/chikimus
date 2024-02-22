import "./App.css";
import Navbar from "./Components/nav-bar/NavHead";
import ThemeSelector from "./Components/theme-selector/ThemeSelector";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <ThemesModal />
      </div>
    </div>
  );
}

export default App;
