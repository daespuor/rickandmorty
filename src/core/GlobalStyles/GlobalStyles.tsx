/** @jsx jsx */
import React from "react";
import { Global, jsx, css } from "@emotion/core";
import { colors } from "../../colors";
export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
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
