import { ComplexStyleRule, globalStyle, style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const customIconStyles = style({
  display: "flex",
  transition: `color ${globalTheme.transition}`,
});

export type CustomIconSizesType = keyof typeof customIconSizes;

export const customIconSizes = styleVariants({
  small: { width: 20, height: 20 },
  default: { width: 24, height: 24 },
  large: { width: 28, height: 28 },
});

export type CustomIconColorsType = keyof typeof globalTheme.palette;

export const customIconColors = styleVariants(
  Object.fromEntries(
    Object.keys(globalTheme.palette).map((key) => [
      key,
      { color: globalTheme.palette[key as keyof typeof globalTheme.palette] },
    ]),
  ) as Record<keyof typeof globalTheme.palette, ComplexStyleRule>,
);

globalStyle(`${customIconStyles} svg`, {
  width: "inherit",
  height: "inherit",
});

globalStyle(`${customIconStyles} *`, {
  color: "inherit",
});

globalStyle(`${customIconStyles} *`, {
  fill: "currentcolor",
});

globalStyle(`${customIconStyles} *[stroke]`, {
  stroke: "currentcolor",
  fill: "unset",
});
