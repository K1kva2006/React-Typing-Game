import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Source } from "../App";

function PlayAgain() {
  const bodyBg = useRef(document.body);
  bodyBg.current.style.background = "rgb(100, 100, 255)";

  const source = useContext(Source);

  return (
    <>
      <div className="main-wrapper">
        <h2>თამაში დასრულდა</h2>
        <span className="playAgain">შენი ქულა: {source.score}</span>
        <span className="playAgain">
          შენი უმაღლესი ქულა: {source.highScore}
        </span>
        <span className="playAgain playAgainBtn">
          <Link to="/play">ხელახლა თამაში</Link>
        </span>
      </div>
    </>
  );
}

export default PlayAgain;
