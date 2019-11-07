/*
 * @Author: your name
 * @Date: 2019-11-08 00:58:46
 * @LastEditTime: 2019-11-08 01:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \baseTypeScript\src\advanced.ts
 */
// 类型推断
let a = 1;
let b = [1, null];

let c = (x = 1) => x + 1;

window.onkeydown = (event: object) => {
  console.log(event);
}

// 类型断言
interface Foo {
  bar: number
}
// 对一个对象添加一个属性的一种方法
// let foo = {} as Foo;
// foo.bar = 1;
let foo: Foo = {
  bar: 1
}

// 类型兼容性
interface X {
  a: any,
  b: any
}

interface Y {
  a: any,
  b: any,
  c: any
}
let x1: X = {a: 1, b: 2};
let y1: Y = {a: 3, b: 4, c: 5};
x1 = y1; 
console.log(x1)
// y1 = x1;

// 函数兼容
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler
}
// 1)参数固定
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number) => {};
hof(handler2);
let handler3 = (a: number, b: number, c: number) => {};
// hof(handler3);

// 可选参数与剩余参数
let a1 = (p1: number, p2: number) => {};   // 固定参数
let a2 = (p1?: number, p2?: number) => {};  // 可选参数
let a3 = (...arg: number[]) => {};          // 剩余参数
a1 = a2;
a1 = a3;
// a2 = a1;
// a2 = a3
a3 = a1;
a3 = a2;

// 2)参数类型
 let handler4 = (a: string) => {};
//  hof(handler4);

interface Point3D {
  a: number,
  b: number,
  c: number
}
interface Point2D {
  a: number,
  b: number
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d;

// 返回值类型
let f = () => ({name: "lisi"});
let g = () => ({name: "zhangsan", local: "anhui"});
f = g;
// g = f;

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {};