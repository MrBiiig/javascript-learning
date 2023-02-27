import React, { useState, useEffect } from "react";

import { Input, InputNumber, Radio, Checkbox, Select } from "element-react";

import AngleTag from "@/components/cbAngleTag";

import { WIDGET_TYPE } from "@/components/cbWidgetsPanel/widgets";

import "./styles/index.less";

//单个项目中的block内的控件
const BlockWidget = (props) => {
  const type = props.type ? props.type : "";
  switch (type) {
    case WIDGET_TYPE.SINGLE_LINE_INPUT:
      return <Input></Input>;
    case WIDGET_TYPE.MULTI_LINE_INPUT:
      return (
        <Input
          resize="none"
          type="textarea"
          autosize={{ minRows: 2, maxRows: 4 }}
        />
      );
    case WIDGET_TYPE.NUMBER_INPUT:
      return <InputNumber></InputNumber>;
    case WIDGET_TYPE.RADIO:
      return (
        <Radio.Group>
          <Radio value="3">备选项</Radio>
          <Radio value="6">备选项</Radio>
          <Radio value="9">备选项</Radio>
        </Radio.Group>
      );
    case WIDGET_TYPE.CHECKBOX:
      return (
        <Checkbox.Group>
          <Checkbox label="复选框 A"></Checkbox>
          <Checkbox label="复选框 B"></Checkbox>
          <Checkbox label="复选框 C"></Checkbox>
        </Checkbox.Group>
      );
    case WIDGET_TYPE.DROPDOWN_SINGLE_CHECK:
      return (
        <Select placeholder="请选择">
          {[
            { value: "1", label: "哈哈哈" },
            { value: "2", label: "吼吼吼" },
          ].map((el) => {
            return (
              <Select.Option key={el.value} label={el.label} value={el.value} />
            );
          })}
        </Select>
      );
    case WIDGET_TYPE.DROPDOWN_MULTI_CHECK:
      return (
        <Select value={[]} placeholder="请选择" multiple={true}>
          {[
            { value: "1", label: "呵呵呵" },
            { value: "2", label: "嘿嘿嘿" },
          ].map((el) => {
            return (
              <Select.Option key={el.value} label={el.label} value={el.value} />
            );
          })}
        </Select>
      );
  }
  return <div>???</div>;
};

//列表中的单个项目
const ListItem = (props) => {
  const widgets = props.widgets ? props.widgets : [];

  const [blockArr, setBlockArr] = useState([{}, {}, {}, {}, {}, {}, {}]);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const handleDragEnter = (dragEnterBlockIndex, event) => {
    console.log("========================================");
    console.log("handleDragEnter");
    console.log(event.currentTarget.className);
    console.log("========================================");
    // flagDragEnter清掉以前的，弄上新的
    setBlockArr(
      blockArr.map((el, idx) => ({
        ...el,
        flagDragEnter: idx === dragEnterBlockIndex ? true : false,
      }))
    );
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (dropBlockIndex, event) => {
    console.log("handleDrop");
    event.preventDefault();
    let widgetKey = event.dataTransfer.getData("widgetKey");
    let currentWidget = widgets.find((el) => el.key === widgetKey);
    let widgetType = currentWidget ? currentWidget.type : null;
    if (widgetType) {
      blockArr[dropBlockIndex] = {
        key: widgetType + dropBlockIndex,
        type: widgetType,
      };
      setBlockArr([...blockArr]);
    } else {
      console.error("currentWidget or widgetType is null!!");
    }
  };

  const handleDragLeave = (event) => {
    console.log("========================================");
    console.log("handleDragLeave");
    console.log(event.currentTarget.className);
    console.log("========================================");
    if (
      event.currentTarget.className == "block_in_item block_in_item0  drag_over"
    ) {
      debugger;
    }
    // flagDragEnter清掉
    setBlockArr(
      blockArr.map((el) => ({
        ...el,
        flagDragEnter: false,
      }))
    );
  };

  return (
    <div className="chuangba_list_item_box">
      {blockArr.map((el, idx) => (
        <div
          key={el.key ? el.key : idx}
          className={
            "block_in_item block_in_item" +
            idx +
            " " +
            (el.flagWholeRow ? " whole_row" : "") +
            (el.flagDragEnter ? " drag_over" : "")
          }
        >
          {el.type ? (
            <BlockWidget type={el.type}></BlockWidget>
          ) : (
            <div
              className="inner_border_block"
              onDragEnter={handleDragEnter.bind(this, idx)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop.bind(this, idx)}
            >
              &nbsp;
            </div>
          )}
        </div>
      ))}

      <AngleTag labelText="标签"></AngleTag>
    </div>
  );
};
export default ListItem;
