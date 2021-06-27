# 快速複習 class

## 基本 class
  1. 實例屬性，須透過實例對象調用:
  const yachen = new Person();
  yachen.name

  2. 靜態屬性，使用 「static」開頭的屬性為靜態屬性(類屬性)，可直接透過類調用
  Person.name

  3. readonly 開頭的屬性表示只能讀，不能改
  4. 構造函數 constructor，會在實例對象創建(new)時調用，裡面的 this 為實例對象，
     所以可以透過 this 為新建的實例對象新增屬性

## 繼承
 1. 可將多個類中共有的代碼寫在父類中，使用 extends 繼承後，
 子類將擁有父類所有屬性和方法

 2. 子類中可另外新增父類沒有的屬性、方法
 3. override: 子類中若有和父類相同的方法，子類的會覆蓋掉父類的
 4. 在子類中，super 代表父類，如果在子類中寫 constructor，必須在裡面呼叫 super()，調用父類的 constructor 


## 抽象類 / 抽象方法
1. 以 `abstract` 開頭的 class 為抽象類，不能 new 抽象類。希望父類只能被繼承，不能 new 時，可以使用抽象類

2. 抽象方法以 `abstract` 開頭，抽象方法==只能定義在抽象類中==，且子類必須對該抽象方法進行重寫

