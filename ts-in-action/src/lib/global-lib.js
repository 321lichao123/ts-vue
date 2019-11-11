/*
 * @Author: your name
 * @Date: 2019-11-11 23:28:28
 * @LastEditTime: 2019-11-11 23:30:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\global-lib.js
 */
// 全局的声明库
function globalLib(options) {
    console.log(options);
}

globalLib.version = "1.0.0";
globalLib.doSomething = function () {
    console.log("global Lib something");
}