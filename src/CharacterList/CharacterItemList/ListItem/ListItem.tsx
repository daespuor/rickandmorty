/** @jsx jsx */
import React, { ReactChild, ReactText } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../../colors";

export const ListItem = ({ children }: { children: ReactChild[] }) => (
  <div
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
    {children}
  </div>
);

export const ListItemLeft = ({ children }: { children: ReactChild[] }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    {children}
  </div>
);

export const ListItemImage = ({ src, name }: { src: string; name: string }) => (
  <img
    src={src}
    alt={`list-${name}`}
    css={css`
      width: 100px;
      height: 100px;
      margin-right: 10px;
    `}
  />
);

export const ListItemText = ({ children }: { children: ReactText }) => (
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
    {children}
  </b>
);
