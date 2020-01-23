import React, { useState } from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { CharacterFavoriteList } from "./components/CharacterFavoriteList";
import { Dashboard } from "./components/Dashboard";
import { Router } from "@reach/router";
import CharactersWithLikesContext from "./charactersWithLikesContext";
export const App = () => {
  const charactersWithLikesState = useState([]);
  return (
    <>
      <GlobalStyles />
      <CharactersWithLikesContext.Provider value={charactersWithLikesState}>
        <Router>
          <CharacterFavoriteList path="/" />
          <Dashboard path="/dashboard" />
        </Router>
      </CharactersWithLikesContext.Provider>
    </>
  );
};
