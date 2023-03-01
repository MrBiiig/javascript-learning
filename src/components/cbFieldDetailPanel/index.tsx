import React, { useState, useEffect, Fragment } from "react";

import "./styles/index.less";

const FieldDetailPanel = (props) => {
  //必须有key才能操作保存
  const fieldProps =
    props.fieldProps && props.fieldProps.key ? props.fieldProps : null;

  return (
    <div className="chuangba_field_detail_panel_box">
      {fieldProps ? (
        <Fragment>{JSON.stringify(fieldProps)}</Fragment>
      ) : (
        <Fragment>空</Fragment>
      )}
    </div>
  );
};

export default FieldDetailPanel;
