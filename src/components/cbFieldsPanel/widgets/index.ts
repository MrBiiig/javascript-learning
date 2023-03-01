export const WIDGET_TYPE = {
  SINGLE_LINE_INPUT: "cb_singleLineInput",
  MULTI_LINE_INPUT: "cb_multiLineInput",
  NUMBER_INPUT: "cb_numberInput",
  DATE_TIME_PICKER: "cb_dateTimePicker",
  RADIO: "cb_radio",
  CHECKBOX: "cb_checkbox",
  DROPDOWN_SINGLE_CHECK: "cb_dropdownSingleCheck",
  DROPDOWN_MULTI_CHECK: "cb_dropdownMultiCheck",
  // CASCADE: "cb_cascade"
};
//字段类型本身属性 *****系统写死的，不因使用而变化*****
export const WIDGET_TYPE_PROPS = {
  cb_singleLineInput: { name: "单行文本" },
  cb_multiLineInput: { name: "多行文本" },
  cb_numberInput: { name: "数字" },
  cb_dateTimePicker: { name: "日期时间" },
  cb_radio: { name: "单选框" },
  cb_checkbox: { name: "复选框" },
  cb_dropdownSingleCheck: { name: "下拉单选" },
  cb_dropdownMultiCheck: { name: "下拉多选" },
  // cb_cascade: { name: "级联多选", flagNotYet: true }
};
//不同字段类型的字段的【默认属性】  *****此处是存放默认值，只是用来初始化字段属性值的，一般也是系统写死的*****
export const WIDGET_TYPE_MAPPING_FIELD_DEFAULT_PROPS = {
  cb_singleLineInput: { placeholder: "请输入", defaultValue: null },
  cb_multiLineInput: { placeholder: "请输入", defaultValue: null },
  cb_numberInput: { placeholder: "请输入", defaultValue: null },
  cb_dateTimePicker: { placeholder: "请选择时间", defaultValue: null },
  cb_radio: {
    options: [
      { label: "选项1", value: 111 },
      { label: "选项2", value: 222 },
    ],
  },
  cb_checkbox: {
    options: [
      { label: "选项1", value: 111 },
      { label: "选项2", value: 222 },
    ],
    defaultValue: [],
  },
  cb_dropdownSingleCheck: { placeholder: "请选择" },
  cb_dropdownMultiCheck: { placeholder: "请选择", defaultValue: [] },
  // cb_cascade: { name: "级联多选", flagNotYet: true }
};
