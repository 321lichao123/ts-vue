/*
 * @Author: your name
 * @Date: 2019-11-11 23:31:07
 * @LastEditTime: 2019-11-11 23:34:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\global-lib.d.ts
 */
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
    const version: string;
    function doSomething(): void;
    interface Options {
        [key: string]: any
    }
}