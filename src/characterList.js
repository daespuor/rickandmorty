import React, { useEffect, useState, useContext } from "react";
import CharacterItemList from "./characterItemList";
import { css } from "@emotion/core";
import CharactersWithLikesContext from "./charactersWithLikesContext";
const CharacterList = () => {
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
    <div
      className="characterList"
      css={css`
        text-align: center;
      `}
    >
      <h3>Top 10 Favorites Characters</h3>
      {characters.map((character, index) => {
        return (
          <CharacterItemList
            data={character}
            key={character.id}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
