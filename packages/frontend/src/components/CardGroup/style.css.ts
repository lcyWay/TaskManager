import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const cardGroupStyles = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  padding: 8,
  gap: 8,
  background: globalTheme.palette.hint,
});
