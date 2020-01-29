import React, { useState } from "react";
import { GlobalStyles } from "./core/GlobalStyles";
import { CharacterFavoriteList } from "./CharacterFavoriteList";
import { Dashboard } from "./Dashboard";
import { Router } from "@reach/router";
import CharactersWithLikesContext from "./core/charactersWithLikesContext";
import { Navbar } from "./shared/Navbar";
import { Character } from "./core/models/Character";
export const App = () => {
  const charactersWithLikesState = useState([] as Character[]);
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <CharactersWithLikesContext.Provider value={charactersWithLikesState}>
        <Router>
          <CharacterFavoriteList path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </CharactersWithLikesContext.Provider>
    </>
  );
};
