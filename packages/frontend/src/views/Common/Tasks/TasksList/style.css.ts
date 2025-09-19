import { style } from "@vanilla-extract/css";

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
