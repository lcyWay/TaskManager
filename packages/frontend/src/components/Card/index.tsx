import React from "react";
import cn from "classnames";

import CustomIcon from "primitives/CustomIcon";

import { cardHintStyles, cardSelectedStyles, cardStyles } from "./style.css";

interface CardInterface {
  icon: React.ReactNode;
  title: string;
  selected?: boolean;
  hint?: string;
}

function Card({ icon, title, selected, hint }: CardInterface) {
  return (
    <div className={cn(cardStyles, selected && cardSelectedStyles)}>
      <CustomIcon size="small" icon={icon} />
      {title}
      {hint && <div className={cardHintStyles}>{hint}</div>}
    </div>
  );
}

export default React.memo(Card);
