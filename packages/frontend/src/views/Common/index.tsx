import React from "react";

import Divider from "primitives/Divider";

import Menu from "./Menu";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

import { commonViewStyles } from "./style.css";

function CommonView() {
  return (
    <div className={commonViewStyles}>
      <Menu />
      <Divider variant="vertical" />
      <Tasks />
      <Divider variant="vertical" />
      <Sidebar />
    </div>
  );
}

export default React.memo(CommonView);
