import React from "react";
import cn from "classnames";
import { createPortal } from "react-dom";

import { MAIN_CONTAINER_ID } from "pages/CommonPage";

import { useBoolean } from "hooks/useBoolean";

import { tooltipArrowStyles, tooltipContainerStyles, tooltipContentStyles } from "./style.css";

interface TooltipPositionInterface {
  left: string | number;
  top: string | number;
  arrowLeft: string | number;
}

const DEFAULT_TOOLTIP_POSITION: TooltipPositionInterface = {
  left: "50vw",
  top: "100vh",
  arrowLeft: "50%",
};

interface TooltipInterface {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tooltipClassName?: string;
}

function Tooltip({ children, content, className, tooltipClassName }: TooltipInterface) {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [isTooltipVisible, openTooltip, closeTooltip] = useBoolean(false);

  const [tooltipPosition, setTooltipPosition] = React.useState<TooltipPositionInterface>(DEFAULT_TOOLTIP_POSITION);

  const handleMouseEnter = React.useCallback(async () => {
    openTooltip();
    setTooltipPosition(DEFAULT_TOOLTIP_POSITION);
  }, [openTooltip]);

  React.useEffect(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;
    if (!container || !tooltip || !isTooltipVisible) return;

    const tooltipRect = tooltip.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const tooltipWidth = Math.ceil(tooltipRect.width);
    const halfTooltipWidth = tooltipWidth / 2;
    const containerCenter = Math.ceil(containerRect.left) + Math.ceil(containerRect.width) / 2;

    const top = containerRect.top + Math.ceil(containerRect.height) + 4;

    if (halfTooltipWidth > containerCenter - 8) {
      setTooltipPosition({ top, left: 8, arrowLeft: containerCenter - 12 });
      return;
    }

    const maxRight = window.innerWidth - 8;
    if (halfTooltipWidth + containerCenter > maxRight) {
      setTooltipPosition({
        top,
        left: maxRight - tooltipWidth,
        arrowLeft: containerCenter - maxRight + tooltipWidth - 5,
      });
      return;
    }

    setTooltipPosition({ top, left: containerCenter - halfTooltipWidth, arrowLeft: "calc(50% - 4px)" });
  }, [isTooltipVisible]);

  return (
    <div
      ref={containerRef}
      onClick={closeTooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={closeTooltip}
      className={cn(tooltipContainerStyles, className)}
    >
      {children}
      {isTooltipVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className={cn(tooltipContentStyles, tooltipClassName)}
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            {content}
            <div style={{ left: tooltipPosition.arrowLeft }} className={tooltipArrowStyles} />
          </div>,
          document.getElementById(MAIN_CONTAINER_ID)!,
        )}
    </div>
  );
}

export default React.memo(Tooltip);
