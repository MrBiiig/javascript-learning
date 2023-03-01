import React, { useState, useEffect } from "react";

import "./styles/index.less";

const FieldsPanel = (props) => {
  const fields = props.fields ? props.fields : [];

  const handleDragStart = (fieldKey, event) => {
    event.dataTransfer.setData("fieldKey", fieldKey);
  };

  return (
    <div className="chuangba_fields_panel_box">
      {fields.map((el) => (
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

export default FieldsPanel;
