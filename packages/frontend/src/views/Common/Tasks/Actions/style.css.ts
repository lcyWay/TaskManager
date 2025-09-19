import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const tasksActionsContainerStyles = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: 16,
});

export const tasksActionsStyles = style({
  display: "flex",
  alignItems: "center",
  borderRadius: 24,
  padding: 8,
  gap: 8,
  boxShadow: globalTheme.shadows.default,
  background: globalTheme.palette.background,
});
