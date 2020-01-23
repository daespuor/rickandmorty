import React from "react";
import { Header } from "../Header";
import { CharactersContentLayout } from "../CharacterContentLayout";
import { CharacterSelection } from "../CharacterSelection";
import { CharacterList } from "../../containers";
import { Navbar } from "../Navbar";
export const CharacterFavoriteList = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CharactersContentLayout>
        <CharacterSelection />
        <CharacterList />
      </CharactersContentLayout>
    </>
  );
};
