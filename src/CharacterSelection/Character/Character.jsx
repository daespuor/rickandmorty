import React from "react";
import { Button } from "../../shared/Button";
import { Card, CardBody, CardHeader, CardImage, CardFade } from "./Card";

export const Character = ({ character, onClick }) => (
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
