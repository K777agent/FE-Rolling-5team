import React from "react";
import Dropdown from "./Dropdown";
import shareImage from "../../../assets/icons/ic_share.svg";

const ShareDropdown = () => {
  return (
    <Dropdown
      trigger={
        <button>
          <img src={shareImage} alt="외부링크 공유" />
        </button>
      }
    >
      <div>카카오톡 공유</div>
      <div>URL 공유</div>
    </Dropdown>
  );
};

export default ShareDropdown;
