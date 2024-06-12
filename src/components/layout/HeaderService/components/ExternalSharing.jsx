import React from "react";
import shareImage from "../../../../assets/icons/ic_share.svg";

function ExternalSharing() {
  return (
    <>
      <button>
        <img src={shareImage} alt="외부링크 공유" />
      </button>
    </>
  );
}

export default ExternalSharing;
