/*  快速複習 class
  1. 實例屬性，須透過實例對象調用:
  const yachen = new Person();
  yachen.name

  2. 靜態屬性，使用 「static」開頭的屬性為靜態屬性(類屬性)，可直接透過類調用
  Person.name

  3. readonly 開頭的屬性表示只能讀，不能改
  4. 構造函數 constructor，會在實例對象創建(new)時調用，裡面的 this 為實例對象，
     所以可以透過 this 為新建的實例對象新增屬性
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    // this 取決於誰調用
    console.log(`${this.name} say hi`);
  }
}

export default Person;
