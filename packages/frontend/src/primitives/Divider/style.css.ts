import { style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const dividerStyles = style({
  background: globalTheme.palette.hint,
  transition: `background ${globalTheme.transition}`,
});

export type DividerAxisType = keyof typeof dividerAxisStyles;

export const dividerAxisStyles = styleVariants({
  horizontal: { height: 2, minHeight: 2 },
  vertical: { width: 2, minWidth: 2 },
});

export const dividerFullsizeAxisStyles = styleVariants({
  horizontal: { width: "100%" },
  vertical: { height: "100%" },
});
