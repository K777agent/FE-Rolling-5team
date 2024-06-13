import React from "react";
import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";

export function ExpandedReactionDropdown() {
  const emojis = ["👍", "❤️", "🎉", "😂"];
  return (
    <Dropdown
      trigger={
        <button className={ExpandedReactionDropdownStyles["dropdown-arrow"]}>
          <img src={arrowDown} alt="추가된 이모티콘 더보기" />
        </button>
      }
    >
      <div className={ExpandedReactionDropdownStyles["emoji-container"]}>
        {emojis.map((emoji, index) => (
          <span key={index} className={ExpandedReactionDropdownStyles.emoji}>
            {emoji}
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
