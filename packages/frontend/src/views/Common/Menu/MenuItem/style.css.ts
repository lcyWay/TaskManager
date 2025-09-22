import { style } from "@vanilla-extract/css";

export const menuItemStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  width: "100%",
});

export const menuItemLoadingStyles = style({
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
