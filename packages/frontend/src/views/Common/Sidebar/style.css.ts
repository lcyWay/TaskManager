import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const sidebarStyles = style({
  display: "flex",
  flexDirection: "column",
  width: 300,
  minWidth: 300,
});

export const sidebarBlockStyles = style({
  display: "flex",
  flexDirection: "column",
  padding: 8,
  gap: 8,
});

export const sidebarBlockTitleStyles = style({
  padding: "0 8px",
  fontSize: globalTheme.fontSizes.tiny,
  lineHeight: globalTheme.lineHeights.tiny,
  color: globalTheme.colors.hint,
  letterSpacing: globalTheme.letterSpacing,
});
