import React from "react";
import cn from "classnames";

import CustomIcon from "primitives/CustomIcon";

import { cardRightSideStyles, cardSelectedStyles, cardStyles } from "./style.css";

interface CardInterface {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
  rightContent?: React.ReactNode;
  onClick?: () => void;
}

function Card({ icon, title, selected, rightContent, onClick }: CardInterface) {
  return (
    <div className={cn(cardStyles, selected && cardSelectedStyles)} onClick={onClick}>
      <CustomIcon size="small" icon={icon} />
      {title}
      {rightContent && <div className={cardRightSideStyles}>{rightContent}</div>}
    </div>
  );
}

export default React.memo(Card);
