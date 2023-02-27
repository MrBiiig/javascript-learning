import React from "react";
import ReactDOM from "react-dom";
import "element-theme-default";
import "./styles/index.less";
import ListItem from "@/components/cbListItem";
import WidgetsPanel from "@/components/cbWidgetsPanel";

import { WIDGET_TYPE } from "@/components/cbWidgetsPanel/widgets";

//一般是数据库中查到的
const widgets = [
  {
    label: "单行文本测试1",
    key: "单行文本测试1",
    type: WIDGET_TYPE.SINGLE_LINE_INPUT,
  },
  {
    label: "多行文本测试11",
    key: "多行文本测试11",
    type: WIDGET_TYPE.MULTI_LINE_INPUT,
  },
  {
    label: "数字测试11",
    key: "数字测试11",
    type: WIDGET_TYPE.NUMBER_INPUT,
  },
  {
    label: "单选测试12323",
    key: "单选测试12323",
    type: WIDGET_TYPE.RADIO,
  },
  {
    label: "多选测试11",
    key: "多选测试11",
    type: WIDGET_TYPE.CHECKBOX,
  },
  {
    label: "单选下拉测试11",
    key: "单选下拉测试11",
    type: WIDGET_TYPE.DROPDOWN_SINGLE_CHECK,
  },
  {
    label: "多选下拉测试11",
    key: "多选下拉测试11",
    type: WIDGET_TYPE.DROPDOWN_MULTI_CHECK,
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <WidgetsPanel widgets={widgets}></WidgetsPanel>
        <ListItem widgets={widgets}></ListItem>
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
