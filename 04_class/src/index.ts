import Person from "./person";
import { Dog, Cat } from "./animal";

const yachen = new Person("yachen", 20);
const Lucky = new Dog("Lucky", 3);
const Miao = new Cat("Miao", 5);

yachen.sayHi();
console.log("Lucky", Lucky);
console.log("Miao", Miao);

Lucky.bark();
