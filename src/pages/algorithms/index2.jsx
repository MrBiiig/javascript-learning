import React from "react";
import { Input, Button } from "element-react";

const Algorithms2 = () => {
  /* 大拆小 */
  const test1 = () => {
    let i = 0;
    let start = Date.now();
    function count() {
      do {
        i++;
      } while (i % 1e6 != 0);
      if (i == 1e9) {
        console.log("test1 Done in " + (Date.now() - start) + "ms");
      } else {
        setTimeout(count);
      }
    }
    count();
  };
  const test2 = () => {
    let i = 0;
    let start = Date.now();
    function count() {
      //早调度就早度过setTimeout默认的那最小4ms
      if (i < 1e9 - 1e6) {
        setTimeout(count);
      }
      do {
        i++;
      } while (i % 1e6 != 0);
      if (i == 1e9) {
        console.log("test2 Done in " + (Date.now() - start) + "ms");
      }
    }
    count();
  };

  const debounce1 = (fn, delay) => {
    let timeoutId = null;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn();
      }, delay);
    };
  };
  const debounce2 = (fn, delay) => {
    let timeoutId = null;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      } else {
        fn();
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    };
  };

  const throttle1 = (fn, delay) => {
    let lastTime = 0;
    return () => {
      let now = Date.now();
      if (now - lastTime > delay) {
        fn();
        lastTime = now;
      }
    };
  };
  const throttle2 = (fn, delay) => {
    let timeoutId = null;
    return () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          fn();
          timeoutId = null;
        }, delay);
      }
    };
  };
  const throttle3 = (fn, delay) => {
    let timeoutId = null;
    return () => {
      if (!timeoutId) {
        fn();
        timeoutId = setTimeout(() => {
          timeoutId = null;
        }, delay);
      }
    };
  };

  return (
    <React.Fragment>
      <Button onClick={test1}>大任务拆分为小任务 test1</Button>
      <Button onClick={test2}>大任务拆分为小任务 test2</Button>
      <Button
        onClick={debounce1(() => {
          console.log("trigger");
        }, 1000)}
      >
        防抖（延时执行）
      </Button>
      <Button
        onClick={debounce2(() => {
          console.log("trigger");
        }, 1000)}
      >
        防抖（可立即执行）
      </Button>
      <Button
        onClick={throttle1(() => {
          console.log("trigger");
        }, 1000)}
      >
        节流（立即执行时间差简单版）
      </Button>
      <Button
        onClick={throttle2(() => {
          console.log("trigger");
        }, 1000)}
      >
        节流（延迟执行定时器版）
      </Button>
      <Button
        onClick={throttle3(() => {
          console.log("trigger");
        }, 1000)}
      >
        节流（立即执行定时器版）
      </Button>
      <div>
        *
        立即执行和延迟执行代码里的最简单区分就是fn函数实在settimeout内执行还是其外执行
      </div>
    </React.Fragment>
  );
};

export default Algorithms2;
