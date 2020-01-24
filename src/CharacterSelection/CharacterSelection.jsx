import React, { useContext, useState, useEffect } from "react";
import { Character } from "./Character";
import { CharacterSelectionLayout } from "./CharacterSelectionLayout";
import CharactersWithLikesContext from "../core/charactersWithLikesContext";

export const CharacterSelection = () => {
  const [charactersWithlikes, setcharactersWithLikes] = useContext(
    CharactersWithLikesContext
  );

  const [firstCharacter, setFirstCharacter] = useState({});
  const [secondCharacter, setSecondCharacter] = useState({});
  useEffect(() => {
    setFirstCharacter({});
    setSecondCharacter({});
    getCharacter(setFirstCharacter);
    getCharacter(setSecondCharacter);
  }, [charactersWithlikes]);

  function getCharacter(setCharacter) {
    const registry = getRandomInt(1, 493);
    fetch(`https://rickandmortyapi.com/api/character/${registry}`)
      .then(response => {
        return response.json();
      })
      .then(object => {
        setCharacter(object);
      });
  }

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
    <CharacterSelectionLayout>
      <Character character={firstCharacter} onClick={onClick} />
      <Character character={secondCharacter} onClick={onClick} />
    </CharacterSelectionLayout>
  );
};
