/*
 * @Author: your name
 * @Date: 2019-11-11 22:33:20
 * @LastEditTime: 2019-11-12 00:03:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\index.ts
 */

import "./merge";
let hello: string = "hello typescript";
document.querySelectorAll("#app")[0].innerHTML = hello;

/* 
    对于一些使用js编写的插件可以使用@types/包名 来兼容ts的写法
*/
import $ from "jquery";

$("#app").css("color", "red");


// globalLib({x: 100});
// globalLib.doSomething();

import moduleLib from "./lib/module-lib";
moduleLib.doSomething();

import umdLib from "./lib/umd-lib";
umdLib.doSomething();

import m from "moment";
declare module 'moment' {
    export function myFunction(): void;
}
m.myFunction = () => {
    console.log("moment上面自定义方法");
}
m.myFunction();
