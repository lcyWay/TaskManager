import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";

import Header from "components/Header";

import Divider from "primitives/Divider";

import Common from "views/Common";

import { themeStyles } from "styles/theme.css";
import { commonPageStyles } from "styles/main.css";

export const MAIN_CONTAINER_ID = "main-container";

function CommonPage() {
  return (
    <div id={MAIN_CONTAINER_ID} className={cn(commonPageStyles, themeStyles)}>
      <Header />
      <Divider variant="horizontal" />
      <Common />
    </div>
  );
}

export default observer(CommonPage);
