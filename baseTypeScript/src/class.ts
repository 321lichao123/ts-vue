import { worker } from "cluster";

/*
 * @Author: your name
 * @Date: 2019-10-30 22:50:26
 * @LastEditTime: 2019-10-30 23:39:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-vue\baseTypeScript\src\class.ts
 */
// class Dog {
//   constructor (name: string) {   // 构造函数中需要将类名中定义的属性全部初始化一下
//     this.name = name;
//   }
//   name: string
//   run() {}ben        // 公有方法可以在实例、本类和子类中使用
//   private pri() {}  // 私有方法只能在本类中使用，不能在实例和子类中使用
//   protected pro() {}  // 保护方放可以在本类和子类继承中使用，但不能在实例中使用
//   readonly legs: number = 4;   // 只读属性只能读取不能修改
// }

// console.log(Dog.prototype);
// let dog = new Dog("wangwang");
// console.log(dog);
// // dog.pri()
// // dog.pro()

// class Husky extends Dog {
//   constructor(name: string, color: string) { // 子类继承父类需要将父类中的属性重写一遍
//     super(name);     // 子类定义的熟悉需要在super之后调用
//     this.color = color;   
//     // this.pri()
//     this.pro();
//   }
//   color: string
// }

// console.log(Husky);

abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void;
}

class Dog extends Animal {
  sleep() {
    console.log("dog sleep");
  }
}
let dog = new Dog();

class Cat extends Animal {
  sleep() {
    console.log("cat sleep");
  }
}
let cat = new Cat();

let animal: Animal[] = [dog, cat];
animal.forEach(item => {
  item.sleep()
});

class WorkFly {
  step1() {
    console.log("step1");
    return this
  }
  step2() {
    console.log("step2")
    return this
  }
}

let wf = new WorkFly().step1().step2();

class MyFly extends WorkFly {
  next() {
    console.log("next");
    return this
  }
}

let mf = new MyFly().next().step1().step2();
console.log(wf)
console.log(mf)
