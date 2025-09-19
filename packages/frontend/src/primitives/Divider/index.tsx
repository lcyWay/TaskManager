import React from "react";
import cn from "classnames";

import { DividerAxisType, dividerAxisStyles, dividerFullsizeAxisStyles, dividerStyles } from "./style.css";

interface DividerInterface {
  variant: DividerAxisType;
  size?: number;
  fullSize?: boolean;
}

function Divider({ variant = "horizontal", fullSize, size }: DividerInterface) {
  const width = size && variant === "horizontal" ? `${size}px` : undefined;
  const height = size && variant === "vertical" ? `${size}px` : undefined;

  return (
    <div
      className={cn(dividerStyles, dividerAxisStyles[variant], fullSize && dividerFullsizeAxisStyles[variant])}
      style={{ width, height }}
    />
  );
}

export default React.memo(Divider);
