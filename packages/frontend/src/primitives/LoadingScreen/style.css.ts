import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const modalLoadingScreenContainerStyles = style({
  zIndex: globalTheme.zIndexes.modal,
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const modalLoadingScreenBackgroundStyles = style({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  background: "#00000060",
  zIndex: -1,
});
