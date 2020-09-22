//定义了count 只能是number类型
let count: number = 1;
count=2;//正确

//定义一个一类，有name，age属性，并指定他们的属性
interface Person {
    name: string,
    age: number
}

//将XiaoMing的类型指定为Person，属性类型就不能变了
const XiaoMing: Person = {
    name: '小明',
    age: 18
}

console.log(XiaoMing.name);