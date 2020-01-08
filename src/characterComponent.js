import React from "react";
import { css, keyframes } from "@emotion/core";
import { colors } from "./colors";

const fadeIn = keyframes`
    0%{
      opacity: 0;
    },
    100%{
      opacity:1;
    }
  `;
const fadeOut = keyframes`
    0%{
        opacity: 1;
      },
      100%{
        opacity:0;
      }
  `;
const CharacterComponent = ({ character, onClick }) => (
  <div
    className="character"
    css={css`
      padding: 0;
      border: 1px solid #000;
      border-radius: 10px;
      margin: 20px 0px;
      text-align: center;
      min-width: 300px;
      min-height: 380px;
      overflow: hidden;
    `}
  >
    {character.image && (
      <div
        className="character-content"
        css={css`
          animation: ${character.image ? fadeIn : fadeOut} linear 3s;
          width: 300px;
        `}
      >
        <img
          src={character.image}
          css={css`
            width: 100%;
            height: 300px;
            border-radius: 10px 10px 0px 0px;
          `}
        />
        <div
          css={css`
            background-color: ${colors.$backgroundLevel3};
            height: 80px;
            margin-top: -10px;
            padding-top: 10px;
            color: ${colors.$internalText};
          `}
        >
          <h3>{character.name}</h3>
          <button
            css={css`
              background-color: ${colors.$subtitleButton};
              padding: 10px;
              margin-top: 10px;
              border: 1px solid ${colors.$subtitleButton};
              border-radius: 5px;
              width: 150px;
              cursor: pointer;
              font-weight: bold;
              font-size: 1.2em;
              position: relative;
              bottom: 100px;
              &:hover {
                color: ${colors.$internalText};
              }
            `}
            onClick={() => onClick(character)}
          >
            Like
          </button>
        </div>
      </div>
    )}
  </div>
);

export default CharacterComponent;
