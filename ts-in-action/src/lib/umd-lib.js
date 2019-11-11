/*
 * @Author: your name
 * @Date: 2019-11-11 23:28:53
 * @LastEditTime: 2019-11-11 23:55:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\lib\umd-lib.js
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
    } else {
        root.umdLib = factory();
    }
}(this, function () {
    return {
        version: '1.0.0',
        doSomething() {
            console.log('umdLib do something');
        }
    }
}));
