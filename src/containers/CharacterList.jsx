import React, { useEffect, useState, useContext } from "react";
import { CharacterListComponent } from "../components/CharacterListComponent";
import CharactersWithLikesContext from "../charactersWithLikesContext";
export const CharacterList = () => {
  const [charactersWithLikes, setCharactersWithLikes] = useContext(
    CharactersWithLikesContext
  );
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(charactersWithLikes.sort(sortCharactersByLikes).slice(0, 10));
  }, [charactersWithLikes]);

  function sortCharactersByLikes(firstCharacter, secondCharacter) {
    return secondCharacter.count - firstCharacter.count;
  }
  return (
    <>
      <CharacterListComponent characters={characters} />
    </>
  );
};
