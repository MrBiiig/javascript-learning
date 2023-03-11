import React from "react";
import { Input, Button } from "element-react";

import "./styles/index.less";

const CssLayouts = () => {
  return (
    <React.Fragment>
      <div className="page_cssLayouts_box">
        {/* 呃没必要。。。两种情况都一样，不过也算是加深一下box-sizing的印象 */}
        {/* 圣杯布局 content-box(chrome浏览器默认)的情况 */}
        <div className="bfc_container holy_grail_layout inner_content_box">
          <div className="header bg_color_4">header</div>
          <div className="content">
            <div className="center bg_color_1">center</div>
            <div className="left bg_color_2">left</div>
            <div className="right bg_color_3">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
        <br></br>
        {/* 圣杯布局 border-box的情况 */}
        <div className="bfc_container holy_grail_layout inner_border_box">
          <div className="header bg_color_4">header</div>
          <div className="content">
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
