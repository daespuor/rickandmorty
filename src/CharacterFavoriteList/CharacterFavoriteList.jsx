import React from "react";
import { Header } from "./Header";
import { CharactersContentLayout } from "../shared/CharacterContentLayout";
import { CharacterSelection } from "../CharacterSelection";
import { CharacterList } from "../CharacterList";
export const CharacterFavoriteList = () => {
  return (
    <>
      <Header />
      <CharactersContentLayout>
        <CharacterSelection />
        <CharacterList />
      </CharactersContentLayout>
    </>
  );
};
