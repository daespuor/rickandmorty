import React, { useState } from "react";
import { render } from "react-dom";
import CharactersWithLikesContext from "./charactersWithLikesContext";
import GlobalStyles from "./globalStyles";
import Header from "./header";
import CharactersContent from "./charactersContent";
const App = () => {
  const charactersWithLikesState = useState([]);
  return (
    <CharactersWithLikesContext.Provider value={charactersWithLikesState}>
      <GlobalStyles />
      <Header />
      <CharactersContent />
    </CharactersWithLikesContext.Provider>
  );
};

render(<App />, document.getElementById("container"));
