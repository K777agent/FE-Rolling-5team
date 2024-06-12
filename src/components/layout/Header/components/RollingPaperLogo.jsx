import React from "react";
import paperairplaneImage from "../../../../assets/icons/ic_paper_airplane.svg";
import HeaderStyles from "../Header.module.scss";
import { Link } from "react-router-dom";

function RollingPaperLogo() {
  return (
    <Link to="/" className={HeaderStyles.logo}>
      <img src={paperairplaneImage} alt="롤링페이퍼 로고" />
      <h1>Rolling</h1>
    </Link>
  );
}

export default RollingPaperLogo;
