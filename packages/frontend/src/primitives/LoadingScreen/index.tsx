import React from "react";
import cn from "classnames";
import { createPortal } from "react-dom";

import LoadingContainer from "primitives/LoadingContainer";

import { MAIN_CONTAINER_ID } from "pages/CommonPage";

import { showAnimationStyles } from "styles/animations.css";

import { modalLoadingScreenBackgroundStyles, modalLoadingScreenContainerStyles } from "./style.css";

interface LoadingScreenInterface {
  showAnimation?: boolean;
}

function LoadingScreen({ showAnimation }: LoadingScreenInterface) {
  return createPortal(
    <div className={cn(modalLoadingScreenContainerStyles, showAnimation && showAnimationStyles)}>
      <div className={modalLoadingScreenBackgroundStyles} />
      <LoadingContainer size="large" />
    </div>,
    document.getElementById(MAIN_CONTAINER_ID)!,
  );
}

export default React.memo(LoadingScreen);
