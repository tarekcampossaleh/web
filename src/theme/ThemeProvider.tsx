import React, { ReactNode } from "react";
import { ThemeProvider as StyledTheme } from "styled-components";

type Colors = {
  primary: string;
  secondary: string;
  primary_dark: string;
};
type Theme = {
  colors: Colors;
};

const theme: Theme = {
  colors: {
    primary: "#F7E9D7",
    secondary: "#FFF6EA",
    primary_dark: "#5D5858",
  },
  //   fonts: ["sans-serif", "Roboto"],
  //   fontSizes: {
  //     small: "1em",
  //     medium: "2em",
  //     large: "3em"
  //   }
};

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <StyledTheme theme={theme}>{children}</StyledTheme>
);

export default ThemeProvider;
