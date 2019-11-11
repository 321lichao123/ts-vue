/*
 * @Author: your name
 * @Date: 2019-11-11 22:48:39
 * @LastEditTime: 2019-11-11 23:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-in-action\src\merge.ts
 */
/*
  接口合并:两个或者多个接口不在一个文件中也会发生接口合并,如果发生合并那么创建的实例就要包含合并的所有属性
  如果有相同的属性那么需要将相同属性的类型设置一样的
  当接口有相同的方法那么就会发生方法重载，在创建实例的时候需要一个跟大的类型包含接口中方法的参数的类型
  相同的方法的排列顺序：
    在接口中按照书写的顺序
    在不同接口中后面的书写的会排在前面
    特殊：
      当函数的参数以字符串字面量作为参数，那么他就是提升最高处
*/
interface A {
	x: number;
	// y: string
	foo(bar: number): number; // 5
	foo(bar: "a"): number; // 2
}
interface A {
	y: number;
	foo(bar: string): string; // 3
	foo(bar: number[]): number[]; // 4
	foo(bar: "b"): number; // 1
}

let a: A = {
	x: 1,
	y: 2,
	foo(bar: any) {
		return bar
	}
}

// 命名空间与函数合并，相当于向函数中添加属性和方法,其中命名空间需要放到函数的后面
function Lib() { };
namespace Lib {
	export let version = "1.0.0";
}
console.log(Lib.version);

// 命名空间与类合并，想当于向类中添加了静态属性，其中命名空间需要放到函数的后面
class C { };
namespace C {
	export let state = 1;
}
console.log(C.state);

// 命名空间与枚举合并,
enum Color {
	Red,
	Yellow,
	Bule
}
namespace Color {
	export function mix() {};
}
console.log(Color);
