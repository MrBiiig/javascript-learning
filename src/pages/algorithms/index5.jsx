import React from "react";
import { Input, Button } from "element-react";

const Algorithms = () => {
  const test = () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    let p1 = new Person();

    console.log("Person是构造函数" + "\n=>", Person);
    console.log(
      "构造函数可以通过 “new Person(这里可以传参)” 构造出实例，每次都构造出不同的实例"
    );
    console.log("p1这个实例对象就是这样构造出来的" + "\n=>", p1);

    console.log("");

    console.log(
      "实例对象p1能通过constructor访问到构造函数Person: p1.constructor === Person => ",
      p1.constructor === Person
    );
    console.log(
      "!!但请注意p1不是直接拥有constructor这个可访问属性，而是是通过它的原型对象访问的（实例对象可以直接访问其原型对象拥有的属性）"
    );
    console.log(
      "原型对象无法用单独一个变量描述，可以通过构造函数Person的prototype或实例对象p1的__proto__来描述，即Person.prototype或p1.__proto__\n" +
        "Person.prototype === p1.__proto__ => ",
      Person.prototype === p1.__proto__
    );
    console.log(
      "因此，p1.constructor其实就是p1.__proto__.constructor\n" +
        "p1.__proto__.constructor === Person => ",
      p1.__proto__.constructor === Person
    );
    console.log("");
    console.log(
      "综上所述，对于Person\n" +
        "要访问原型对象：Person.prototype、p1.__proto__" +
        "要访问构造函数：Person、Person.prototype.constructor、p1(.__proto__).constructor" +
        "要访问实例：p1、new Person()。注意new Person()每次new出来的对象总是新的对象"
    );
    console.log("");
    console.log("");
    console.log("");
    console.log(
      "接下来继续延申，构造函数、原型对象、实例对象其实都可看做是实例对象，因此原型链形成："
    );
    console.log(
      "关于实例对象上面已经延申结束了，没啥可说的，剩下的两个，咱们一个一个来"
    );
    console.log("");
    console.log(
      "构造函数Person，把它作为实例对象，它的原型即Person.__proto__，\n" +
        "发现得到的是Function的原型对象，根据原型对象的两种描述方式可表示为：Person.__proto__ === Function.prototype，\n" +
        "可以理解为：构造函数本质就是个函数因此继承自Function，很合理。"
    );
    console.log("");
    console.log(
      "原型对象Person.prototype或p1.__proto__，把它作为实例对象，它的原型即Person.prototype.__proto__（或者p1.__proto__.__proto__）\n" +
        "发现得到的是Object的原型对象，表示为：Person.prototype.__proto__ === Object.prototype，\n" +
        "可以理解为：万物皆对象，就像java的最大的父类就是Object类，很合理。"
    );
    console.log("");
    console.log(
      "继续延伸就是：Function的原型对象即Function.prototype，把它作为实例对象，它的原型即Function.prototype.__proto__\n" +
        "得到的是Object的原型对象，表示为：Function.prototype.__proto__ === Object.prototype，\n" +
        "就又到了万物的根本Obejct"
    );
    console.log(
      "而Function的构造函数，即Function，把它作为实例对象，它的原型即Function.__proto__，发现还是Function.prototype，即Function.__proto__ = Function.prototype"
    );
    console.log("");
    console.log("综上所述，得到结论：");
    console.log(
      "1.实例对象的原型链上，经过它继承过的原型对象，之后就是归结到万物的根本————Obejct的原型对象了"
    );
    console.log(
      "2.构造函数的原型链上，先经过Function的原型对象，后就是归结到万物的根本————Obejct的原型对象了"
    );
    console.log("3.Function.__proto__ = Function.prototype");
    console.log("4.Object.__proto__ = null");

    console.log("另外还有些其他的上述没涉及的有用的结论：");
    console.log(
      "1.实例对象访问属性的优先级是：自身拥有 > 原型链距离近的 > 原型链距离远的。这个结论让js可以实现类似java中那种子类重写覆盖父类属性值的操作"
    );
    console.log(
      "2.instanceof检测的是原型，但是只能用来判断两个对象是否属于实例关系，即前者的原型链上是否存在后者（前者是否是后者（或后者子孙类）的实例）"
    );
    console.log(`person instanceof Person => true
                  person instanceof Object => true`);

    console.log("3.hasOwnProperty可以确定访问的属性是来自于实例还是原型对象");

    // console.log(
    //   "实例的__proto__就是其原型Person.prototype === p1.__proto__" + "=>",
    //   Person.prototype === p1.__proto__
    // );
    // console.log(
    //   "Person.prototype.constructor === Person" + "=>",
    //   Person.prototype.constructor === Person
    // );
    // console.log(
    //   "Function.__proto__ === Function.prototype" + "=>",
    //   Function.__proto__ === Function.prototype
    // );

    console.log("");
    //有一点注意
    function Fxx() {
      return {};
    }
    let fxx = new Fxx();
    console.log(Fxx.prototype === fxx.__proto__); // 打印出：false
    //因为构造函数里面return了，所以new后面得到的结果不是Fxx的实例
  };

  return (
    <React.Fragment>
      <Button onClick={test}>Test(结果见console)</Button>
      <div>
        <p>test代码里末尾还有彩蛋</p>
      </div>
    </React.Fragment>
  );
};

export default Algorithms;
