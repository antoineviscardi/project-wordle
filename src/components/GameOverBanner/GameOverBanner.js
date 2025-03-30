import React from "react";

function GameOverBanner({ status, numGuesses, answer }) {
  if (status === "win") {
    return (
      <div className="happy banner">
        <b>Congrats! </b>
        You got it in {numGuesses} guesses.
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <b>Oh no... </b>
        The correct answer was {answer}.
      </div>
    );
  }
}

export default GameOverBanner;
