import React from "react";
import { Button } from "element-react";

const itemDefaultStyle = {
  backgroundColor: "red",
  border: "1px solid #00ffff",
  width: "250px",
  height: "100px",
  color: "#fff",
};
const flexContainerDefaultStyle = {
  display: "flex",
  height: "400px",
  backgroundColor: "#eee",
};

const items = [{}, {}, {}, {}, {}, {}, {}, {}];

const flexDirectionList = ["row", "row-reverse", "column", "column-reverse"];
const flexWrapList = ["nowrap", "wrap", "wrap-reverse"];
const justifyContentList = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
];
const alignItemsList = [
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "baseline",
];
const alignContentList = [
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
];

const FlexLayoutTest = () => {
  const [flexDirection, setFlexDirection] = React.useState(
    flexDirectionList[0]
  );
  const [flexWrap, setFlexWrap] = React.useState(flexWrapList[0]);
  const [justifyContent, setJustifyContent] = React.useState(
    justifyContentList[0]
  );
  const [alignItems, setAlignItems] = React.useState(alignItemsList[0]);
  const [alignContent, setAlignContent] = React.useState(alignContentList[0]);

  return (
    <div>
      <div>flex布局</div>
      <a href="https://juejin.cn/post/6969797532687794183">掘金上讲的通透</a>
      <p>
        容器默认存在两根轴：水平的主轴（<b>main axis</b>）和垂直的交叉轴（
        <b>cross axis</b>）。<br></br>
        主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；
        <br></br>
        交叉轴的开始位置叫做cross start，结束位置叫做cross end。
        项目默认沿主轴排列。<br></br>
        单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
      </p>
      <p style={{ color: "red" }}>
        注意，设为 Flex
        布局以后，子元素的float、clear和vertical-align属性将失效。
      </p>
      <p>
        项目（子元素flex属性说明）：<br></br>
        当一个容器设置display:flex变成一个flex容器后，如果容器没有被占满，换言之有剩余空间，则flex-grow起作用（默认为0，即默认不起作用）。
        <br></br>
        相反，若空间不足，则flex-shrink起作用（默认为1，即默认起作用）。
        <br></br>
        <b>即默认只缩小不放大</b>
        <br></br>
        在计算放大或缩小比例时，要根据flex-basis的值来计算比例。
      </p>
      <p>
        <b>flex:1</b>
        即为<br></br>
        flex-grow : 1; <br></br>
        flex-shrink : 1; <br></br>
        flex-basis : 0%;<br></br>
        经常用作自适应布局，将父容器的 display：flex，侧边栏大小固定后，将内容区
        flex：1，内容区则会自动放大占满剩余空间。
      </p>
      <p>
        <b>flex:auto</b>
        即为<br></br>
        flex-grow : 1;<br></br>
        flex-shrink : 1;<br></br>
        flex-basis : auto;
      </p>
      <p>样例</p>
      <p>6个容器属性</p>
      <div>
        <span>flex-direction：</span>
        {flexDirectionList.map((val) => (
          <Button
            key={"flexDirectionList" + val}
            onClick={() => {
              setFlexDirection(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <div>
        <span>flex-wrap：</span>
        {flexWrapList.map((val) => (
          <Button
            key={"flexWrapList" + val}
            onClick={() => {
              setFlexWrap(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <div style={{ color: "blue" }}>
        {"flex-flow: <flex-direction> || <flex-wrap>;"}
      </div>
      <div>
        <span>justify-content：</span>
        {justifyContentList.map((val) => (
          <Button
            key={"justifyContentList" + val}
            onClick={() => {
              setJustifyContent(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <div>
        <span>align-items：</span>
        {alignItemsList.map((val) => (
          <Button
            key={"alignItemsList" + val}
            onClick={() => {
              setAlignItems(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <div>
        <span>align-content：</span>
        {alignContentList.map((val) => (
          <Button
            key={"alignContentList" + val}
            onClick={() => {
              setAlignContent(val);
            }}
          >
            {val}
          </Button>
        ))}
      </div>
      <div
        style={{
          ...flexContainerDefaultStyle,
          flexDirection: flexDirection,
          flexWrap: flexWrap,
          justifyContent: justifyContent,
          alignContent: alignContent,
        }}
      >
        {items.map((item, index) => (
          <div key={index} style={{ ...itemDefaultStyle }}>
            项目item（子元素）{index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexLayoutTest;
