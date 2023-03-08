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
  const time = (timer) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timer);
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
    //红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯
    //三个亮灯函数已经存在:
    function red() {
      console.log("red");
    }
    function yellow() {
      console.log("yellow");
    }
    function green() {
      console.log("green");
    }
    const step = () => {
      Promise.resolve()
        .then(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              red();
              resolve();
            }, 3000);
          });
        })
        .then(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              yellow();
              resolve();
            }, 2000);
          });
        })
        .then(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              green();
              resolve();
            }, 1000);
          });
        });
    };
    step();
  };

  const realizeMergePromise = () => {
    //造Promise样例
    const ajax1 = () =>
      time(2000).then(() => {
        console.log(1);
        return 1;
      });
    const ajax2 = () =>
      time(1000).then(() => {
        console.log(2);
        return 2;
      });
    const ajax3 = () =>
      time(1000).then(() => {
        console.log(3);
        return 3;
      });

    const mergePromise = (pFuncArr) => {
      if (!pFuncArr || !pFuncArr.length) {
        return Promise.resolve();
      }
      return new Promise((mainResolve) => {
        let data = [];
        pFuncArr.reduce((pre, cur, idx) => {
          return pre.then((preRes) => {
            return new Promise((curResolve) => {
              cur().then((curRes) => {
                data.push(curRes);
                curResolve(curRes);
                if (idx === pFuncArr.length - 1) {
                  mainResolve(data);
                }
              });
            });
          });
        }, Promise.resolve());
      });
    };
    mergePromise([ajax1, ajax2, ajax3]).then((res) => {
      console.log(res);
    });
  };

  const limitAndQuickLoad = () => {
    //造Promise样例
    const pFuncArr = [
      () =>
        time(8000).then(() => {
          console.log(1);
          return 1;
        }),
      () =>
        time(5000).then(() => {
          console.log(2);
          return 2;
        }),
      () =>
        time(2000).then(() => {
          console.log(3);
          return 3;
        }),
      () =>
        time(1000).then(() => {
          console.log(4);
          return 4;
        }),
      () =>
        time(2000).then(() => {
          console.log(5);
          return 5;
        }),
      () =>
        time(3000).then(() => {
          console.log(6);
          return 6;
        }),
      () =>
        time(4000).then(() => {
          console.log(7);
          return 7;
        }),
      () =>
        time(3000).then(() => {
          console.log(8);
          return 8;
        }),
      () =>
        time(2000).then(() => {
          console.log(9);
          return 9;
        }),
    ];

    const start1 = (pFuncArr) => {};
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
      <Button onClick={realizeMergePromise}>实现mergePromise函数</Button>
      <span>
        实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中
      </span>
      <Button onClick={limitAndQuickLoad}>
        限制异步操作的并发个数并尽可能快的完成全部
      </Button>
      <span>
        但有一个要求，任何时刻同时执行的数量不可以超过3个。要求尽可能快速地将所有执行完成
      </span>

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
