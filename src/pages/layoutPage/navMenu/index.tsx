import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "element-react";

const NavMenu = (props) => {
  console.log(props);
  return (
    <div style={{ margin: "10px", borderBottom: "1px solid #aaa" }}>
      <Button
        onClick={() => {
          props.history.push("/dragFieldsDemo");
        }}
      >
        拖拽控件demo（函数式的路由缓存生命周期）
      </Button>
      <Button
        onClick={() => {
          props.history.push("/dragFieldsDemoClazz");
        }}
      >
        拖拽控件demo（类式的路由缓存生命周期）
      </Button>
      <Button
        onClick={() => {
          props.history.push("/recordAudioDemo");
        }}
      >
        线上录音demo
      </Button>
      <Button
        onClick={() => {
          props.history.push("/rotateSwitchDemo");
        }}
      >
        翻转滑块switch
      </Button>
      <Button
        onClick={() => {
          props.history.push("/navMenu3D");
        }}
      >
        3D导航菜单栏
      </Button>
    </div>
  );
};

export default withRouter(NavMenu);
