/*
 * @Author: your name
 * @Date: 2019-11-18 22:12:13
 * @LastEditTime: 2019-11-18 22:21:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-babel\src\index.ts
 */
class A {
    a: number = 1
}

let { x, y, ...z } = {x: 1, y: 2, a: 2, b: 4};
let n = {x, y, ...z};

// n = 1;

// 命名空间在babel中不能使用
// namespace N {
//     export const n = 1
// }

// 类型断言不能使用
let s = {} as A;
s.a = 1;

// 常量枚举报错
// const enum E {A}

// 默认导出报错
// export = s;