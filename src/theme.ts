"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Theme as ThemeMui } from "@mui/material";
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f25e00",
      light: "#ff8a3f",
      dark: "#b53300",
      contrastText: "#fff",
    },
    whiteBtn: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    black: {
      main: "#000000",
      light: "#121212",
      dark: "#000000",
      contrastText: "#fff",
    },
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#fff",
    },
    text: {
      primary: "#f25e00",
      secondary: "#fff",
      disabled: "#fff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

interface Color {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

interface CustomPaletteOptions {
  black: Color;
  ochre: Color;
  whiteBtn: Color;
}

declare module "@mui/material/styles" {
  interface PaletteOptions extends CustomPaletteOptions {}
}

interface CustomColors {
  black: true;
  ochre: true;
  whiteBtn: true;
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends CustomColors {}
}
declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides extends CustomColors {}
}

export interface Theme extends ThemeMui {
  palette: ThemeMui["palette"] & CustomPaletteOptions;
}

export default theme;
