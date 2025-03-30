import React from "react";

function GuessInput({ onSubmitGuess, isDisabled = false }) {
  let [value, setValue] = React.useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmitGuess(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label>
        Enter guess:
        <input
          type="text"
          required={true}
          maxLength={5}
          pattern="[A-Z]{5}"
          title="5 letter word"
          value={value}
          disabled={isDisabled}
          onChange={(ev) => setValue(ev.target.value.toUpperCase())}
        />
      </label>
    </form>
  );
}

export default GuessInput;
