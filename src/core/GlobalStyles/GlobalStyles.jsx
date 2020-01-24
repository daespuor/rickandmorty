import React from "react";
import { Global, css } from "@emotion/core";
import font from "../../fonts/get_schwifty.ttf";
import { colors } from "../../colors";
export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "RickAndMorty";
          src: url(${font}) format("truetype");
        }
        body {
          font-family: -apple-system, system-ui, "BlinkMacSystemFont",
            "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
          background-color: ${colors.$background};
          margin: 0;
          text-align: center;
        }
        h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }
      `}
    />
  );
};
