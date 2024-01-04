import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import words from "../Words";

function Play() {
  const bodyBg = useRef(document.body);
  bodyBg.current.style.background = "rgb(100, 100, 255)";

  function handleRefresh() {
    window.location.reload();
  };

  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(words[0]);
  const [time, setTime] = useState(60);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem("highScore");
    return storedHighScore ? Number(storedHighScore, 10) : 0;
  });


  const inputRef = useRef(null);
  const wordRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  useEffect(() => {
    if (word.toLowerCase() === value.trim().toLowerCase()) {
      setWord(words[Math.floor(Math.random() * words.length)]);
      setScore((prevScore) => (prevScore += 1));
      setValue("");
      setTime((prev) => (prev += 1));
      if (score >= highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score.toString());
      }
    }
  }, [value]);

  useEffect(() => {
    const TimeInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time < 40) {
      timeRef.current.style.color = "orange";
    }

    if (time === 0) {
      clearInterval(TimeInterval);
      inputRef.current.remove();
      wordRef.current.remove();
    }

    return () => {
      clearInterval(TimeInterval);
    };
  }, [time, score, highScore]);

  return (
    <>
      <div className="main-wrapper">
        <div className="game-wrapper">
          <span className="timer">
            დრო: <span ref={timeRef}>{time}</span>
          </span>
          <span ref={wordRef} className="word">
            სიტყვა: {word}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input"
            placeholder="ჩაწერეთ სიტყვა აქ.."
          />
          <span className="score">ქულა: {score}</span>
          <span className="highScore">
            უმაღლესი ქულა: <span>{highScore}</span>
          </span>
          <li style={{ fontSize: 20 }} onClick={handleRefresh}>
            ხელახლა თამაში
          </li>
          <li style={{ fontSize: 24 }}>
            <Link to={"/"}>უკან დაბრუნდება</Link>
          </li>
        </div>
      </div>
    </>
  );
}

export default Play;
