import { keyframes, style } from "@vanilla-extract/css";

import { globalTheme } from "./theme.css";

const showAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const showAnimationStyles = style({
  animation: `${showAnimation} ${globalTheme.transition}`,
});
