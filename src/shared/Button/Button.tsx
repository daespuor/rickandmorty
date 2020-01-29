/** @jsx jsx */
import React, { ReactChild } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../colors";

export const Button = ({
  children,
  onClick
}: {
  children: ReactChild;
  onClick: () => void;
}) => (
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
    onClick={onClick}
  >
    {children}
  </button>
);
