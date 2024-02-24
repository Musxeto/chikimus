import Navbar from "./Components/nav-bar/NavHead";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Naruto from "./Naruto";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/naruto" element={<Naruto />} />
          <Route path="/jjk" element={<JJK />} />
          <Route path="/bleach" element={<Bleach />} />
          <Route path="/demonslayer" element={<DemonSlayer />} />
          <Route path="/evangelion" element={<Evangelion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
