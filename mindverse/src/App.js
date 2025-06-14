import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MemoryGame from "./components/MemoryGame";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
         <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
