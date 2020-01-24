import React, { useState } from "react";
import { GlobalStyles } from "./core/GlobalStyles";
import { CharacterFavoriteList } from "./CharacterFavoriteList";
import { Dashboard } from "./Dashboard";
import { Router } from "@reach/router";
import CharactersWithLikesContext from "./core/charactersWithLikesContext";
import { Navbar } from "./shared/Navbar";
export const App = () => {
  const charactersWithLikesState = useState([]);
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
