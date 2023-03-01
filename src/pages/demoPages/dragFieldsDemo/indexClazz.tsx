import React from "react";
import { withRouter } from "react-router-dom";
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
class DragFieldsDemo extends React.Component {
  constructor(props) {
    super(props);
    props.cacheLifecycles &&
      props.cacheLifecycles.didCache(this.componentDidCache);
    props.cacheLifecycles &&
      props.cacheLifecycles.didRecover(this.componentDidRecover);

    this.state = {
      fields,
      blockList: [{}, {}, {}, {}, {}, {}, {}],
      activeFieldBlock: {},
    };
  }

  componentDidMount() {}

  componentDidCache = () => {
    console.log("DragFieldsDemo componentDidCache");
  };
  componentDidRecover = () => {
    console.log("DragFieldsDemo componentDidRecover");
  };

  //交由子组件控制
  setBlockList = (newList = []) => {
    this.setState({ blockList: [...newList] });
  };
  setActiveFieldBlock = (activeFieldBlock = {}) => {
    this.setState({ activeFieldBlock: { ...activeFieldBlock } });
  };

  render() {
    return (
      <div>
        <FieldsPanel fields={this.state.fields}></FieldsPanel>
        <ListItem
          fields={this.state.fields}
          blockList={this.state.blockList}
          setBlockList={this.setBlockList}
          activeFieldBlock={this.state.activeFieldBlock}
          setActiveFieldBlock={this.setActiveFieldBlock}
        ></ListItem>
        <FieldDetailPanel
          fieldProps={this.state.activeFieldBlock}
        ></FieldDetailPanel>
      </div>
    );
  }
}

export default withRouter(DragFieldsDemo);
