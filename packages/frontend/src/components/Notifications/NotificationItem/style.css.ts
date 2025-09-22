import { style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";
import { showAnimationStyles } from "styles/animations.css";

export const notificationItemStyles = style([
  showAnimationStyles,
  {
    padding: 12,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    color: globalTheme.colors.inverted,
    fontSize: globalTheme.fontSizes.tiny,
    lineHeight: globalTheme.lineHeights.tiny,
    gap: 12,
    flex: 1,
  },
]);

export const notificationColorVariants = styleVariants({
  success: { background: globalTheme.palette.primary },
  error: { background: globalTheme.palette.error },
});

export const notificationItemIconContainerStyles = style({
  borderRadius: "50%",
  minWidth: 24,
  minHeight: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: globalTheme.palette.background,
});
