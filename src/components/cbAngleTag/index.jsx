import React, { useState, useEffect, useRef } from "react";
import {
  ANGLE_TAG_TYPE,
  ROTATE_OFFSET_STYLES_MAPPING,
  isBottomType,
} from "./commons";
export { ANGLE_TAG_TYPE } from "./commons";
import "./styles/index.less";

//需要dom父节点position是非static（即非默认）
const AngleTag = ({
  labelText: props_labelText,
  fontSize: props_fontSize,
  size: props_size,
  labelColor: props_labelColor,
  backgroundColor: props_backgroundColor,
  type: props_type,
}) => {
  const textBlock = useRef(null);
  /**
   * 角标签类型   ANGLE_TAG_TYPE中包含所有可用类型
   */
  props_type = props_type ? props_type : ANGLE_TAG_TYPE.LEFT_BOTTOM;

  /**
   * 文本内容
   */
  props_labelText = props_labelText ? props_labelText : "";
  /**
   * 字体大小
   */
  props_fontSize = props_fontSize ? props_fontSize : "10px";
  /**
   * 标签大小，决定标签高度和两边等腰直角三角形的腰长
   */
  props_size = props_size ? props_size : "30px";
  /**
   * 文字颜色
   */
  props_labelColor = props_labelColor ? props_labelColor : "#fff";
  /**
   * 背景颜色
   */
  props_backgroundColor = props_backgroundColor ? props_backgroundColor : "red";

  const [widthTextBlock, setWidthTextBlock] = useState(0);
  /**
   * 监听props中宽高相关的参数变化，以调整标签
   */
  useEffect(() => {
    if (textBlock && textBlock.current) {
      adjustRotateAndOffset(textBlock.current);
    }
  }, [props_type, props_labelText, props_fontSize, props_size]);

  const adjustRotateAndOffset = (domNode) => {
    if (domNode) {
      //带单位的字符串描述宽度
      let width = window.getComputedStyle(domNode).width;
      //转为单精度浮点数字
      width = parseFloat(width);
      //预判异常情况
      if (!isNaN(width)) {
        //近似取两位小数
        width = Math.round(width * 100) / 100;
        console.log("setWidthTextBlock", width);
        setWidthTextBlock(width);
      }
    }
  };

  return (
    <div
      className="chuangba_angle_tag_box"
      style={ROTATE_OFFSET_STYLES_MAPPING[props_type](widthTextBlock)}
    >
      <div
        className={
          ((isBottomType(props_type) && "bottom_type ") || "") +
          "left_angle_block"
        }
        style={
          isBottomType(props_type)
            ? {
                borderTopColor: props_backgroundColor,
                borderTopWidth: props_size,
                borderLeftWidth: props_size,
              }
            : {
                borderBottomColor: props_backgroundColor,
                borderBottomWidth: props_size,
                borderLeftWidth: props_size,
              }
        }
      ></div>
      <div
        ref={(elem) => {
          textBlock.current = elem;
        }}
        className="text_block"
        style={{
          color: props_labelColor,
          backgroundColor: props_backgroundColor,
          lineHeight: props_size,
          fontSize: props_fontSize,
        }}
      >
        {props_labelText}
      </div>
      <div
        className={
          ((isBottomType(props_type) && "bottom_type ") || "") +
          "right_angle_block"
        }
        style={
          isBottomType(props_type)
            ? {
                borderTopColor: props_backgroundColor,
                borderTopWidth: props_size,
                borderRightWidth: props_size,
              }
            : {
                borderBottomColor: props_backgroundColor,
                borderBottomWidth: props_size,
                borderRightWidth: props_size,
              }
        }
      ></div>
    </div>
  );
};

export default AngleTag;
