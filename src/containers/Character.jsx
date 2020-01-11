import React, { useState, useEffect, useContext } from "react";
import CharactersWithLikesContext from "../charactersWithLikesContext";
import { CharacterComponent } from "../components/CharacterComponent";

export const Character = () => {
  const [charactersWithlikes, setcharactersWithLikes] = useContext(
    CharactersWithLikesContext
  );

  const [character, setCharacter] = useState({});
  useEffect(() => {
    setCharacter({});
    const registry = getRandomInt(1, 493);
    fetch(`https://rickandmortyapi.com/api/character/${registry}`)
      .then(response => {
        return response.json();
      })
      .then(object => {
        setCharacter(object);
      });
  }, [charactersWithlikes]);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function onClick(character) {
    let newCharacters = [...charactersWithlikes];
    const index = charactersWithlikes.findIndex(
      characterWithLikes =>
        Number(characterWithLikes.id) === Number(character.id)
    );
    if (index !== -1) {
      newCharacters[index] = Object.assign({}, newCharacters[index], {
        count: newCharacters[index].count + 1
      });
    } else {
      newCharacters.push(Object.assign({}, character, { count: 1 }));
    }
    setcharactersWithLikes(newCharacters);
  }

  return (
    <>
      <CharacterComponent character={character} onClick={onClick} />
    </>
  );
};
