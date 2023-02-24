/**
 * 角标签类型
 */
export const ANGLE_TAG_TYPE = {
  /* 在左上角 */
  LEFT_TOP: 2111,
  /* 在右上角 */
  RIGHT_TOP: 1211,
  /* 在右下角 */
  RIGHT_BOTTOM: 1121,
  /* 在左下角 */
  LEFT_BOTTOM: 1112,
};

export const ROTATE_OFFSET_STYLES_MAPPING = {
  [ANGLE_TAG_TYPE.LEFT_TOP]: (widthTextBlock) => {
    return {
      transform: "translate(-50%, " + widthTextBlock / 2 + "px) rotate(-45deg)",
      transformOrigin: "50% -" + widthTextBlock / 2 + "px",
      left: 0,
      top: 0,
    };
  },
  [ANGLE_TAG_TYPE.RIGHT_TOP]: (widthTextBlock) => {
    return {
      transform: "translate(50%, " + widthTextBlock / 2 + "px) rotate(45deg)",
      transformOrigin: "50% -" + widthTextBlock / 2 + "px",
      right: 0,
      top: 0,
    };
  },
  [ANGLE_TAG_TYPE.RIGHT_BOTTOM]: (widthTextBlock) => {
    return {
      transform: "translate(50%, -" + widthTextBlock / 2 + "px) rotate(-45deg)",
      transformOrigin: "50% calc(100% + " + widthTextBlock / 2 + "px)",
      right: 0,
      bottom: 0,
    };
  },
  [ANGLE_TAG_TYPE.LEFT_BOTTOM]: (widthTextBlock) => {
    return {
      transform: "translate(-50%, -" + widthTextBlock / 2 + "px) rotate(45deg)",
      transformOrigin: "50% calc(100% + " + widthTextBlock / 2 + "px)",
      left: 0,
      bottom: 0,
    };
  },
};

/**
 * 是否属于在底部的角标签 （涉及到两边三角形渲染角度的逻辑）
 */
export const isBottomType = (type) => {
  if (!type) {
    return false;
  }
  return (
    type === ANGLE_TAG_TYPE.LEFT_BOTTOM || type === ANGLE_TAG_TYPE.RIGHT_BOTTOM
  );
};
