import React from "react";
import { CharacterSelection } from "../CharacterSelection";
import { CharacterList } from "../../containers";
import { css } from "@emotion/core";
import { colors } from "../../colors";
export const CharactersContentLayout = () => (
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
