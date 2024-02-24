import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import Navbar from "./Components/nav-bar/NavHead";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function JJK() {
  return (
    <div className="App">
      <ThemesModal />
      <QuotesBody />
    </div>
  );
}

export default JJK;
