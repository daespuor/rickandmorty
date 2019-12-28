import React from "react";
import { render } from "react-dom";
import CharacterSelection from "./characterSelection";
import CharacterList from "./characterList";
import { css } from "@emotion/core";
const App = () => {
  return (
    <div
      css={css`
        padding: 30px;
        text-align: center;
        margin: 0px;
      `}
    >
      <h1>Rick and Morty Favorites</h1>
      <h3>Which one is your favorite?</h3>
      <CharacterSelection />
      <CharacterList />
    </div>
  );
};

render(<App />, document.getElementById("container"));
