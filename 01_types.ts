let a: string;

/*  | 代表'或' */
let b: "male" | "female";
b = "male";
b = "female";

let c: string | boolean;
c = "oh";
c = true;

/* any 表示任意類型，相當於關閉 TS 檢測，不建議使用 */
let d: any;
d = 123;
d = "qq";
d = false;

/* unknown 表示未知的值，當不確定類型時可用 */
let e: unknown;
e = 10;
e = "jj";
e = true;

/* 
d 的類型為 any，可以賦值給任意變量 (害人害己) 
e 的類型為 unknown，「不能直接」賦值給其他變量，需再加上一層檢查 (僅能害自己)
*/
let s: string;
// s = d;

// 法(1)
if (typeof e === "string") {
  s = e;
}

// 法(2)：類型斷言(告訴解析器變量的實際類型)
s = e as string;

// 法(3)：同(2)
s = <string>e;

/* 定義函數返回值 */
function coke(): boolean | number {
  return true;
}

/* 沒有返回值的函數，void 表示空值，return undefined/null 皆可 */
function milk(): void {}

/* 
never 表示永遠不會有返回結果，連 undefined 也不行 
使用場景: 錯誤處理 (error 時程式碼就中斷了，不會有返回值)
*/
function handleError(): never {
  throw new Error("error");
}

/*  object (不實用)，無法定義 object 內部*/
let g: object;
g = {};
g = () => {};

/*  object (實用)，可定義 object 內部屬性，被定義後的屬性，不能多也不能少 */
let h: { name: string; age: number };
h = { name: "hi", age: 20 };

/* ? 代表可有可無 */
let i: { name: string; age?: number };
i = { name: "hi" };

/* 
僅想限制 name，其它不限，可用:
[prop: string]: any 來定義物件裡的 key (key 是 string)
*/
let j: { name: string; [prop: string]: unknown };
j = { name: "yachen", gender: "femail" };

/* 
定義函數結構:
k 函數有 a、b 兩個參數，return 值是 number
 */
let k: (a: number, b: string) => number;
k = (a: number, b: string) => {
  return 123;
};

/*
array:
法 (1)
string[] 表示 array 裡面全部裝 string
number[] 表示 array 裡面全部裝 number

法 (2)
Array<type>
*/

// 法 (1)
let l: string[];
l = ["a", "b", "c"];

// 法 (2)
let m: Array<string>;
m = ["a", "b", "c"];

/* tuple: 固定長度的 array */
let n: [string, number];
n = ["pig", 10];

/* enum 枚舉 */
enum Gender {
  Male = 0,
  female = 1,
}

let o: { name: string; gender: Gender };
o = {
  name: "yachen",
  gender: Gender.female,
};

/* 類型別名 */
type customType = 1 | 2 | 3 | 4 | 5;
let p: customType;
let q: customType;
