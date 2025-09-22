import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const notificationsContainerStyles = style({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  bottom: 10,
  left: 10,
  gap: 10,
  width: "calc(100vw - 20px)",
  maxWidth: 300,
  zIndex: globalTheme.zIndexes.notification,
});
