import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const headerStyles = style({
  display: "flex",
  alignItems: "center",
  height: "72px",
  padding: "0 16px",
  background: globalTheme.palette.background,
});

export const headerLeftsideStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 12,
  flex: 1,
});

export const headerRightsideStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const headerLogoStyles = style({
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  background: globalTheme.palette.primary,
});

export const headerTitleStyles = style({
  fontSize: globalTheme.fontSizes.title,
  lineHeight: globalTheme.lineHeights.title,
  letterSpacing: globalTheme.letterSpacing,
  fontWeight: 600,
});
