import { ComplexStyleRule, globalStyle, keyframes, style, styleVariants } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";
import { showAnimationStyles } from "styles/animations.css";

export const loadingContainerStyles = style([
  showAnimationStyles,
  {
    display: "inline-block",
    position: "relative",
  },
]);

export type LoadingSizeVariantsType = keyof typeof loadingContainerSizeVariants;

export const loadingContainerSizeVariants = styleVariants({
  small: { minWidth: 16, minHeight: 16, width: 16, height: 16 },
  medium: { minWidth: 20, minHeight: 20, width: 20, height: 20 },
  large: { minWidth: 40, minHeight: 40, width: 40, height: 40 },
});

new Array(8).fill(0).forEach((_, index) => {
  globalStyle(`${loadingContainerStyles} div:nth-child(${index + 1})`, {
    transform: `rotate(${index * 45}deg)`,
    animationDelay: `${-0.875 + 0.125 * index}s`,
  });
});

const loadingAnimation = keyframes({
  from: {
    opacity: "1",
  },
  to: {
    opacity: "0",
  },
});

export const loadingStyles = style({
  animation: `${loadingAnimation} 1s linear infinite`,
});

export const loadingSizeVariants = styleVariants({
  small: { transformOrigin: "8px 8px" },
  medium: { transformOrigin: "10px 10px" },
  large: { transformOrigin: "20px 20px" },
});

export const subLoadingStyles = style({
  position: "absolute",
  borderRadius: "30%",
});

export const subLoadingSizeVariants = styleVariants({
  small: { top: 0, left: 7, width: 2, height: 4 },
  medium: { top: 0, left: 9, width: 2, height: 5 },
  large: { top: 2, left: 18, width: 4, height: 10 },
});

export type LoadingColorVariantsType = keyof typeof globalTheme.palette;

export const loadingColorVariants = styleVariants(
  Object.fromEntries(
    Object.keys(globalTheme.palette).map((key) => [
      key,
      { background: globalTheme.palette[key as keyof typeof globalTheme.palette] },
    ]),
  ) as Record<keyof typeof globalTheme.palette, ComplexStyleRule>,
);
