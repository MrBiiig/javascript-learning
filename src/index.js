import React from "react";
import ReactDOM from "react-dom";

import LayoutPage from "@/pages/layoutPage";

import "element-theme-default";
import "./styles/index.less";

const App = () => {
  return <LayoutPage></LayoutPage>;
};

//入口：React根节点与Dom节点绑定渲染
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
