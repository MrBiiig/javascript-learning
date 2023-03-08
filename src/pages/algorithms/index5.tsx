import React from "react";
import { Input, Button } from "element-react";

const Algorithms = () => {
  const test = () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    let person = new Person();

    console.log("", Person === person.__proto__);
    console.log("", 123);
    console.log("", 123);
    console.log("", 123);
    console.log(
      "Function.__proto__ === Function.prototype",
      Function.__proto__ === Function.prototype
    );

    console.log("");
  };

  return (
    <React.Fragment>
      <Button onClick={test}>Test</Button>
      <div>
        <p></p>
      </div>
    </React.Fragment>
  );
};

export default Algorithms;
