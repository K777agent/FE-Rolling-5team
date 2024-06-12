import React from "react";
import CumulativeUsers from "./components/CumulativeUsers";
import ExternalSharing from "./components/ExternalSharing";
import EmojiSection from "./components/EmojiSection";
import HeaderServiceStyles from "./HeaderService.module.scss";

function HeaderService() {
  return (
    <div className={HeaderServiceStyles.main}>
      <div className={HeaderServiceStyles["header-service"]}>
        <h1>To. Ashley Kim</h1>
        <div className={HeaderServiceStyles["service-wrapper"]}>
          <CumulativeUsers />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["first-line"]}`}
          ></div>
          <EmojiSection />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["second-line"]}`}
          ></div>
          <ExternalSharing />
        </div>
      </div>
    </div>
  );
}

export default HeaderService;
