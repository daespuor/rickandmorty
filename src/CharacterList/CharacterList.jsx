import React, { useEffect, useState, useContext } from "react";
import CharactersWithLikesContext from "../core/charactersWithLikesContext";
import { CharacterItemList } from "./CharacterItemList";
export const CharacterList = () => {
  const [charactersWithLikes] = useContext(CharactersWithLikesContext);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(charactersWithLikes.sort(sortCharactersByLikes).slice(0, 10));
  }, [charactersWithLikes]);

  function sortCharactersByLikes(firstCharacter, secondCharacter) {
    return secondCharacter.count - firstCharacter.count;
  }
  return (
    <div>
      <h3>Top 10 Favorites Characters</h3>
      {characters.map(character => {
        return <CharacterItemList data={character} key={character.id} />;
      })}
    </div>
  );
};
