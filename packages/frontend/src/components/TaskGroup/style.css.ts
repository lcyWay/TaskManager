import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const taskGroupStyles = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: 32,
  padding: 8,
  gap: 8,
  background: globalTheme.palette.hint,
});
