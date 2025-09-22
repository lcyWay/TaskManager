import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const cardStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  height: 44,
  width: "100%",
  boxSizing: "border-box",
  borderRadius: 12,
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

export const cardRightSideStyles = style({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  gap: 8,
});
