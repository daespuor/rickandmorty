import React from "react";
import { Button } from "../Button";
import { Card, CardBody, CardHeader, CardImage, CardFade } from "../Card";

export const CharacterComponent = ({ character, onClick }) => (
  <Card>
    {character.image && (
      <CardFade isFadeIn={character.image}>
        <CardHeader>
          <CardImage src={character.image} />
        </CardHeader>
        <CardBody>
          <h3>{character.name}</h3>
          <Button onClick={() => onClick(character)}>Like</Button>
        </CardBody>
      </CardFade>
    )}
  </Card>
);
