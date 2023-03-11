import React from "react";
import { Input, Button } from "element-react";
const twoObj = {};
const original_obj = {
  oneBigInt: BigInt(123),
  oneBoolean: false,
  oneDate: new Date("2023-3-7"),
  oneNull: null,
  oneNumber: 123,
  oneObject: {
    twoDate: new Date("2023-3-7"),
    twoNull: null,
    twoNumber: 123,
    twoObject: twoObj,
  },
  oneRegExp: /.*/,
  oneString: "123",
  oneSymbol: Symbol("123"),
  oneUndefined: undefined,
};
//设置循环引用
twoObj["threeObj"] = original_obj;

const Algorithms = () => {
  const copyDeep1 = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  const copyDeep2 = (obj, caches = new WeakMap()) => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (obj instanceof Date) {
      return new Date(obj);
    }
    if (obj instanceof RegExp) {
      return new RegExp(obj);
    }

    if (caches.has(obj)) {
      return caches.get(obj);
    }

    let cloneObj = new obj.constructor();
    caches.set(obj, cloneObj);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloneObj[key] = copyDeep2(obj[key], caches); // 递归拷贝
      }
    }
    return cloneObj;
  };
  const copyDeep3 = (obj, caches = new WeakMap()) => {
    if (obj === null || typeof obj !== "object") {
      //不是对象且不为null，不存在引用问题，过滤出基本数据类型，所以直接返回
      return obj;
    }
    if (obj instanceof Date) {
      //日期类型
      return new Date(obj);
    }
    if (obj instanceof RegExp) {
      //正则表达式类型
      return new RegExp(obj);
    }
    if (caches.has(obj)) {
      return caches.get(obj);
    }
    let cloneObj = new obj.constructor();
    caches.set(obj, cloneObj);
    Object.keys(obj).forEach((key) => {
      cloneObj[key] = copyDeep3(obj[key], caches);
    });
    return cloneObj;
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          console.log(copyDeep1(original_obj));
        }}
      >
        深拷贝JSON简单版【不支持值为undefined、BigInt、Symbol、函数、循环引用的情况】
      </Button>
      <Button
        onClick={() => {
          console.log(copyDeep2(original_obj));
        }}
      >
        深拷贝for in+hasOwnProperty
      </Button>
      <Button
        onClick={() => {
          console.log(copyDeep3(original_obj));
        }}
      >
        深拷贝Object.keys
      </Button>

      <div>
        <p>遍历对象所有的可枚举属性（自有的+继承的属性），使用 for...in</p>
        <p>
          遍历对象自有的所有可枚举属性（非继承属性），使用 Object.keys() 或
          for...in + Objec.hasOwnProperty()
        </p>
        <p>
          获取对象所有继承属性（非自有属性），可以使用 for...in + Object.keys()
        </p>
        <p>
          遍历对象自有的所有可枚举和不可枚举属性（非继承属性），使用Object.getOwnPropertyNames()
        </p>
        <p>
          获取对象自有的所有可枚举、不可枚举属性和继承属性，使用 for...in +
          Object.getOwnPropertyNames(obj) 或 for...in + Object.keys() +
          Object.getOwnPropertyNames(obj)
        </p>
      </div>
    </React.Fragment>
  );
};

export default Algorithms;
/* 
https://blog.csdn.net/qq_43540219/article/details/108064082
可以看出输入进去的对象b直接被转换成了字符串’[object Object]’，并且后输入的c直接覆盖了b（a[b]输出的456而不是123），
由此可见对象作为对象的key时，会自动转换成字符串’[object Object]'
*/
/* 
let aarr = []
aarr instanceof Array
true
aarr instanceof Object
true
BigInt(123) instanceof BigInt
false
Symbol("123") instanceof Symbol
false
null instanceof Object
false
undefined instanceof Object
false
*/
