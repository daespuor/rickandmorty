import React from "react";
import { css } from "@emotion/core";
import { colors } from "../../colors";
export const CharactersContentLayout = ({ children }) => (
  <div
    css={css`
      background-color: ${colors.$backgroundLevel2};
      color: ${colors.$internalText};
      margin: 10px;
      padding-bottom: 20px;
    `}
  >
    {children}
  </div>
);
