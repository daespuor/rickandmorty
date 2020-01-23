import React from "react";
import { css } from "@emotion/core";
import { colors } from "../../colors";
export const Header = () => {
  return (
    <div
      css={css`
        padding: 10px;
        padding-bottom: 0;
        text-align: center;
      `}
    >
      <h1
        css={css`
          text-transform: uppercase;
          font-size: 3.75rem;
          margin-top: 10px;
          margin-bottom: 0;
          top: 10px;
        `}
      >
        Rick and Morty Favorites
      </h1>
      <h3
        css={css`
          text-transform: uppercase;
          font-size: 1.875rem;
          font-weight: 600;
          color: ${colors.$subtitleText};
          transform: skew(2deg);
          margin-top: 0;
          margin-bottom: 0;
          padding: 0px 0.25rem;
          background-color: ${colors.$backgroundLevel2};
          width: 50%;
          position: absolute;
          left: 25%;
          top: 120px;
        `}
      >
        Which one is your favorite?
      </h3>
    </div>
  );
};
