import React from "react";
import cn from "classnames";

import {
  LoadingColorVariantsType,
  LoadingSizeVariantsType,
  loadingColorVariants,
  loadingContainerSizeVariants,
  loadingContainerStyles,
  loadingSizeVariants,
  loadingStyles,
  subLoadingSizeVariants,
  subLoadingStyles,
} from "./style.css";

export interface LoadingInterface {
  color?: LoadingColorVariantsType;
  size?: LoadingSizeVariantsType;
}

function Loading({ color = "primary", size = "medium" }: LoadingInterface) {
  return (
    <div className={cn(loadingContainerStyles, loadingContainerSizeVariants[size])}>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
      <div className={cn(loadingStyles, loadingSizeVariants[size])}>
        <div className={cn(subLoadingStyles, subLoadingSizeVariants[size], loadingColorVariants[color])} />
      </div>
    </div>
  );
}

export default React.memo(Loading);
