import React from "react";
import cn from "classnames";

import { showAnimationStyles } from "styles/animations.css";

import {
  customIconStyles,
  customIconSizes,
  customIconColors,
  CustomIconColorsType,
  CustomIconSizesType,
} from "./style.css";

interface BaseCustomIconInterface {
  size?: CustomIconSizesType;
  color?: CustomIconColorsType;
  customSize?: number;
  showAnimation?: boolean;
}

type CustomIconInterface = BaseCustomIconInterface &
  (
    | {
        icon: React.ReactNode;
        textIcon?: never;
      }
    | {
        icon?: never;
        textIcon: string;
      }
  );

function CustomIcon({
  icon,
  textIcon,
  showAnimation,
  customSize,
  size = "default",
  color = "primary",
}: CustomIconInterface) {
  const customSizeValue = customSize ? `${customSize}px` : undefined;
  return (
    <div
      role="img"
      className={cn(
        customIconStyles,
        customIconSizes[size],
        customIconColors[color],
        showAnimation && showAnimationStyles,
      )}
      dangerouslySetInnerHTML={textIcon ? { __html: textIcon } : undefined}
      style={{ width: customSizeValue, height: customSizeValue }}
    >
      {icon}
    </div>
  );
}

export default React.memo(CustomIcon);
