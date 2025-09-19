import { style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const iconButtonStyles = style([
  {
    border: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    outline: "none",
    background: globalTheme.palette.background,
    boxShadow: globalTheme.shadows.empty,
    transition: `box-shadow ${globalTheme.transition}`,

    ":disabled": {
      cursor: "auto",
    },

    ":hover": {
      boxShadow: globalTheme.shadows.default,
    },
  },
]);

export type IconButtonBorderType = keyof typeof iconButtonBorderVariants;

export const iconButtonBorderVariants = styleVariants({
  rounded: { borderRadius: "50%" },
  square: { borderRadius: 16 },
});

export type IconButtonSizeType = keyof typeof iconButtonSizeVariants;

export const iconButtonSizeVariants = styleVariants({
  small: { width: 32, height: 32, minWidth: 32, minHeight: 32 },
  default: { width: 40, height: 40, minWidth: 40, minHeight: 40 },
});
