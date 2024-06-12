import React from "react";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";

function ExpandedEmojl() {
  return (
    <>
      <button>
        <img src={arrowDown} alt="추가된 이모티콘 더보기" />
      </button>
      <div>확장된 이모지</div>
    </>
  );
}

export default ExpandedEmojl;
