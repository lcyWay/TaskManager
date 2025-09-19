import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const tasksStyles = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  background: globalTheme.palette.backgroundDark,
});
