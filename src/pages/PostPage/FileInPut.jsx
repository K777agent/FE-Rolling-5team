import React, { useState, useEffect } from "react";
import PostStyles from "./PostPage.module.scss";
import check from "../../assets/images/check.svg";

const FileInPut = ({
  images,
  selectedImage,
  setSelectedImage,
  setSelectedColor,
}) => {
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  return (
    <div>
      <ul className={PostStyles["image-wrapper"]}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={`${PostStyles["image-button"]} ${
              selectedImage === index ? PostStyles.selected : ""
            }`}
            onClick={() => {
              handleImageClick(index);
              setSelectedColor("beige");
            }}
          >
            <img
              src={image.urls.full}
              alt="배경 이미지"
              className={PostStyles["background-image"]}
            />
            {selectedImage === index && (
              <img
                src={check}
                alt="이미지 선택"
                className={PostStyles["image-check"]}
                width="44"
                height="44"
              />
            )}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default FileInPut;
