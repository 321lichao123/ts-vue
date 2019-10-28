/*
 * @Author: your name
 * @Date: 2019-10-28 23:13:09
 * @LastEditTime: 2019-10-28 23:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue+ts\baseTypeScript\src\enum.ts
 */
// 数字枚举
enum Role {
  Reporter,
  Develop,
  Mainater,
  Owner,
  Guest
}
console.log(Role.Reporter);
console.log(Role[1]);
console.log(Role);

// 字符串枚举
enum Str {
  success = "成功",
  filer = "失败"
}

// 异构枚举
enum Answer {
  N,
  Y = "Yes"
}

// 枚举成员
enum Char {
  // const常量成员
  a,
  b = Char.a,
  c = 1 + 2,
  // computer计算成员
  d = Math.random(),
  e = "123".length
}