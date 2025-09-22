import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";

import Header from "components/Header";
import Notifications from "components/Notifications";

import Divider from "primitives/Divider";

import Common from "views/Common";

import { parseConfig } from "utils/config";

import { themeStyles } from "styles/theme.css";
import { commonPageStyles } from "styles/main.css";

import { config } from "../../test.config";

export const MAIN_CONTAINER_ID = "main-container";

function CommonPage() {
  React.useEffect(() => {
    parseConfig(config);
  }, []);

  return (
    <div id={MAIN_CONTAINER_ID} className={cn(commonPageStyles, themeStyles)}>
      <Header />
      <Divider variant="horizontal" />
      <Common />
      <Notifications />
    </div>
  );
}

export default observer(CommonPage);
