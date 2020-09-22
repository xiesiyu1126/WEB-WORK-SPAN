
//类型单一的数组定义
const numberArr = [1, 2, 3];//类型推断为 number[]

const countArr: number[] = [5, 6, 7];//数组的类型注解

const undefinedArr: undefined[] = [undefined, undefined];

//类型多样的数组定义
const arr = [1, 2, 'string'];
const arr2: (number | string)[] = ['string', 1, 'sting', 3, 4, 5];//number、string都包括

//对象数组
const person: { name: string, age: number }[] = [
    { name: '小宝', age: 3 },
    { name: '大宝', age: 6 }
]
//对象数组-使用类型别名方式一
type Human = { name: string, age: number };
const person2: Human[] = [
    { name: '小宝', age: 3 },
    { name: '大宝', age: 6 }
]
//对象数组-使用类型别名方式二
class Human2 {
    name: string;
    age: number
}
const person3: Human2[] = [
    { name: '小宝', age: 3 },
    { name: '大宝', age: 6 }
]