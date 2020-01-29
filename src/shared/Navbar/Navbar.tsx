/** @jsx jsx */
import React from "react";
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";
import { colors } from "../../colors";

export const Navbar = () => (
  <nav
    css={css`
      display: flex;
      justify-content: flex-start;
      & .link {
        margin-left: 10px;
        padding: 10px;
        text-decoration: none;
        color: ${colors.$backgroundLevel3};
        & :hover {
          background-color: ${colors.$backgroundLevel3};
          color: ${colors.$background};
        }
      }
    `}
  >
    <Link to="/" className="link">
      Home
    </Link>
    <Link to="/dashboard" className="link">
      Dashboard
    </Link>
  </nav>
);
