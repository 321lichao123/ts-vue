/*
 * @Author: your name
 * @Date: 2019-11-11 22:31:59
 * @LastEditTime: 2019-11-11 23:11:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\a.ts
 */
// 命名空间:在命名空间不允许重复定义
var Shape;
(function (Shape) {
    var pi = Math.PI;
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
