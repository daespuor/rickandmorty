import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import { CharacterFavoriteList } from "./components/CharacterFavoriteList";
import {Dashboard} from './components/Dashboard';
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
    </>
  );
};
