/*
 * @Author: your name
 * @Date: 2019-11-11 23:56:05
 * @LastEditTime: 2019-11-11 23:56:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\lib\umd-lib.d.ts
 */
declare namespace umdLib {
    const version: string
    function doSomething(): void
}

export as namespace umdLib

export = umdLib
