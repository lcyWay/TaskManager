import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";
import { showAnimationStyles } from "styles/animations.css";

export const tooltipContainerStyles = style({
  display: "flex",
});

export const tooltipContentStyles = style([
  showAnimationStyles,
  {
    position: "fixed",
    transition: `opacity ${globalTheme.transition}`,
    background: "#4c4c4e",
    color: globalTheme.colors.inverted,
    fontSize: globalTheme.fontSizes.tiny,
    lineHeight: globalTheme.lineHeights.tiny,
    padding: "4px 8px",
    borderRadius: 8,
    fontWeight: 400,
    pointerEvents: "none",
    textAlign: "center",
    wordBreak: "break-word",
    maxWidth: 180,
    zIndex: globalTheme.zIndexes.tooltip,
    boxShadow: globalTheme.shadows.default,
  },
]);

export const tooltipArrowStyles = style({
  position: "absolute",
  left: "calc(50% - 4px)",
  top: -4,
  width: 8,
  height: 8,
  borderRadius: "2px 0 0 0",
  transform: "rotate(45deg)",
  background: "#4c4c4e",
});
