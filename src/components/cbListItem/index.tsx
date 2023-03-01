import React, { useState, useEffect } from "react";

import { Input, InputNumber, Radio, Checkbox, Select } from "element-react";

import AngleTag from "@/components/cbAngleTag";

import {
  WIDGET_TYPE,
  WIDGET_TYPE_MAPPING_FIELD_DEFAULT_PROPS,
} from "@/components/cbFieldsPanel/widgets";

import "./styles/index.less";

//单个项目中的block内的字段（block能称之为字段，就是block内是有控件的，不是空block）
const FieldBlock = (props) => {
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
  const fields = props.fields ? props.fields : [];
  const blockList = props.blockList ? props.blockList : [];
  const activeFieldBlock = props.activeFieldBlock ? props.activeFieldBlock : {};

  const setBlockList = (newList = []) => {
    props.setBlockList
      ? props.setBlockList(newList)
      : console.error("props.setBlockList is null");
  };
  const setActiveFieldBlock = (activeFieldBlock = {}) => {
    props.setActiveFieldBlock
      ? props.setActiveFieldBlock(activeFieldBlock)
      : console.error("props.setActiveFieldBlock is null");
  };

  useEffect(() => {}, []);

  const handleDragEnter = (dragEnterBlockIndex, event) => {
    // flagDragEnter清掉以前的，弄上新的
    setBlockList(
      blockList.map((el, idx) => ({
        ...el,
        flagDragEnter: idx === dragEnterBlockIndex ? true : false,
      }))
    );
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (dropBlockIndex, event) => {
    event.preventDefault();
    let fieldKey = event.dataTransfer.getData("fieldKey");
    let currentField = fields.find((el) => el.key === fieldKey);
    let widgetType = currentField ? currentField.type : null;
    if (widgetType) {
      blockList[dropBlockIndex] = {
        key: widgetType + dropBlockIndex,
        type: widgetType,
        ...WIDGET_TYPE_MAPPING_FIELD_DEFAULT_PROPS[widgetType],
      };
      setBlockList([...blockList]);
    } else {
      console.error("currentField or widgetType is null!!");
    }
  };

  const handleDragLeave = (event) => {
    // flagDragEnter清掉
    setBlockList(
      blockList.map((el) => ({
        ...el,
        flagDragEnter: false,
      }))
    );
  };

  return (
    <div className="chuangba_list_item_box">
      {blockList.map((el, idx) => (
        <div
          key={el.key ? el.key : idx}
          className={
            "block_in_item block_in_item" +
            idx +
            " " +
            (el.type ? " not_empty" : "") +
            (!!el.key && activeFieldBlock.key === el.key ? " active" : "") +
            (el.flagWholeRow ? " whole_row" : "") +
            (el.flagDragEnter ? " drag_over" : "")
          }
          onClick={() => {
            setActiveFieldBlock(el);
          }}
        >
          {el.type ? (
            <FieldBlock type={el.type}></FieldBlock>
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
