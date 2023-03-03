import React from "react";
import { Input, Button } from "element-react";

const Algorithms1 = () => {
  const [formData, setFormData] = React.useState({
    caseData1: JSON.stringify([
      [1, 2, 2],
      [3, 4, 5, 5],
      [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
      10,
    ]),
    rsltData1: null,
  });

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
  };
  /* 递归 */
  const flatArr = (arr) => {
    if (!arr) {
      return [];
    }
    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      let elem = arr[i];
      if (Array.isArray(elem)) {
        result = result.concat(flatArr(elem));
      } else {
        result = result.concat(elem);
      }
    }

    return result;
  };
  /* 栈 */
  const flatArr1 = (arr) => {
    if (!arr) {
      return [];
    }
    let result = [];
    let stack = [arr];
    while (stack.length) {
      let current = stack.pop();
      if (Array.isArray(current)) {
        current.forEach((el) => {
          stack.push(el);
        });
      } else {
        result.push(current);
      }
    }
    return result;
  };
  /* 队列 */
  const flatArr2 = (arr) => {
    if (!arr) {
      return [];
    }
    let result = [];
    let queue = [arr];
    while (queue.length) {
      let current = queue.shift();
      if (Array.isArray(current)) {
        current.forEach((el) => {
          queue.push(el);
        });
      } else {
        result.push(current);
      }
    }
    return result;
  };
  /* reduce? */
  const flatArr3 = (arr) => {
    if (!arr) {
      return [];
    }
  };

  return (
    <React.Fragment>
      <div>
        输入：
        <Input
          value={formData.caseData1}
          onChange={(value) => {
            handleChange(value, "caseData1");
          }}
        ></Input>
        （没有数据校验别瞎填）
        <Button
          onClick={() => {
            handleChange(
              JSON.stringify(flatArr2(JSON.parse(formData.caseData1))),
              "rsltData1"
            );
          }}
        >
          扁平化
        </Button>
        <Input
          value={formData.rsltData1}
          onChange={(value) => {
            handleChange(value, "rsltData1");
          }}
          resize="none"
          tpye="textarea"
        ></Input>
      </div>
    </React.Fragment>
  );
};

export default Algorithms1;
