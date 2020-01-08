import React from "react";
import CharacterSelection from "./characterSelection";
import CharacterList from "./characterList";
import { css } from "@emotion/core";
import { colors } from "./colors";
const CharactersContent = () => (
  <div
    css={css`
      background-color: ${colors.$backgroundLevel2};
      color: ${colors.$internalText};
      margin: 10px;
      padding-bottom: 20px;
    `}
  >
    <CharacterSelection />
    <CharacterList />
  </div>
);

export default CharactersContent;
