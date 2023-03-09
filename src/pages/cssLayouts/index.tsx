import React from "react";
import { Input, Button } from "element-react";

import "./styles/index.less";

const CssLayouts = () => {
  return (
    <React.Fragment>
      <div className="page_cssLayouts_box">
        <div className="container holy">
          <div className="holy_header bg_color_4">header</div>
          <div className="container">
            <div className="holy_grail_center_content bg_color_1">center</div>
            <div className="holy_grail_left_content bg_color_2">left</div>
            <div className="holy_grail_right_content bg_color_3">right</div>
          </div>
          <div className="holy_footer bg_color_5">footer</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CssLayouts;
