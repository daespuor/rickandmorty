import React from "react";
import { css } from "@emotion/core";

export const CharacterSelectionLayout = ({ children }) => (
  <div
    css={css`
      width: 100%;
      padding: 5px;
      display: flex;
      justify-content: center;
    `}
  >
    {children}
  </div>
);
