import React from "react";
import {
  ListItem,
  ListItemLeft,
  ListItemImage,
  ListItemText
} from "./ListItem";
import { Character } from "../../core/models/Character";
export const CharacterItemList = ({ data }: { data: Character }) => {
  const { image, name, count } = data;
  return (
    <ListItem>
      <ListItemLeft>
        <ListItemImage src={image} name={name} />
        <b>{name}</b>
      </ListItemLeft>
      <ListItemText>{count ? count : 0}</ListItemText>
    </ListItem>
  );
};
