import React from "react";
import UserProfile from "./UserProfile";
import HeaderServiceStyles from "../HeaderService.module.scss";

function CumulativeUsers() {
  const userProfiles = ["김동훈", "강미나", "이상아"];

  // 각 이미지의 너비와 겹치는 정도 설정
  const imageSize = 28; // 이미지 크기 28 X 28
  const overlapPercentage = 30; // 겹치는 정도 (%) 30%

  // 이미지가 겹치는 정도를 계산하여 각 이미지의 위치를 설정
  const overlap = (overlapPercentage / 100) * imageSize;
  // 이미지 담을 컨테이너의 가로 넓이 구함
  const containerWidth =
    imageSize + (userProfiles.length - 1) * (imageSize - overlap);
  const containerHeight = imageSize;

  return (
    <div className={HeaderServiceStyles["cumulative-user-container"]}>
      <div
        className={HeaderServiceStyles["user-profile-wrapper"]}
        style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
      >
        {userProfiles.map((item, index) => (
          <UserProfile
            key={index}
            style={{
              zIndex: index,
              left: `${index * (imageSize - overlap)}px`,
            }}
          />
        ))}
      </div>
      <h2>
        <span>{userProfiles.length}</span>명이 작성했어요!
      </h2>
    </div>
  );
}

export default CumulativeUsers;
