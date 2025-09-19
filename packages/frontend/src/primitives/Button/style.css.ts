import { style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const buttonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  minWidth: 120,
  height: 44,
  minHeight: 44,
  borderRadius: 16,
  gap: 4,
  padding: "0 12px",
  cursor: "pointer",
  userSelect: "none",
  border: "2px solid transparent",
  background: "transparent",
  outline: "none",
  letterSpacing: globalTheme.letterSpacing,
  transition: `
    background ${globalTheme.transition},
    border ${globalTheme.transition}, 
    color ${globalTheme.transition}
  `,

  ":disabled": {
    color: globalTheme.colors.inverted,
    boxShadow: "unset",
    cursor: "auto",
  },
});

export type ButtonStyleType = keyof typeof buttonStyleVariants;

export const buttonStyleVariants = styleVariants({
  outline: {
    background: "transparent",
    border: `2px solid ${globalTheme.palette.hint}`,
  },
  fill: {
    color: globalTheme.colors.inverted,
    background: globalTheme.palette.primary,
    border: `2px solid ${globalTheme.palette.primary}`,
  },
});
