import React, { createContext, Dispatch, SetStateAction } from "react";
import { Character } from "./models/Character";

const CharactersWithLikesContext = createContext<
  [Character[], Dispatch<SetStateAction<Character[]>>]
>([
  [],
  () => {
    return;
  }
]);

export default CharactersWithLikesContext;
