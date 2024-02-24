import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import Navbar from "./Components/nav-bar/NavHead";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function DemonSlayer() {
  return (
    <div className="App">
      <ThemesModal />
      <QuotesBody />
    </div>
  );
}

export default DemonSlayer;
