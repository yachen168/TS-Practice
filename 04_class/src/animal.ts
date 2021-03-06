/* 快速複習 class 繼承
 1. 可將多個類中共有的代碼寫在父類中，使用 extends 繼承後，
 子類將擁有父類所有屬性和方法

 2. 子類中可另外新增父類沒有的屬性、方法
 3. override: 子類中若有和父類相同的方法，子類的會覆蓋掉父類的
 4. 在子類中，super 代表父類，如果在子類中寫 constructor，必須在裡面呼叫 super()，調用父類的 constructor 

 抽象類 / 抽象方法
 1. 以 `abstract` 開頭的 class 為抽象類，不能 new 抽象類。希望父類只能被繼承，不能 new 時，可以使用抽象類
 2. 抽象方法以 `abstract` 開頭，抽象方法==只能定義在抽象類中==，且子類必須對該抽象方法進行重寫
*/
abstract class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract sayHi(): void;
}

export class Dog extends Animal {
  color: string;
  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  bark() {
    console.log("汪汪");
  }
  sayHi() {
    console.log("汪~ Hi");
  }
}

export class Cat extends Animal {
  sayHi() {
    console.log("喵~ Hi");
  }
}
