import { style } from "@vanilla-extract/css";

import { globalTheme } from "styles/theme.css";

export const taskStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 24,
  boxSizing: "border-box",
  padding: 14,
  gap: 12,
  cursor: "pointer",
  background: globalTheme.palette.background,
  border: "2px solid transparent",
  boxShadow: globalTheme.shadows.default,
  transition: `border ${globalTheme.transition}`,
});

export const taskSelectedStyles = style({
  border: `2px solid ${globalTheme.palette.primary}`,
});

export const taskHeaderStyles = style({
  display: "flex",
  alignItems: "center",
  gap: 12,
  maxWidth: "100%",
});

export const taskHeaderIconStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  minWidth: 44,
  minHeight: 44,
  background: globalTheme.palette.primary,
  borderRadius: 16,
});

export const taskHeaderTextStyles = style({
  display: "flex",
  alignItems: "center",
  flex: 1,
  overflow: "hidden",
  gap: 12,
});

export const taskHeaderTitleStyles = style({
  fontSize: globalTheme.fontSizes.paragraph,
  lineHeight: globalTheme.lineHeights.paragraph,
  letterSpacing: globalTheme.letterSpacing,
  fontWeight: 600,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  transition: `color ${globalTheme.transition}`,
});

export const taskHeaderTitleCompletedStyles = style({
  color: globalTheme.colors.hint,
});

export const taskHeaderHintStyles = style({
  color: globalTheme.colors.hint,
  fontSize: globalTheme.fontSizes.tiny,
  lineHeight: globalTheme.lineHeights.tiny,
  letterSpacing: globalTheme.letterSpacing,
  whiteSpace: "nowrap",
});

export const taskBodyStyles = style({
  display: "-webkit-box",
  width: "100%",
  whiteSpace: "pre-wrap",
  maxHeight: 51,
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const taskFooterStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const taskFooterBadgeStyles = style({
  display: "flex",
  borderRadius: 8,
  padding: "4px 8px",
  background: globalTheme.palette.hint,
  fontSize: globalTheme.fontSizes.tiny,
  lineHeight: globalTheme.lineHeights.tiny,
});
