import React from "react";
import { Input, Button } from "element-react";

import "./styles/index.less";

const CssLayouts = () => {
  return (
    <React.Fragment>
      <div className="page_cssLayouts_box">
        <div className="bfc_container holy_grail_layout">
          <div className="header bg_color_4">header</div>
          <div className="bfc_container">
            <div className="center bg_color_1">center</div>
            <div className="left bg_color_2">left</div>
            <div className="right bg_color_3">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CssLayouts;
