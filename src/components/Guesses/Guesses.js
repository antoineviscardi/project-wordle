import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guess={guesses[i]}></Guess>
      ))}
    </div>
  );
}

export default Guesses;
