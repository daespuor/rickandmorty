/** @jsx jsx */
import React, { ReactChild } from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { colors } from "../../../colors";

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

export const Card = ({ children }: { children: ReactChild | ReactChild[] }) => (
  <div
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
    {children}
  </div>
);

export const CardFade = ({
  isFadeIn,
  children
}: {
  isFadeIn: boolean | string;
  children: ReactChild[];
}) => (
  <div
    css={css`
      animation: ${isFadeIn ? fadeIn : fadeOut} linear 3s;
    `}
  >
    {children}
  </div>
);

export const CardHeader = ({
  children
}: {
  children: ReactChild | ReactChild[];
}) => (
  <div
    className="character-content"
    css={css`
      width: 300px;
    `}
  >
    {children}
  </div>
);

export const CardBody = ({ children }: { children: ReactChild[] }) => (
  <div
    css={css`
      background-color: ${colors.$backgroundLevel3};
      height: 80px;
      margin-top: -10px;
      padding-top: 10px;
      color: ${colors.$internalText};
    `}
  >
    {children}
  </div>
);

export const CardImage = ({ src }: { src: string }) => (
  <img
    src={src}
    css={css`
      width: 100%;
      height: 300px;
      border-radius: 10px 10px 0px 0px;
    `}
    alt="character-card"
  />
);
