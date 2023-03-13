import React from "react";
import { Input, Button, Popover } from "element-react";
import PointDescCmp from "./pointDescCmp";

import "./styles/index.less";

const CssLayouts = () => {
  return (
    <React.Fragment>
      <div className="page_cssLayouts_box">
        <div style={{ textAlign: "center", display: "none" }}>
          <div class="my_wife">贾银银</div>
        </div>
        <PointDescCmp pointName="选择器优先级"></PointDescCmp>

        <div>
          两个靠margin复制实现的圣杯布局2333333（其实没必要。。。两种情况都一样，不过也算是加深一下box-sizing的印象）
        </div>
        {/* 呃没必要。。。两种情况都一样，不过也算是加深一下box-sizing的印象 */}
        {/* 圣杯布局 margin负值方式 content-box(chrome浏览器默认)的情况 */}
        <div className="bfc_container holy_grail_layout1 inner_content_box">
          <div className="header bg_color_4">header</div>
          <div className="content">
            <div className="center bg_color_1">center</div>
            <div className="left bg_color_2">left</div>
            <div className="right bg_color_3">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
        <br></br>
        {/* 圣杯布局 margin负值方式 border-box的情况 */}
        <div className="bfc_container holy_grail_layout1 inner_border_box">
          <div className="header bg_color_4">header</div>
          <div className="content">
            <div className="center bg_color_1">center</div>
            <div className="left bg_color_2">left</div>
            <div className="right bg_color_3">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
        <br></br>
        {/* 圣杯布局 flex方式*/}
        <div>圣杯布局 flex方式</div>
        <div className="bfc_container holy_grail_layout2">
          <div className="header bg_color_1">header</div>
          <div className="content">
            <div className="left bg_color_2">left</div>
            <div className="center bg_color_3">center</div>
            <div className="right bg_color_4">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
        <br></br>
        {/* 双飞翼布局 */}
        <div>双飞翼布局</div>
        <div>
          总体与圣杯布局的margin负值方式相同，区别只在于: 1.
          圣杯中用左右padding的地方在双飞翼中换成了加个子元素设置子元素的左右margin;
          2. 还有就是双飞翼不必再用position relative 再偏移调整一下了
        </div>
        <div className="bfc_container twin_wings_layout">
          <div className="header bg_color_1">header</div>
          <div className="content">
            <div className="center bg_color_2">
              <div className="inner_center">center</div>
            </div>
            <div className="left bg_color_3">left</div>
            <div className="right bg_color_4">right</div>
          </div>
          <div className="footer bg_color_5">footer</div>
        </div>
      </div>
      <div>非浮动元素被</div>
    </React.Fragment>
  );
};

export default CssLayouts;
