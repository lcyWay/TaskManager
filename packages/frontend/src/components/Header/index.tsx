import React from "react";

import LogoIcon from "icons/logo.svg?react";
import UploadIcon from "icons/upload.svg?react";
import DownloadIcon from "icons/download.svg?react";

import Button from "primitives/Button";
import CustomIcon from "primitives/CustomIcon";

import {
  headerLeftsideStyles,
  headerLogoStyles,
  headerRightsideStyles,
  headerStyles,
  headerTitleStyles,
} from "./style.css";

function Header() {
  return (
    <div className={headerStyles}>
      <div className={headerLeftsideStyles}>
        <div className={headerLogoStyles}>
          <CustomIcon color="background" size="large" icon={<LogoIcon />} />
        </div>
        <h1 className={headerTitleStyles}>Task Manager</h1>
      </div>
      <div className={headerRightsideStyles}>
        <Button>
          <CustomIcon size="large" icon={<UploadIcon />} />
          Загрузить конфиг
        </Button>
        <Button>
          <CustomIcon size="large" icon={<DownloadIcon />} />
          Скачать конфиг
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Header);
