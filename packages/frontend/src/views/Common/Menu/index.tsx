import React from "react";

import FolderIcon from "icons/folder.svg?react";

import Card from "components/Card";
import CardGroup from "components/CardGroup";

import Divider from "primitives/Divider";

import { menuStyles, menuBlockStyles } from "./style.css";

function Menu() {
  return (
    <div className={menuStyles}>
      <div className={menuBlockStyles}>
        <CardGroup>
          <Card icon={<FolderIcon />} title="Главная" />
        </CardGroup>
      </div>
      <Divider variant="horizontal" />
      <div className={menuBlockStyles}>
        <CardGroup>
          <Card icon={<FolderIcon />} title="Backend" />
        </CardGroup>
        <CardGroup>
          <Card icon={<FolderIcon />} title="Cats (Game)" />
        </CardGroup>
        <CardGroup>
          <Card icon={<FolderIcon />} title="Contour Components" />
        </CardGroup>
      </div>
    </div>
  );
}

export default React.memo(Menu);
