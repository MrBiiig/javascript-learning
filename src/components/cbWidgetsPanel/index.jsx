import React, { useState, useEffect } from "react";

import "./styles/index.less";

const WidgetsPanel = (props) => {
  const widgets = props.widgets ? props.widgets : [];

  const handleDragStart = (widgetKey, event) => {
    console.log("handleDragStart");
    event.dataTransfer.setData("widgetKey", widgetKey);
  };

  return (
    <div className="chuangba_widgets_panel_box">
      {widgets.map((el) => (
        <span
          key={
            el.key
          } /* 此处用的key包括onDragStart事件中用的key是临时性的，之后要选个唯一性的字段作为key */
          className="draggable_span clazz_mark_for_drag"
          draggable={true}
          style={
            {
              // textDecoration: widgetObj.flagNotYet ? "line-through" : "none",
            }
          }
          onDragStart={handleDragStart.bind(this, el.key)}
        >
          {el.label}
        </span>
      ))}
    </div>
  );
};

export default WidgetsPanel;
