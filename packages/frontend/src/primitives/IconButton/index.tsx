import React from "react";
import cn from "classnames";

import { showAnimationStyles } from "styles/animations.css";

import {
  iconButtonStyles,
  IconButtonSizeType,
  iconButtonBorderVariants,
  IconButtonBorderType,
  iconButtonSizeVariants,
} from "./style.css";

interface IconButtonInterface {
  icon: React.ReactNode;
  disabled?: boolean;
  size?: IconButtonSizeType;
  showAnimation?: boolean;
  border?: IconButtonBorderType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function IconButton({
  icon,
  onClick,
  disabled,
  showAnimation,
  size = "default",
  border = "square",
}: IconButtonInterface) {
  return (
    <button
      className={cn(
        showAnimation && showAnimationStyles,
        iconButtonStyles,
        iconButtonSizeVariants[size],
        iconButtonBorderVariants[border],
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default React.memo(IconButton);
