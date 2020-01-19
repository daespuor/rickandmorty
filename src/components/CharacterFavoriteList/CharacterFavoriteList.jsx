import React, { useState } from "react";
import CharactersWithLikesContext from "../../charactersWithLikesContext";
import { Header } from "../Header";
import { CharactersContentLayout } from "../CharacterContentLayout";
import { CharacterSelection } from "../CharacterSelection";
import { CharacterList } from "../../containers";
export const CharacterFavoriteList = () => {
  const charactersWithLikesState = useState([]);
  return (
    <CharactersWithLikesContext.Provider value={charactersWithLikesState}>
      <Header />
      <CharactersContentLayout>
        <CharacterSelection />
        <CharacterList />
      </CharactersContentLayout>
    </CharactersWithLikesContext.Provider>
  );
};
