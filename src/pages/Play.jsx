import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Source } from "../App";
import words from "../Words";

function Play() {
  const source = useContext(Source);

  const bodyBg = useRef(document.body);
  bodyBg.current.style.background = "rgb(100, 100, 255)";

  const navigatePlayAgain = useNavigate();

  const [value, setValue] = useState("");

  const [word, setWord] = useState(words[0]);
  const [time, setTime] = useState(60);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  useEffect(() => {
    if (word.toLowerCase() === value.trim().toLowerCase()) {
      setWord(words[Math.floor(Math.random() * words.length)]);
      source.setScore((prevScore) => (prevScore += 1));
      setValue("");
      setTime((prev) => (prev += 1));
      if (source.score >= source.highScore) {
        source.setHighScore(source.score);
        localStorage.setItem("highScore", source.score.toString());
      }
    }
  }, [value]);

  useEffect(() => {
    const TimeInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0) {
      navigatePlayAgain("/playagain");
      clearInterval(TimeInterval);
    }

    return () => {
      clearInterval(TimeInterval);
    };
  }, [time, source.score, source.highScore]);

  return (
    <>
      <div className="main-wrapper">
        <div className="game-wrapper">
          <span className="timer">
            დრო: <span>{time}</span>
          </span>
          <span className="word">სიტყვა: {word}</span>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input"
            placeholder="ჩაწერეთ სიტყვა აქ.."
          />
          <span className="score">ქულა: {source.score}</span>
          <span className="highScore">
            უმაღლესი ქულა: <span>{source.highScore}</span>
          </span>
          <li style={{ fontSize: 24 }}>
            <Link to={"/"}>უკან დაბრუნდება</Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Play;
