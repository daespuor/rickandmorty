import React from "react";
import { css } from "@emotion/core";
import { colors } from "./colors";
const CharacterItemList = ({ data, index }) => {
  const { image, name, count } = data;
  return (
    <div
      className="characterItemList"
      css={css`
        display: flex;
        justify-content: space-between;
        border: 0px solid #000;
        border-radius: 10px;
        width: 50%;
        margin: auto;
        margin-top: 15px;
        background-color: ${colors.$backgroundLevel3};
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <img
          src={image}
          alt={`list-${name}`}
          css={css`
            width: 100px;
            height: 100px;
            margin-right: 10px;
          `}
        />
        <b>{name}</b>
      </div>
      <b
        css={css`
          color: ${colors.$subtitleText};
          font-size: 3em;
          font-weight: bold;
          position: relative;
          right: 100px;
          top: 15px;
        `}
      >
        {count}
      </b>
    </div>
  );
};

export default CharacterItemList;
