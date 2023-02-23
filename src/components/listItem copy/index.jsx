import React from "react";
import csses from "./styles";
const ListItem = function (props) {
  return (
    <div className={csses.main} style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#ddd",
          padding: "5px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div class="block_in_item">
          <span>213123</span>
          <div
            style={{
              width: "100px",
              borderBottom: "100px solid red",
              borderTop: "none",
              borderLeft: "50px solid transparent",
              borderRight: "50px solid transparent",
            }}
          >
            标签
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
