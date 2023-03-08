import React from "react";
import { Input, Button } from "element-react";

const Algorithms = () => {
  const test = () => {
    const promise = new Promise((resolve, reject) => {
      // resolve({ aa: 11 });
      return Promise.resolve(2);
    });
    promise
      .then((res) => {
        console.log("then", res);
        return Promise.reject(2);
      })
      .then((res) => {
        console.log("");
      })
      .catch((res) => {
        console.log("catch", res);
      });
  };

  const print123ByPromise = () => {
    [1, 2, 3].reduce((pre, cur) => {
      return pre.then((res) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(cur);
            resolve();
          }, 1000);
        });
      });
    }, Promise.resolve());
  };
  const redGreenLightByPromise = () => {
    //三个亮灯函数已经存在:
    function red() {
      console.log("red");
    }
    function green() {
      console.log("green");
    }
    function yellow() {
      console.log("yellow");
    }
  };
  return (
    <React.Fragment>
      <Button onClick={test}>Test</Button>
      <Button onClick={print123ByPromise}>
        Promise实现每隔一秒输出1，2，3
      </Button>
      <Button onClick={redGreenLightByPromise}>
        Promise实现红绿灯交替重复亮
      </Button>

      <div>
        <p>
          在Promise中，返回任意一个非 promise 的值都会被包裹成 promise
          对象，例如return 2会被包装为return Promise.resolve(2)。
        </p>
        <p>
          注意这里不包括new
          Promise时里面返回，只包含then或catch中返回。（如果再new
          Promise中返回会进不到then或catch）
        </p>
      </div>
    </React.Fragment>
  );
};

export default Algorithms;
/* 
https://juejin.cn/post/6844904077537574919
promise相关特性测验
*/
