import React, { useEffect, useState, useContext } from "react";
import CharactersWithLikesContext from "../core/charactersWithLikesContext";
import { CharacterItemList } from "./CharacterItemList";
import { Character } from "../core/models/Character";
export const CharacterList = () => {
  const [charactersWithLikes] = useContext(CharactersWithLikesContext);
  const [characters, setCharacters] = useState([] as Character[]);
  useEffect(() => {
    setCharacters(charactersWithLikes.sort(sortCharactersByLikes).slice(0, 10));
  }, [charactersWithLikes]);

  function sortCharactersByLikes(
    firstCharacter: Character,
    secondCharacter: Character
  ): number {
    if (!secondCharacter.count || !firstCharacter.count) {
      return 0;
    }
    return secondCharacter.count - firstCharacter.count;
  }
  return (
    <div>
      <h3>Top 10 Favorites Characters</h3>
      {characters.map((character: Character) => {
        return <CharacterItemList data={character} key={character.id} />;
      })}
    </div>
  );
};
