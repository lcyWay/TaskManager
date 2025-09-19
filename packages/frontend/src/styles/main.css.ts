import { style, globalStyle, globalFontFace } from "@vanilla-extract/css";

import { globalTheme } from "./theme.css";

globalFontFace("GraphikLCG", {
  src: "url(/fonts/GraphikLCG-Regular.woff2)",
  fontWeight: 400,
});

globalFontFace("GraphikLCG", {
  src: "url(/fonts/GraphikLCG-Medium.woff2)",
  fontWeight: 500,
});

globalFontFace("GraphikLCG", {
  src: "url(/fonts/GraphikLCG-Semibold.woff2)",
  fontWeight: 600,
});

export const commonPageStyles = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  height: "100vh",
  background: globalTheme.palette.background,
  transition: `background ${globalTheme.transition}`,
});

globalStyle("*", {
  fontFamily: "GraphikLCG, sans-serif",
  fontSize: globalTheme.fontSizes.normal,
  lineHeight: globalTheme.lineHeights.normal,
  color: globalTheme.colors.primary,
  fontWeight: 500,
});

globalStyle("*::-webkit-resizer", {
  backgroundImage: "url(/images/resizer.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

globalStyle("*::-webkit-scrollbar", {
  width: 16,
  height: 16,
});

globalStyle("*::-webkit-scrollbar-thumb", {
  background: "#a6a9b5",
  borderRadius: 8,
  backgroundClip: "padding-box",
  border: "4px solid transparent",
  minHeight: 24,
  minWidth: 24,
});

globalStyle("*::-webkit-scrollbar-track", {
  background: "transparent",
});

globalStyle("*::-webkit-scrollbar-corner", {
  background: "transparent",
});

globalStyle("*::-webkit-scrollbar-button:single-button", {
  display: "block",
  backgroundSize: 10,
  backgroundRepeat: "no-repeat",
  width: 12,
  height: 12,
  backgroundPosition: "center",
  transition: `background ${globalTheme.transition}`,
  cursor: "pointer",
});

globalStyle("*::-webkit-scrollbar-button:single-button:vertical:decrement", {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(166,169,181)'><polygon points='50,40 10,100 90,100'/></svg>")`,
});

globalStyle("*::-webkit-scrollbar-button:single-button:vertical:increment", {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(166,169,181)'><polygon points='10,0 90,0 50,60'/></svg>")`,
});

globalStyle("*::-webkit-scrollbar-button:single-button:horizontal:decrement", {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(166,169,181)'><polygon points='40,50 100,90 100,10'/></svg>")`,
});

globalStyle("*::-webkit-scrollbar-button:single-button:horizontal:increment", {
  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(166,169,181)'><polygon points='0,10 0,90 60,50'/></svg>")`,
});
