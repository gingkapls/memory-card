import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  console.log("score: ", score);
  console.log("high score: ", highScore);
  return (
    <>
      <h1>Pokemon Memory game!</h1>
      <h3>Score: {score}</h3>
      <h3>High Score: {highScore}</h3>

      <CardList
        number={10}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
