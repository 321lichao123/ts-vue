/*
 * @Author: your name
 * @Date: 2019-11-11 23:46:33
 * @LastEditTime: 2019-11-11 23:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\lib\module-lib.d.ts
 */
declare function moduleLib(options: Options): void;

interface Options {
    [key: string]: any
}

declare namespace moduleLib {
    export const version: string;
    function doSomething(): void;
}

export = moduleLib