/*
 * @Author: your name
 * @Date: 2019-11-10 21:48:20
 * @LastEditTime: 2019-11-10 23:31:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \baseTypeScript\src\es6\c.ts
 */
import { a, b, c} from "./a"; // 批量导出
import { P } from "./a";      // 导入接口
// import { f as F } from "./a"; // 导入时起别名
import * as All from "./a"; // 导入模块中的所有成员，绑定在all上
import myFunction from "./a"; // 不加{} 导入默认的
