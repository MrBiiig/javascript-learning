import React from "react";
import { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles/index.less";

function RotateSwitchDemo() {
  const [selected, setSelected] = useState("left");
  const [wrapperRotating, setWrapperRotating] = useState(false);
  // 获取容器元素
  const wrapper = useRef();
  useEffect(() => {
    // 先给容器设置一个css变量并附初始值
    wrapper.current.style.setProperty("--groove-left", "12px");
  }, []);
  const handleClick = (selected, e) => {
    let i = 0;
    // 点击后，修改css变量的值
    if (selected === "left") {
      i = 0;
    } else if (selected === "right") {
      i = 1;
    }

    wrapper.current.style.setProperty(
      "--groove-left",
      `calc(12px + ${i * 50}%)`
    );
    wrapper.current.style.setProperty(
      "--wraper-origin",
      `${i === 0 ? "75% top" : "25% top"}`
    );
    wrapper.current.style.setProperty(
      "--wraper-rotate",
      `${i === 0 ? -8 : 8}deg`
    );
    setWrapperRotating(true);
    setTimeout(() => {
      setSelected(selected);
    }, 500);

    setTimeout(() => {
      setWrapperRotating(false);
    }, 550);
  };

  return (
    <div className="page_rotateSwitchDemo_box">
      <div
        ref={wrapper}
        className={"btnWrapper " + (wrapperRotating ? "rotateWrap" : "")}
      >
        <div
          onClick={handleClick.bind(this, "left")}
          className={"btn " + (selected === "left" ? "active" : "")}
        >
          按钮1
        </div>
        <div
          onClick={handleClick.bind(this, "right")}
          className={"btn " + (selected === "right" ? "active" : "")}
        >
          按钮2
        </div>
      </div>
    </div>
  );
}
export default withRouter(RotateSwitchDemo);
