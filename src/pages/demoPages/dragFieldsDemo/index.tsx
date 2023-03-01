import React from "react";
import { withRouter } from "react-router-dom";
import { useDidCache, useDidRecover } from "react-router-cache-route";
import ListItem from "@/components/cbListItem";
import FieldsPanel from "@/components/cbFieldsPanel";
import FieldDetailPanel from "@/components/cbFieldDetailPanel";
import { WIDGET_TYPE } from "@/components/cbFieldsPanel/widgets";

import "./styles/index.less";

//一般是数据库中查到的
const fields = [
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

const DragFieldsDemo = (props) => {
  const [blockList, setBlockList] = React.useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [activeFieldBlock, setActiveFieldBlock] = React.useState({});

  useDidCache(() => {
    console.log("List cached 1");
  });

  // support multiple effect
  useDidCache(() => {
    console.log("List cached 2");
  });

  useDidRecover(() => {
    console.log("List recovered");
  });

  return (
    <div className="page_dragFieldsDemo_box">
      <FieldsPanel fields={fields}></FieldsPanel>
      <ListItem
        fields={fields}
        blockList={blockList}
        setBlockList={setBlockList}
        activeFieldBlock={activeFieldBlock}
        setActiveFieldBlock={setActiveFieldBlock}
      ></ListItem>
      <FieldDetailPanel fieldProps={activeFieldBlock}></FieldDetailPanel>
    </div>
  );
};
export default withRouter(DragFieldsDemo);
