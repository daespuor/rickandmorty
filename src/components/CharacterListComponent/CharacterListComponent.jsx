import React from "react";
import { CharacterItemList } from "../CharacterItemList";
import { css } from "@emotion/core";
export const CharacterListComponent = ({ characters }) => (
  <div
    css={css`
      text-align: center;
    `}
  >
    <h3>Top 10 Favorites Characters</h3>
    {characters.map((character, index) => {
      return (
        <CharacterItemList data={character} key={character.id} index={index} />
      );
    })}
  </div>
);
