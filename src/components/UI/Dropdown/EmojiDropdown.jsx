import React from "react";
import Dropdown from "./Dropdown";
import EmojiDropdownStyles from "./EmojiDropdown.module.scss";
import addEmogilImage from "../../../assets/icons/ic_add-emoji.svg";

const EmojiDropdown = () => {
  const emojis = ["👍", "❤️", "🎉", "😂"];

  return (
    <Dropdown
      trigger={
        <button className={EmojiDropdownStyles["custom-button"]}>
          <img src={addEmogilImage} alt="이모지 추가" /> 추가
        </button>
      }
    >
      <div className={EmojiDropdownStyles["emoji-container"]}>
        {emojis.map((emoji, index) => (
          <span key={index} className={EmojiDropdownStyles.emoji}>
            {emoji}
          </span>
        ))}
      </div>
    </Dropdown>
  );
};

export default EmojiDropdown;
