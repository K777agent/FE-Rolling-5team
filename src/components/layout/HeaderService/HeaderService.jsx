import React from "react";
import CumulativeUsers from "./components/CumulativeUsers";
import ExternalSharing from "./components/ExternalSharing";
import ReactionSession from "./components/ReactionSession";
import HeaderServiceStyles from "./HeaderService.module.scss";

function HeaderService() {
  return (
    <div className={HeaderServiceStyles.main}>
      <div className={HeaderServiceStyles["header-service"]}>
        <h1>To. Ashley Kim</h1>
        <div className={HeaderServiceStyles["service-wrapper"]}>
          {/* {누적 사용자 수 공용 컴포넌트로 받아올 에정} */}
          <CumulativeUsers />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["first-line"]}`}
          ></div>
          {/* {리액션 관련 세션} */}
          <ReactionSession />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["second-line"]}`}
          ></div>
          {/* 외부 링크 관련*/}
          <ExternalSharing />
        </div>
      </div>
    </div>
  );
}

export default HeaderService;
