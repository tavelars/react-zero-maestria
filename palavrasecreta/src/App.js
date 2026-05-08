import "./App.css";
import StartScreen from "./components/StartScreen";
import { useState, useEffect, useCallback } from "react";
import { wordsList } from "./data/word";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category);
    console.log(word);

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    let wordLetter = word.split("").map((l) => l.toLowerCase());
    //console.log(wordLetter);
    //console.log(word, category);
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetter);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
