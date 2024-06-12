import React from "react";
import addEmogilImage from "../../../../assets/icons/ic_add-emoji.svg";

function AddEmoji() {
  return (
    <button>
      <img src={addEmogilImage} alt="이모지 추가" />
      추가
    </button>
  );
}

export default AddEmoji;
