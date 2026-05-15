import "./App.css";
import StartScreen from "./components/StartScreen";
import { useState, useEffect, useCallback } from "react";
import { wordsList } from "./data/word";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

function App() {
  const guessQtd = 3;

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

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessQtd);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category);
    console.log(word);

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLettersStates();

    const { word, category } = pickWordAndCategory();
    let wordLetter = word.split("").map((l) => l.toLowerCase());
    console.log(wordLetter);
    console.log(word, category);
    setPickedWord(word);

    setPickedCategory(category);
    setLetters(wordLetter);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended.
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check if win conditon.
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore + 100);
      //restart game with new word.
      startGame();
    }
  }, [guessedLetters]);

  const retry = () => {
    setScore(0);
    setGuesses(guessQtd);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
