import React from "react";
import Character from "./character";
import { css } from "@emotion/core";

const CharacterSelection = () => {
  return (
    <div
      className="characterSelection"
      css={css`
        width: 100%;
        padding: 5px;
        display: flex;
        justify-content: center;
      `}
    >
      <Character />
      <Character />
    </div>
  );
};

export default CharacterSelection;
