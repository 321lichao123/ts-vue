"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2019-11-18 21:26:11
 * @LastEditTime: 2019-11-18 21:31:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project-references\old\src\common\index.ts
 */
function getTime() {
    var time = new Date();
    return time.getFullYear + "-" + (time.getMonth() + 1) + "-" + time.getDate();
}
exports.getTime = getTime;
