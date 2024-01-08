import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import Menu from "./pages/Menu";
import Rules from "./pages/Rules";
import Play from "./pages/Play";
import PlayAgain from "./pages/PlayAgain";

export const Source = createContext(null);

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem("highScore");
    return storedHighScore ? Number(storedHighScore, 10) : 0;
  });

  return (
    <>
      <Source.Provider value={{ score, setScore, highScore, setHighScore }}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/play" element={<Play />} />
          <Route path="/playagain" element={<PlayAgain />} />
        </Routes>
      </Source.Provider>
    </>
  );
}

export default App;
