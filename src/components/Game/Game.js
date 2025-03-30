import React from "react";

import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    console.log("new guess", guess);
    const guessResult = checkGuess(guess, answer);
    setGuesses([...guesses, guessResult]);
  }

  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <GuessInput onSubmitGuess={(guess) => handleNewGuess(guess)}></GuessInput>
    </>
  );
}

export default Game;
