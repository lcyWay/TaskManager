import { createTheme } from "@vanilla-extract/css";

export const lightTheme = {
  fontSizes: {
    tiny: "13px",
    normal: "14px",
    paragraph: "16px",
    caption: "18px",
    title: "20px",
  },
  lineHeights: {
    tiny: "16px",
    normal: "17px",
    paragraph: "19px",
    caption: "20px",
    title: "20px",
  },
  zIndexes: {
    notification: "3000",
    tooltip: "2000",
    dropdown: "1000",
    modal: "500",
  },
  letterSpacing: "0.5px",
  transition: "0.2s ease-in-out",
  palette: {
    primary: "#7497F1",
    hint: "#EBEDF4",
    background: "#FFFFFF",
    backgroundDark: "#F4F5F9",
  },
  colors: {
    primary: "#5A5A67",
    inverted: "#FFFFFF",
    hint: "#CECED8",
  },
  shadows: {
    empty: "0px 0px 12px transparent",
    default: "0px 0px 12px #E7E7E8",
  },
};

export const [themeStyles, globalTheme] = createTheme(lightTheme);
