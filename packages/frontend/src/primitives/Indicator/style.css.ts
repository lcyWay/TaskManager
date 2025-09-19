import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const indicatorStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 16,
  height: 16,
  minWidth: 16,
  minHeight: 16,
  borderRadius: "50%",
  border: `2px solid ${globalTheme.palette.hint}`,
  transition: `border ${globalTheme.transition}`,
});

export const indicatorActiveStyles = style({
  border: `2px solid ${globalTheme.palette.primary}`,
});

export const indicatorPointStyles = style({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: globalTheme.palette.primary,
});
