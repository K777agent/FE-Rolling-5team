import React from "react";
import AddEmoji from "./AddEmoji";
import CumulativeCountEmoji from "../../../UI/Emoji/CumulativeCountEmoji";
import ExpandedEmojl from "./ExpandedEmojl";
import HeaderServiceStyles from "../HeaderService.module.scss";

function EmojiSection() {
  return (
    <div className={HeaderServiceStyles["emoji-section"]}>
      <CumulativeCountEmoji />
      <ExpandedEmojl />
      <AddEmoji />
    </div>
  );
}

export default EmojiSection;
