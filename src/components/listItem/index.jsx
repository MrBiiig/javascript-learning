import React, { useState, useEffect } from "react";
import "./styles/index.less";
const ListItem = function (props) {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="list_item">
      <div className="block_in_item">
        <span>213123</span>
      </div>
      <div className="left_top_tag">
        <div className="left_angle_box"></div>
        <div className="text_box">标签</div>
        <div className="right_angle_box"></div>
      </div>
    </div>
  );
};
export default ListItem;
