import React from "react";

import { cardGroupStyles } from "./style.css";

interface CardGroupInterface {
  children: React.ReactNode;
}

function CardGroup({ children }: CardGroupInterface) {
  return <div className={cardGroupStyles}>{children}</div>;
}

export default React.memo(CardGroup);
