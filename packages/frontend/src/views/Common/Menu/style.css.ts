import { style } from "@vanilla-extract/css";

export const menuStyles = style({
  display: "flex",
  flexDirection: "column",
  width: 300,
  minWidth: 300,
});

export const menuBlockStyles = style({
  display: "flex",
  flexDirection: "column",
  padding: 8,
  gap: 8,
});
