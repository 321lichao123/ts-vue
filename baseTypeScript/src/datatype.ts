/*
 * @Author: your name
 * @Date: 2019-10-27 10:21:29
 * @LastEditTime: 2019-10-27 10:48:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue+ts\baseTypeScript\src\datatype.ts
 */
// 原始类型
let boolean: boolean = true;
let num: number | undefined | null = 123;
let str: string = "lichao";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 元祖
let tuple: [number, string] = [1, "2"];
tuple.push(3);
// console.log(tuple[2])  元祖可以访问已经定义好的元素位置，但是不能访问后来添加的元素

// 函数
// let add = (a, b) => a + b;    这里是因为没有对参数添加参数注解
let add = (a: number, b: number): number => a + b;
let sum: (x: number, y: number) => number;    // 这里对函数类型进行定义了
sum = (a, b) => a +b; // 当上面已经对函数参数类型进行定义了，我们可以不需要在对函数参数进行定义了，并参数名称可以不一样


// 对象
// let obj: object = {x: 1, y: 2};
// obj.x = 3  这里报错是因为只对obj类型进行定义了，但是没有对里面的属性进行定义
let obj: {x: number, y: number} = {x: 1, y: 2};
obj.x = 3;

// sysmbol
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null
let un: undefined = undefined;
let nu: null = null;
num = undefined // undefined和null是其他类型的子类型，是可以赋值给其他类型的，但是需要在定义一个变量的时候添加undefined和null情况
num = null  
// (function () {
//   let undefined = 0;   这个可以将变量定义成undefined，这个会对undefined进行覆盖
//   console.log(undefined);
// })();

// void
let noReturn = () => {};

// any
let x: any;

// never
let error = () => {
  throw new Error('error');
}

let endless = () => {
  while(true) {}
}