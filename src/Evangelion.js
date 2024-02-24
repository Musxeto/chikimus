import "./App.css";
import QuotesBody from "./Components/main-body/QuotesBody";
import ThemesModal from "./Components/theme-selector/ThemesModal";

function Evangelion() {
  return (
    <div className="App">
      <ThemesModal />
      <QuotesBody />
    </div>
  );
}

export default Evangelion;
