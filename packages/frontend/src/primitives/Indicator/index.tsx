import React from "react";
import cn from "classnames";

import { indicatorActiveStyles, indicatorStyles, indicatorPointStyles } from "./style.css";

interface IndicatorInterface {
  checked?: boolean;
}

function Indicator({ checked }: IndicatorInterface) {
  return (
    <div className={cn(indicatorStyles, checked && indicatorActiveStyles)}>
      {checked && <div className={indicatorPointStyles} />}
    </div>
  );
}

export default React.memo(Indicator);
