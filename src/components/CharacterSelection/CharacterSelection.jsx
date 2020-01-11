import React from "react";
import { Character } from "../../containers";
import { css } from "@emotion/core";

export const CharacterSelection = () => {
  return (
    <div
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
