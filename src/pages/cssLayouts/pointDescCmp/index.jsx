import React from "react";
import { Input, Button, Popover } from "element-react";

const PointDescCmp = (props) => {
  let renderJSX = <div></div>;

  switch (props.pointName) {
    case "选择器优先级":
      renderJSX = (
        <div>
          选择器的优先级:
          <ul>
            <li>内联样式：1000</li>
            <li>id 选择器：100</li>
            <li>类选择器、伪类选择器、属性选择器：10</li>
            <li>标签选择器、伪元素选择器：1</li>
          </ul>
          <Popover
            placement="top-start"
            title="注意事项"
            width="700"
            trigger="hover"
            content={
              <ul>
                <li>!important声明的样式的优先级最高</li>
                <li>如果优先级相同，则最后出现的样式生效</li>
                <li>继承得到的样式的优先级最低</li>
                <li>
                  通用选择器（*）、子选择器（&gt;）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为
                  0{" "}
                </li>
                <li>
                  样式表的来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt;
                  外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式
                </li>
              </ul>
            }
          >
            <Button>注意</Button>
          </Popover>
        </div>
      );
      break;
    default:
      renderJSX = <div>123</div>;
  }

  return renderJSX;
};

export default PointDescCmp;
