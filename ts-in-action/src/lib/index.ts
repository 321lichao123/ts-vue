/*
 * @Author: your name
 * @Date: 2019-11-12 00:05:16
 * @LastEditTime: 2019-11-12 00:05:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\lib\index.ts
 */
globalLib({x: 100});
globalLib.doSomething();

import moduleLib from "./module-lib";
moduleLib.doSomething();

import umdLib from "./umd-lib";
umdLib.doSomething();

import m from "moment";
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {
    console.log("moment上面自定义方法");
}
m.myFunction();