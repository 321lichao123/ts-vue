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
//   constructor (name: string) {
//     this.name = name;
//   }
//   name: string
//   run() {}
//   private pri() {}
//   protected pro() {}
//   readonly legs: number = 4; 
// }

// console.log(Dog.prototype);
// let dog = new Dog("wangwang");
// console.log(dog);
// // dog.pri()
// // dog.pro()

// class Husky extends Dog {
//   constructor(name: string, color: string) {
//     super(name);
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
