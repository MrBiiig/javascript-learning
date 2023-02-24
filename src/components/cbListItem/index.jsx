import React, { useState, useEffect } from "react";

import AngleTag, { ANGLE_TAG_TYPE } from "@/components/cbAngleTag";

import "./styles/index.less";

const ListItem = (props) => {
  const [testLabel, setTestLabel] = useState("标签21");
  const [testBackgroundColor, setTestBackgroundColor] = useState("red");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="chuangba_list_item_box">
      <div className="block_in_item">
        <span>213123</span>
      </div>
      <AngleTag
        labelText={testLabel}
        backgroundColor={testBackgroundColor}
      ></AngleTag>
      <button
        onClick={() => {
          setTestLabel("标签121233123");
          setTestBackgroundColor("blue");
        }}
      >
        button
      </button>
    </div>
  );
};
export default ListItem;
