import React from "react";

export function useDoubleClick(onDoubleClick: () => void) {
  const lastClickTime = React.useRef<number>(0);

  const [containerRef, setContainerRef] = React.useState<HTMLDivElement | null>(null);

  const handleContainerClick = React.useCallback(() => {
    const isReady = Date.now() - lastClickTime.current < 300;

    if (!isReady) {
      lastClickTime.current = Date.now();
      return;
    }

    lastClickTime.current = 0;
    onDoubleClick();
    return;
  }, [onDoubleClick]);

  React.useEffect(() => {
    if (!containerRef) return;

    containerRef.addEventListener("click", handleContainerClick);
    return () => containerRef.removeEventListener("click", handleContainerClick);
  }, [containerRef, handleContainerClick]);

  return setContainerRef;
}
