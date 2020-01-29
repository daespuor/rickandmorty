/** @jsx jsx */
import React, { ReactChild } from "react";
import { css, jsx } from "@emotion/core";

export const CharacterSelectionLayout = ({
  children
}: {
  children: ReactChild[];
}) => (
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
