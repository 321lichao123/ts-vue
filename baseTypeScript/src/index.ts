/*
 * @Author: your name
 * @Date: 2019-10-27 09:23:06
 * @LastEditTime: 2019-11-11 21:59:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue+ts\baseTypeScript\src\demo1.1.ts
 */
import "./datatype";
import "./enum";
import "./interface";
import "./function";
import "./class";
import "./generics";
import "./advanced";
let hello: string = "hello typescript";
document.querySelectorAll(".app")[0].innerHTML = hello;

// console.log([1, 2, [3, 4]].flat());

class A {
  a: number = 1;
  getA() {
    return () => {
      console.log(this.a);
    }
  }
}

let aa = new A().getA();