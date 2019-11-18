/*
 * @Author: your name
 * @Date: 2019-11-18 21:26:11
 * @LastEditTime: 2019-11-18 21:31:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \project-references\old\src\common\index.ts
 */
export function getTime() {
    let time = new Date();
    return `${time.getFullYear}-${time.getMonth() + 1}-${time.getDate()}`
}