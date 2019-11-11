/*
 * @Author: your name
 * @Date: 2019-11-11 23:28:44
 * @LastEditTime: 2019-11-11 23:46:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\lib\module-lib.js
 */
// 模块的声明文件
const version = "1.0.0";

function doSomething() {
    console.log("module do something");
}

function moduleLib(options) {
    console.log(options);
}

moduleLib.version = version;
moduleLib.doSomething = doSomething;

module.exports = moduleLib;
