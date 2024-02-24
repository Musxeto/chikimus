import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function Bleach() {
  return (
    <div className="App">
      <ThemesModal />
      <QuotesBody />
    </div>
  );
}

export default Bleach;
