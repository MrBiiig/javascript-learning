import React from "react";
import { Button } from "element-react";

const ClosureTest = () => {
  const test = () => {
    const o = (function () {
      let obj = { a: 1, b: 2 };
      return {
        get(k) {
          return obj[k];
        },
      };
    })();
    // 如何在不改变上面代码的情况下 修改obj对象
    Object.defineProperty(Object.prototype, "xxx", {
      get() {
        return this;
      },
    });

    let obj2 = o.get("xxx");
    obj2.a = "hello world";
    obj2.c = 3;
    console.log(o.get("a")); // hello world
    console.log(o.get("b")); // 2
    console.log(o.get("c")); // 3
  };

  const currifyTest = () => {
    function addition(a, b) {
      return a + b;
    }
    const currying = (fn, ...args) => {
      if (args.length < fn.length) {
        return (...newArgs) => currying(fn, ...args, ...newArgs);
      } else {
        return fn(...args);
      }
    };
    const sum = currying(addition);
    console.log("----", sum(1, 3)(3));
  };

  return (
    <div>
      <Button onClick={test}>test闭包原型链漏洞</Button>
      <div>
        {`function addition(a, b) { return a + b; } addition(1, 2); // 3 // 让其支持 addition(1)(2); // 3`}
      </div>
      <div>{`addition(1, 2); // 3`}</div>
      <div>{`让其支持 addition(1)(2); // 3`}</div>
      <Button onClick={currifyTest}>
        柯里化（需要原函数参数长度有限，且传入参数要小于等于原函数参数长度）
      </Button>
    </div>
  );
};

export default ClosureTest;
