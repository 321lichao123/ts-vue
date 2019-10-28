/*
 * @Author: your name
 * @Date: 2019-10-28 23:48:54
 * @LastEditTime: 2019-10-29 00:08:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue+ts\baseTypeScript\src\function.ts
 */
import { type } from "os";

// 定义方法的三种方式
// let add1: (x: number, y: number) => number;

// interface Add {
//   (x: number, y:number): number
// }

type Add = (x: number, y: number) => number;

let add: Add = (a, b) => a + b;

interface Lib {
  (): void,
  version: string,
  doSomething(): void
}
function getLib() {   // 可以通过一个方法来解决这个问题
  let lib: Lib = (() => {}) as Lib; //  类型断言，坏处会在全局添加一个全局变量
  lib.version = "1.0";
  lib.doSomething = () => {};
  return lib
}

let lib = getLib();
console.log(lib.version);

// ts中是有函数重载的
function add2(...rest: number[]): number;
function add2(...rest: string[]): string;
function add2(...rest: any): any {
  let first = rest[0];
  if (typeof first === "number") {
    return rest.reduce((pre: number, cur: number) => pre + cur);
  }
  if (typeof first === "string") {
    return rest.join("");
  }
}

console.log(add2(1, 2, 3, 4));
console.log(add2("a", "b", "c"));