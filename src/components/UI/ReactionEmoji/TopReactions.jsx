import React from "react";
import ReactionEmojiStyles from "./ReactionEmoji.module.scss";
import useRecipientData from "../../../hooks/useRecipientReactionData";
import { useLocation, useParams } from "react-router-dom";

function TopReactions({
  id = 0,
  topReactions = [],
  onSelectedEmoji = () => {},
}) {
  const { recipientData } = useRecipientData(id);
  const reactions =
    topReactions.length !== 0 ? topReactions : recipientData.topReactions;
  const emojis = {
    id: 0,
    native: "",
  };
  const location = useLocation();
  const { id: currentPageId } = useParams();
  const isCreatedRollingListPage =
    location.pathname === `/post/${currentPageId}`;

  const handleEmojiSelect = (id, emoji) => {
    emojis.id = id;
    emojis.native = emoji;
    onSelectedEmoji(emojis);
  };

  return (
    <div className={ReactionEmojiStyles["emoji-container"]}>
      {isCreatedRollingListPage && !topReactions.length && (
        <span>감정을 표현해보세요!</span>
      )}
      {reactions.map(({ id, emoji, count }) => (
        <span
          key={id}
          className={ReactionEmojiStyles["emoji-button"]}
          onClick={() => handleEmojiSelect(id, emoji)}
        >
          <span className={ReactionEmojiStyles["emoji-both"]}>
            <span className={ReactionEmojiStyles["emoji"]}>{emoji} </span>
            <span className={ReactionEmojiStyles["emoji"]}>{count}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default TopReactions;
