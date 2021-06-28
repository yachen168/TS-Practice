## 快速複習 class
### 基本 class
  1. 實例屬性，須透過實例對象調用:
```javascript
  const yachen = new Person();
  yachen.name;
```

  2. 靜態屬性，使用 「static」開頭的屬性為靜態屬性(類屬性)，可直接透過類調用
  ```javascript
  Person.name
```

  3. readonly 開頭的屬性表示只能讀，不能改
  4. 構造函數 constructor，會在實例對象創建(new)時調用，裡面的 this 為實例對象，
     所以可以透過 this 為新建的實例對象新增屬性

### 繼承
 1. 可將多個類中共有的代碼寫在父類中，使用 extends 繼承後，
 子類將擁有父類所有屬性和方法

 2. 子類中可另外新增父類沒有的屬性、方法
 3. override: 子類中若有和父類相同的方法，子類的會覆蓋掉父類的
 4. 在子類中，super 代表父類，如果在子類中寫 constructor，必須在裡面呼叫 super()，調用父類的 constructor 


## TS
### 抽象類 / 抽象方法
1. 以 `abstract` 開頭的 class 為抽象類，不能 new 抽象類。希望父類只能被繼承，不能 new 時，可以使用抽象類

2. 抽象方法以 `abstract` 開頭，抽象方法`只能定義在抽象類中`，且`子類必須對該抽象方法進行重寫`


### interface
概念類似抽象類
1. 用來定義一個類的結構，也就是定義一個類中應該包含哪些屬性和方法。也可以當成類型聲明
2. 所有 interface 只定義對象的結構，不考慮實際值。在 interface 中，所有的方法都是抽象方法

```javascript
interface animalInterface {
  name: string;

  sayHi():void;
}
```

3. 定義 class 時，可以使 class 去實現(`implements`)一個接口，實現接口 = 滿足接口的要求規範
```javascript
class Dog implements animalInterface {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  sayHi(){
    console.log('hi');
  };
}
```

4. interface 與抽象類差異:
   - interface 用 implements; 抽象類用 extends
   - 在 interface 中，所有的方法都是抽象方法; 抽象類則不一定


### public/private、getter/setter
- piblic: 預設值，以 public 修飾的屬性可以再任意位置訪問、修改 （不安全）
- private: 私有屬性，只能在當前的 class 內部進行訪問、修改。透過在 class 中添加 getter、setter 方法可以使私有屬性被外部訪問

- protected: 以 protected 修飾的屬性只能在當前 class 和子類中訪問、修改
  
```javascript
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number){
    this._name = name;
    this._age = age;
  }

  /* ts 設置 getter、setter 方式: get、set*/
  get name(){
    return this._name;
  }

  set name(value: string){
    this._name = value;
  }


  // getter
  // getName(){
  //   return this._name;
  // }

  // setName(value: string){
  //   this._name = value;
  // }
}

const yachen = new Person(name: 'yachen', age: 20);

// yachen.setName('yachen168');
// console.log(yachen.getName());

yachen.name = 'yachen168';   // 調用 ts 的 set name
console.log(yachen.name);    // 調用 ts 的 get name
```


