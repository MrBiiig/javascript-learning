export const WIDGET_TYPE = {
  SINGLE_LINE_INPUT: "cb_singleLineInput",
  MULTI_LINE_INPUT: "cb_multiLineInput",
  NUMBER_INPUT: "cb_numberInput",
  DATE_TIME_PICKER: "cb_dateTimePicker",
  RADIO: "cb_radio",
  CHECKBOX: "cb_checkbox",
  DROPDOWN_SINGLE_CHECK: "cb_dropdownSingleCheck",
  DROPDOWN_MULTI_CHECK: "cb_dropdownMultiCheck",
  CASCADE: "cb_cascade",
};
export const WIDGET_TYPE_PROPS = {
  cb_singleLineInput: { name: "单行文本" },
  cb_multiLineInput: { name: "多行文本" },
  cb_numberInput: { name: "数字" },
  cb_dateTimePicker: { name: "日期时间" },
  cb_radio: { name: "单选框" },
  cb_checkbox: { name: "复选框" },
  cb_dropdownSingleCheck: { name: "下拉单选" },
  cb_dropdownMultiCheck: { name: "下拉多选" },
  cb_cascade: { name: "级联多选", flagNotYet: true },
};
