import React from "react";
import ReactDOM from "react-dom";

import LayoutPage from "@/pages/layoutPage";

import "element-theme-default";
import "./styles/index.less";

const App = () => {
  (function () {
    // function func() {
    //   return 1;
    // }
    // let jyy = 1;
    // console.log(jyy);
    // console.log(func);
    // console.log(func());
    // // 0  1  2  3  4   5
    // let arr = [3, 2, 3, 4, 12, 1];
    // console.log(arr); //6
    // for (let i = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
    // }
    // let max = 0;
    // let min = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] > max) {
    //     max = arr[i];
    //   }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] < min) {
    //     min = arr[i];
    //   }
    // }

    // let

    // console.log("max", max);
    // console.log("min", min);

    let arr = [3, 2, 3, 4, 12, 1];
    let temp;
    // for (let i = 0; i < arr.length - 1; i++) {
    //   for (let j = i + 1; j < arr.length; j++) {
    //     if (arr[i] < arr[j]) {
    //       temp = arr[i];
    //       arr[i] = arr[j];
    //       arr[j] = temp;
    //     }
    //   }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 0; j < arr.length - i; j++) {
    //     if (arr[j] > arr[j + 1]) {
    //       temp = arr[j + 1];
    //       arr[j + 1] = arr[j];
    //       arr[j] = temp;
    //     }
    //   }
    // }
    function paixu(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j] > arr[j + 1]) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }

    console.log(paixu([123, 5412, 423, 23, 234, 234, 23, 423, 5, 25, 47, 567]));
  })();

  return <LayoutPage></LayoutPage>;
};

//入口：React根节点与Dom节点绑定渲染
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
