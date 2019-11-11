/*
 * @Author: your name
 * @Date: 2019-10-30 23:54:49
 * @LastEditTime: 2019-11-08 00:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-vue\baseTypeScript\src\generics.ts
 */
// 泛型
function log<T>(value: T): T {
  console.log(value);
  return value
}

// 泛型的两种调用方式
log<String[]>(['a', 'b']);
log(['a', 'b']);  // 类型推断

// 使用type定义泛型函数
type Log = <T>(value: T) => T;
let myLog: Log = (value) => {
  console.log(value);
  return value;
}
myLog(['a','b']);

// 接口中也可以使用泛型
interface LogIn1 {
  <T>(value: T): T;    // 这种写法是对value这个参数进行了泛型
}

interface LogIn2<T> {   // 这种写法就是整个接口参数进行了泛型
  (value: T): T;
}

// let myLog1: LogIn2 = log;  // 这种就需要明确一种参数类型
let myLog1: LogIn1 = function<T>(value: T): T {
   console.log(value);
   return value
}
let myLog2: LogIn2<number> = log;
console.log(myLog1(1));

class Generics<T = String> {   // 对泛型定义一个默认类型
  run(value: T) {
    console.log(value);
    return value
  }
}
let gen1 = new Generics();
gen1.run("1");

let gen2 = new Generics<number>();    // 对泛型重新定义类型
gen2.run(2);

// 泛型约束
interface len {
  length: number
}
function gen3<T extends len>(value: T): T {
  console.log(value, value.length);
  return value
}
gen3("123");
gen3([1, 2, 3, 4]);
gen3({length: 4})
