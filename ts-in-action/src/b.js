/*
 * @Author: your name
 * @Date: 2019-11-11 22:32:05
 * @LastEditTime: 2019-11-11 22:46:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\b.ts
 */
// 引入其他的命名空间的方法
/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(1));
console.log(Shape.square(1));
// 命名空间别名
var cricle = Shape.cricle;
console.log(cricle(2));
