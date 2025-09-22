import React from "react";

import Loading, { LoadingInterface } from "primitives/Loading";

import { loadingContainerStyles } from "./style.css";

function LoadingContainer({ ...loadingProps }: LoadingInterface) {
  return (
    <div className={loadingContainerStyles}>
      <Loading {...loadingProps} />
    </div>
  );
}

export default React.memo(LoadingContainer);
