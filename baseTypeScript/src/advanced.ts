/*
 * @Author: your name
 * @Date: 2019-11-08 00:58:46
 * @LastEditTime: 2019-11-10 21:45:37
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

// 枚举兼容
enum Fruit { Apple, Banana };
enum Color { Red, Yellow };
// let fruit: Fruit.Apple = "apple";
let fruit: Fruit.Apple = 3;
// let color: Color.Red = Fruit.Apple;

// 类的兼任性
class A {
  static s: string;
  constructor(p: number){};
  id: number = 1;
}
class B {
  constructor(p: number) {};
  id: number = 2
  private name: string = "";
}
let aa = new A(1);
let bb = new B(2);
aa = bb;
// bb = aa;
class C extends A {};
let cc = new C(3);
cc = aa;
aa = cc;

// 泛型兼容
interface Empty<T>{
  // value: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2

let log1 = <T>(x: T): T => {
  return x
}
let log2 = <U>(y: U): U => {
  return y
}
log1 = log2;
log2 = log1;

// 类型保护
enum Type { Strong, week }

class Java {
  helloJava() {
    console.log("hello Java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("hello JavaScript");
  }
  JavaScript: any;
}

// 第三种创建类型保护方法
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // if(isJava(lang)) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // 第一种类型保护通过instanceof关键字
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }
  // 第二种通过in关键字
  //  if ("java" in lang) {
  //    lang.helloJava();
  //  } else {
  //    lang.helloJavaScript();
  //  }
  
  // 第三种通过typeof关键字
  if (typeof x === 'string') {
    x.length;
  } else {
    x.toFixed(2);
  }
   return lang
}

getLanguage(Type.Strong, 2);

interface DogInterface {
  run(): void;
}

interface CatInterface {
  eat(): void;
}

// 交叉类型
let pet: DogInterface & CatInterface = {
  run() {},
  eat() {}
};

// 联合类型
let aa1: number | string = "1";

// 字面量联合类型
let bb1: "a" | "b" | "c";   // 字符串联合类型
let cc1: 1 | 2 | 3;         // 对象联合类型

// 对象的联合类型
class Dog implements DogInterface {
  run() {};
  eat() {};
}

class Cat implements CatInterface {
  eat() {};
  jump() {};
}

enum Master { Boy, Cat };

function getPet(master: Master) {
  let pet = master == Master.Boy ? new Dog() : new Cat();
  pet.eat();
  // pet.run();
  return pet
}

interface Square {
  kind: "square",
  width: number,
  height: number
}

interface Rectangle {
  kind: "rectingle",
  width: number,
  height: number
}

interface Circle {
  kind: "circle",
  r: number
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  switch(s.kind) {
    case "square":
      return s.width * s.height
    break;
    case "rectingle":
      return s.width * s.height
    break;
    case "circle":
      return Math.PI * s.r ** 2
    break
  }
}

// 索引类型
console.log(area({
  kind: "circle",
  r: 2}))

let obj3 = {
  a: 1,
  b: 2,
  c: 3
}

function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
console.log(getValues(obj3, ["a", "b"]));

function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues2(obj3, ["a", "b"]));
// console.log(getValues2(obj3, ["d", "f"]));

// keyof T
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj

// T[K]
let value: Obj["a"]

// T extends U 泛型约束


// 映射类型
interface Obj1 {
  a: string,
  b: number,
  c: boolean
}
type ReadonlyObj = Readonly<Obj1>;
type PartialObj = Partial<Obj1>;
type PickObj = Pick<Obj, "a" | "b">

// 条件类型
// T extends U ? X : Y 如果类型T可以赋值给类型U那么结果类型就是X否则就是Y
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;
type T3 = TypeName<number[]>;

// (A | B) extends U ? X : Y
// 上面标示的是：
// A extends U ? X : Y | B extends U ? X : Y
type T4 = TypeName<string | string[]>;

type Diff<T, U> = T extends U ? never : T;

type T5 = Diff<"a" | "b" | "c", "a" | "e">;
// 上面的运算相当于
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c" 

type NotNull<T> = Diff<T, undefined | null>;
type T6 = NotNull<string | number | undefined | null>
// Exclude<T, U>把T类型不可赋值给U类型过滤掉的类型
// NonNullable<T>将T类型的某些类型过滤掉
// Extract<T, U>把T类型中可以赋值给U类型过滤出来
type T7 = Extract<"a" | "b" | "c", "a" | "e">;

// ReturnType<T> 获取函数返回值的类型
type T8 = ReturnType<() => string>;
