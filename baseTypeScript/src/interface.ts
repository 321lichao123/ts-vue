/*
 * @Author: your name
 * @Date: 2019-10-28 23:30:37
 * @LastEditTime: 2019-10-28 23:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue+ts\baseTypeScript\src\interface.ts
 */
interface List {
  readonly id: number,  // readonlu只读属性不允许修改
  name: string,
  age?: number          // ?表示是否存在这个参数
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name);
    if (item.age) {
      console.log(item.age);
    }
  })
}

let result = {
  data: [
    {id: 1, name: "A", sex: "nam"},
    {id: 2, name: "B", age: 18}
  ]
};

// 三种传参方式
render(result);
render({
  data: [
    { id: 1, name: "A", sex: "nam" },
    { id: 2, name: "B" }
  ]
} as Result);
render(<Result>{
  data: [
    { id: 1, name: "A", sex: "nam" },
    { id: 2, name: "B" }
  ]
});

// 动态接口
interface StringArray {
  [index: number]: string
}

let charString = ["A", "B"];

interface Names {
  [x: string]: string,
  // y: number, // "message": "类型“number”的属性“y”不能赋给字符串索引类型“string”。"
  [z: number]: string
}