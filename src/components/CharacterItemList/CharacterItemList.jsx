import React from "react";
import {
  ListItem,
  ListItemLeft,
  ListItemImage,
  ListItemText
} from "../ListItem";
export const CharacterItemList = ({ data, index }) => {
  const { image, name, count } = data;
  return (
    <ListItem>
      <ListItemLeft>
        <ListItemImage src={image} name={name} />
        <b>{name}</b>
      </ListItemLeft>
      <ListItemText>{count}</ListItemText>
    </ListItem>
  );
};
