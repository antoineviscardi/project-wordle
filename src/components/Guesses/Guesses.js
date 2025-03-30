import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, idx) => (
        <p key={idx} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
