import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  reverse,
  title,
  description,
  showBtn,
  mockupImg,
  banner,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex  items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } ${
          reverse ? styles.textRight : styles.textLeft
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} fadeLeftMini  ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }`}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn ? (
            <Button assetUrl={assets.expo} link="https://expo.dev/@chamon562/nft_market?serviceType=c
            lassic&distribution=expo-go" />
          ) : (
            ""
          )}
        </div>
        <div
          className={`${styles.flexCenter} flex-1
          p-8 sm:px-0
        `}
        >
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? " fadeLeftMini" : "fadeRightMini"
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
