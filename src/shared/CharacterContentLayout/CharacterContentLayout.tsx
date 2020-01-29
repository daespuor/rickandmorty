/** @jsx jsx */
import React, { ReactChild } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../colors";
export const CharactersContentLayout = ({
  children
}: {
  children: ReactChild[] | ReactChild;
}) => (
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
