import React from "react";

import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOverStatus, setGameOverStatus] = React.useState(null);

  function handleNewGuess(guess) {
    console.log("new guess", guess);
    const guessResult = checkGuess(guess, answer);
    const nextGuesses = [...guesses, guessResult];
    setGuesses(nextGuesses);

    const isWin = guessResult.every(({ status }) => status === "correct");
    if (isWin) {
      console.log("win");
      setGameOverStatus("win");
    } else if (nextGuesses.length >= 6) {
      console.log("lose");
      setGameOverStatus("lose");
    }
  }

  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <GuessInput
        isDisabled={!!gameOverStatus}
        onSubmitGuess={(guess) => handleNewGuess(guess)}
      ></GuessInput>

      {gameOverStatus && (
        <GameOverBanner
          status={gameOverStatus}
          numGuesses={guesses.length}
          answer={answer}
        ></GameOverBanner>
      )}
    </>
  );
}

export default Game;
