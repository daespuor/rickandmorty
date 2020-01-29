import React, { FunctionComponent } from "react";
import { Header } from "./Header";
import { CharactersContentLayout } from "../shared/CharacterContentLayout";
import { CharacterSelection } from "../CharacterSelection";
import { CharacterList } from "../CharacterList";
import { RouteComponentProps } from "@reach/router";
export const CharacterFavoriteList: FunctionComponent<{
  path: string;
}> = () => {
  return (
    <>
      <Header />
      <CharactersContentLayout>
        <CharacterSelection />
        <CharacterList />
      </CharactersContentLayout>
    </>
  );
};
