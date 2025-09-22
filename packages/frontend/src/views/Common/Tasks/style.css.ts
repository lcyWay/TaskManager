import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const tasksStyles = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  background: globalTheme.palette.backgroundDark,
});

export const tasksLoadingStyles = style({
  display: "flex",
  flex: 1,
  background: globalTheme.palette.backgroundDark,
});

export const tasksListStyles = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  overflowY: "auto",
  padding: 20,
});

export const taskContainerStyles = style({
  display: "flex",
  width: "calc((100% - 32px) / 3)",

  "@media": {
    "screen and (max-width: 1440px)": {
      width: "calc((100% - 16px) / 2)",
    },
    "screen and (max-width: 1280px)": {
      width: "100%",
    },
  },
});
