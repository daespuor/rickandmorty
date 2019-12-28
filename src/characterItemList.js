import React from "react";
import { css } from "@emotion/core";
const CharacterItemList = ({ data }) => {
  const { image, name, count } = data;
  return (
    <div
      className="characterItemList"
      css={css`
        display: flex;
        justify-content: space-between;
        border: 1px solid #000;
        border-radius: 3px;
        width: 50%;
        margin: auto;
        margin-top: 15px;
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
      <b>{count}</b>
    </div>
  );
};

export default CharacterItemList;
