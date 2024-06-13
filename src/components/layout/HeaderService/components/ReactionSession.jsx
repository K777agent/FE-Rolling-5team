import React, { useEffect, useState } from "react";
import AddReaction from "./AddReaction";
import ExpandedReactions from "./ExpandedReactions";
import HeaderServiceStyles from "../HeaderService.module.scss";
import PopularReactions from "../../../UI/EmojiReaction/PopularReactions";
import ReactionEmojiStyles from "../../../UI/EmojiReaction/ReactionEmoji.module.scss";

function ReactionSession() {
  // 부모에서 리액션 관련 데이터 관리(서버에서 데이터 받아올 예정)
  const [reactions, setReactions] = useState([
    { emoji: "👍", count: 50 },
    { emoji: "❤️", count: 30 },
    { emoji: "🎉", count: 15 },
    { emoji: "😂", count: 25 },
  ]);

  useEffect(() => {
    //setReactions(reactions);
  }, []);

  return (
    <div className={HeaderServiceStyles["emoji-section"]}>
      {/* 공용 컴포넌트로 가장 많은 리액션 3종류만 */}
      <PopularReactions />
      {/* 드롭다운으로 확장되면 모든 누적 리액션 보이기 */}
      <ExpandedReactions />
      {/* 리액션 이모지 추가 */}
      <AddReaction />
    </div>
  );
}

export default ReactionSession;
