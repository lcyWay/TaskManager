import React from "react";
import cn from "classnames";

import { buttonStyles, ButtonStyleType, buttonStyleVariants } from "./style.css";

interface ButtonInterface {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: ButtonStyleType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({ children, onClick, disabled, variant = "outline" }: ButtonInterface) {
  return (
    <button onClick={onClick} disabled={disabled} className={cn(buttonStyles, buttonStyleVariants[variant])}>
      {children}
    </button>
  );
}

export default React.memo(Button);
