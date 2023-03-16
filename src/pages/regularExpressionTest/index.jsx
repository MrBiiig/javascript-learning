import React from "react";
import { Button } from "element-react";

/* https://www.jianshu.com/p/7fa165acd51e   JS正则表达式的贪婪模式与非贪婪模式 */
/* https://juejin.cn/post/6902009306360676366  正则表达式几个方法的说明 */

const RegExpTest = () => {
  const test = () => {};

  return (
    <div>
      <p>
        正则表达式要么匹配字符串（一些存在字符位置重叠的匹配会被排除），要么匹配位置（字符位置重叠情况不会被排除？）
      </p>
      <p>
        发现巧妙（注意看好大小写）：<br></br>
        大写字母：[A-Z] <br></br>
        小写字母：[a-z] <br></br>
        数字：[0-9]<br></br>
        大写字母、小写字母、数字、下划线：[\w]<br></br>
        <b>大写字母、小写字母、数字，不要下划线：[^\W]</b>
        <br></br>
      </p>
      <Button onClick={test}>test</Button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a target="_blank" href="https://juejin.cn/post/6902009306360676366">
        正则表达式几个方法的说明
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a target="_blank" href="https://www.jianshu.com/p/7fa165acd51e">
        JS正则表达式的贪婪模式与非贪婪模式
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a target="_blank" href="https://juejin.cn/post/7021672733213720613">
        JS正则表达式匹配位置可以看这个（另外里面的反向引用很重要）
      </a>
      <p>
        正则表达式api总结关键点：
        <ul>
          <li>
            在同样的正则对象和字符串下是否【多次调用结果会不同】 =&gt;
            必须是同一个正则对象，而不是每次都用新的正则对象来调用
          </li>
          <li>
            在同样的正则对象和字符串下是否【多次调用结果会不同】，由【调用时是否改变lastIndex】决定
          </li>
          <li>
            在同样的正则对象和字符串下会发生【多次调用结果会不同】的函数：exec+正则带g
            和 test+正则带g
          </li>
          <li>
            在同样的正则对象和字符串下不会发生【多次调用结果会不同】的函数：所有函数的正则不带g，以及match和matchAll的所有情况
          </li>
          <li>
            exec在正则带g时，如果要获取或遍历所有结果，可以用判断返回结果是否为null作为循环出口
          </li>
          <li>
            exec与match：正则不带g时一样特性【1、不会改变lastIndex。2、会捕获正则中括号包裹的内容（叫子模式？）。】
          </li>
          <li>
            match带g时会返回所有匹配的子字符串（那种有字符索引重叠的不同匹配，按照贪婪模式还是非贪婪模式只计算从左到右第一个匹配的，与其重叠的其余情况排除掉）
          </li>
          <li>matchAll的正则必须带g，且不会改变lastIndex</li>
        </ul>
      </p>
      <p>
        <b>贪婪模式与非贪婪模式</b>
        <p>
          贪婪与非贪婪模式影响的是被量词修饰的子表达式的匹配行为，贪婪模式在整个表达式匹配成功的前提下，尽可能多的匹配，而非贪婪模式在整个表达式匹配成功的前提下，尽可能少的匹配。
          <br></br>
          非贪婪模式只被部分NFA引擎所支持。
        </p>
        <p>
          属于贪婪模式的量词，也叫做匹配优先量词，包括： <br></br>
          {"“{m,n}”、“{m,}”、“?”、“*”和“+”。 "}
          <br></br>
          在一些使用NFA引擎的语言中，在匹配优先量词后加上“?”，即变成属于非贪婪模式的量词，也叫做忽略优先量词，包括：{" "}
          <br></br>
          {"“{m,n}?”、“{m,}?”、“??”、“*?”和“+?”。 "}
        </p>
      </p>
      <p>
        <b>验证密码合法性</b>
        <br></br>
        要求：密码长度是6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
        <br></br>
        <b>组成：</b>
        {/* 转义符\代码中因代码关键字转义造成差异，可正常运行正则以网页上显示的结果为准，代码中的不准 */}
        大小写字母和数字且6-12位 &nbsp;&nbsp; &nbsp; /^[^\W_]
        {"{6,12}"}$/
        <br></br>
        <b>至少两种类型的字符：</b>
        /(?=.*[A-Z])/【至少存在大写字母类型】&nbsp;&nbsp;/(?=.*[a-z])/【至少存在小写字母类型】&nbsp;&nbsp;/(?=.*\d)/【至少存在数字类型】
        <br></br>
        正则的意思是，匹配的是一个位置，这个位置需要满足`任意数量的字符，紧跟着是个数字（或大写或小写字母）`，注意它最终得到的是个位置，而不是数字或者是数字前面有任意的东西
        <br></br>
        所以以其中两者举例就是&nbsp;至少存在大写和小写字母就是&nbsp;/(?=.*[A-Z])(?=.*[a-z])/【两者是“并且”、“交集”、“同时满足”的关系】
        <br></br>
        阶段性稍微组合一下：【至少两种类型的字符】/((?=.*[A-Z])((?=.*[a-z])|(?=.*\d))|((?=.*[a-z])(?=.*\d)))/
        <br></br>
        再加上前面的长度和总体字符类型的限定，得到的是：/((?=.*[A-Z])((?=.*[a-z])|(?=.*\d))|((?=.*[a-z])(?=.*\d)))^[^\W_]
        {"{6,12}"}$/
        <br></br>
        或者：/^((?=.*[A-Z])((?=.*[a-z])|(?=.*\d))|((?=.*[a-z])(?=.*\d)))[^\W_]
        {"{6,12}"}$/
        <br></br>
        验证密码合法性以上over
        <br></br>
        <br></br>
        <br></br>
      </p>
    </div>
  );
};

export default RegExpTest;

/* 
exec 函数
调用者：正则表达式
返回示例

属性	            描述
[0]、[1]、[2]...	下标 0 对应的是最近一个匹配到的字符串，往后的下标对应捕获的子串（也就是正则表达式里用括号包裹的内容）
index	            此次匹配到的字符串在原始字符串中的索引值
input	            原始字符串
*/
/* 
当正则表达式携带 g 标志时，
exec 函数会从正则表达式变量的 lastIndex（默认为 0）起开始检索原始字符串，
一旦匹配成功就会停止继续向后匹配，并会在执行后把正则表达式变量的 lastIndex 值置成此次匹配的子串末尾的下标 + 1（如果匹配成功），
或置回 0（如果匹配失败）。这就会导致多次执行 exec 可能会有不同的结果

let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

myRe.exec(str);
// 第 1 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 上面结果中的 "bb" 就是第一个括号捕获的内容，"c" 就是第二个括号捕获的内容
// 执行完后 myRe.lastIndex 为 6，下一次 exec 将从原始字符串下标 6 开始检索

myRe.exec(str);
// 第 2 次执行结果 => ["dbd", "b", "", index: 10, input: "cdbbcdbsbzdbd"]
// 上面结果中的 "b" 就是第一个括号捕获的内容，"" 就是第二个括号捕获的内容
// 执行完后 myRe.lastIndex 为 13，下一次 exec 将从原始字符串下标 13 开始检索

myRe.exec(str);
// 第 3 次执行 => null
// 执行完后 myRe.lastIndex 为 0，下一次 exec 将从原始字符串下标 0 开始检索

myRe.exec(str);
// 第 4 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 6
*/
/* 
不过正如上面所说，lastIndex 是正则表达式变量的一个属性，如果你没有把正则表达式赋给一个变量，每次用的都是新的正则表达式，那就不存在多次执行导致不同结果的现象了

let str = 'cdbbcdbsbzdbd';

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]

/d(b+)(c*)d/g.exec(str);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
*/
/* 
当正则表达式 不 携带 g 标志时，exec 函数同样一旦匹配成功就会停止继续向后匹配，并且不会改变正则表达式变量的 lastIndex，这样每次调用 exec 得到的结果都是相同的

let myRe = /d(b+)(c*)d/;
let str = 'cdbbcdbsbzdbd';

myRe.exec(str);
// 第 1 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 0，下一次 exec 将从原始字符串下标 0 开始检索

myRe.exec(str);
// 第 2 次执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 0，下一次 exec 将从原始字符串下标 0 开始检索

myRe.exec(str);
// 第 3 次执行 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 0，下一次 exec 将从原始字符串下标 0 开始检索
*/

/* 
match 函数
调用者：字符串
*/
/* 
当正则表达式携带 g 标志时，match 函数会以数组形式返回所有匹配的子串（并不会捕获括号中的内容），不会更改正则表达式变量的 lastIndex
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

str.match(myRe);
// 执行结果 => ["dbbcd", "dbd"]
// 执行完后 myRe.lastIndex 为 0
*/
/* 
当正则表达式 不 携带 g 标志时，match 函数的返回形式与 exec 函数一致，并且不会改变正则表达式变量的 lastIndex
let myRe = /d(b+)(c*)d/;
let str = 'cdbbcdbsbzdbd';

str.match(myRe);
// 执行结果 => ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"]
// 执行完后 myRe.lastIndex 为 0
*/

/* 
matchAll 函数
调用者：字符串
*/
/* 
matchAll 使用的正则表达式必须携带 g 标志，matchAll 函数会以迭代器（iterator）形式返回所有匹配的子串，
每个子串都是与 exec 函数的返回格式一致，不会更改正则表达式变量的 lastIndex
*/
/* 
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

[...str.matchAll(myRe)];
// 执行结果 => 
// [
//     ["dbbcd", "bb", "c", index: 1, input: "cdbbcdbsbzdbd"],
//     ["dbd", "b", "", index: 10, input: "cdbbcdbsbzdbd"]
// ]
// 执行完后 myRe.lastIndex 为 0
*/

/* 
test 函数
调用者：正则表达式
返回布尔值，true 匹配成功，false 代表匹配失败
*/
/* 
test 函数与 exec 函数在对待 lastIndex 上的行为完全一样，
在携带 g 标志时，从正则表达式变量的 lastIndex（默认为 0）起开始检索原始字符串，
一旦匹配成功就会停止继续向后匹配，并会在执行后把正则表达式变量的 lastIndex 值置成此次匹配的子串末尾的下标 + 1（如果匹配成功），或置回 0（如果匹配失败）；

不携带 g 标志时，test 函数同样一旦匹配成功就会停止继续向后匹配，并且不会改变正则表达式变量的 lastIndex
*/
/* 
let myRe = /d(b+)(c*)d/g;
let str = 'cdbbcdbsbzdbd';

myRe.test(str);
// 第 1 次执行结果 => true
// 执行完后 myRe.lastIndex 为 6，下一次 test 将从原始字符串下标 6 开始检索

myRe.test(str);
// 第 2 次执行结果 => true
// 执行完后 myRe.lastIndex 为 13，下一次 test 将从原始字符串下标 13 开始检索

myRe.test(str);
// 第 3 次执行 => false
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe.test(str);
// 第 4 次执行结果 => true
// 执行完后 myRe.lastIndex 为 6


let myRe2 = /d(b+)(c*)d/;  // myRe2 不携带 g 标志

myRe2.test(str);
// 第 1 次执行结果 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe2.test(str);
// 第 2 次执行结果 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索

myRe2.test(str);
// 第 3 次执行 => true
// 执行完后 myRe.lastIndex 为 0，下一次 test 将从原始字符串下标 0 开始检索
*/
