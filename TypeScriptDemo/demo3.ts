//基础静态类型
const num: number = 996;
const myName: string = '我的名字';
//基础静态类型还有：null、undefined、boolean、void、symbol


//对象类型
//1、普通对象类型
const Human: {
    name: string,
    age: number
} = {   //初始化const声明对象的值，不然会提示错误
    name: '爱丽丝',
    age: 16
}

//2、数组
const arry: string[] = ['小红', '小明', '小白'];

//3、class类
class Person { }
const person1: Person = new Person();

//4、函数
const way: () => string = () => { return "返回内容必须是string" }
