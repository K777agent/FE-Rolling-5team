import React from "react";
import HeaderStyles from "./Header.module.scss";
import CreateRollingPaper from "./components/CreateRollingPaper";

import HeaderService from "../HeaderService/HeaderService";
import RollingPaperLogo from "./components/RollingPaperLogo";

function Header() {
  return (
    <>
      <header className={HeaderStyles.main}>
        <div className={HeaderStyles.header}>
          <RollingPaperLogo />
          <CreateRollingPaper />
        </div>
      </header>
      <HeaderService />
    </>
  );
}

export default Header;
