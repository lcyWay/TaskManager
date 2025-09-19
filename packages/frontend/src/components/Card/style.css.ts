import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const cardStyles = style({
  display: "flex",
  alignItems: "center",
  borderRadius: 12,
  height: 40,
  gap: 8,
  padding: "0 14px",
  cursor: "pointer",
  border: "2px solid transparent",
  background: globalTheme.palette.background,
  boxShadow: globalTheme.shadows.default,
  transition: `border ${globalTheme.transition}`,
});

export const cardSelectedStyles = style({
  border: `2px solid ${globalTheme.palette.primary}`,
});

export const cardHintStyles = style({
  marginLeft: "auto",
  fontSize: globalTheme.fontSizes.tiny,
  lineHeight: globalTheme.lineHeights.tiny,
  color: globalTheme.colors.hint,
  letterSpacing: globalTheme.letterSpacing,
});
