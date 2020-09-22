
//普通方法实现
// const screenResume = (name: string, age: number, workAge: number) => {
//     age < 24 || workAge < 1 && console.log(name + '，很遗憾你被淘汰了');
//     age >= 24 && workAge >= 1 && console.log(name + ',恭喜你，晋级了');
// }

// screenResume('露娜', 25, 3);


//使用接口实现
//定义接口 控制参数类型不可变，必填属性不能少
interface Person {
    name: string;
    age: number;
    workAge: number;
    carAge?: number; //加了个? 表示这个属性为可选项，可写可不写
    [propname: string]: any;//表示可以添加属性名为string，类型可以是任何类型的属性
    say(): string;//定义一个返回类型为string的方法
}

class khPerson implements Person {//【class使用implements继承接口】，必填属性和方法必须重写，可以添加其他属性或方法
    name = "凯皇";
    age = 28;
    workAge = 5;
    carAge = 4;
    say() {
        return "大家好"
    };
}
interface DoPerson extends Person {//【interface使用extends继承接口】，可以不用重写属性，可以添加其他属性或方法
    teach(): string;
}
const person1 = {
    name: '露娜',
    age: 25,
    workAge: 3,
    carAge: 1,
    sex: '女',
    say() {
        return "hello,大家好";
    },
    teach() {
        return "我来教你如何做人"
    }
}

const screenResume = (p: Person) => {
    p.age < 24 || p.workAge < 1 && console.log(p.name + '，很遗憾你被淘汰了');
    p.age >= 24 && p.workAge >= 1 && console.log(p.name + ',恭喜你，晋级了');
}

const getResume = (p: DoPerson) => {
    console.log(p.name + "的年龄是：" + p.age);
    console.log(p.name + "的工作经验有：" + p.workAge + "年");
    p.carAge && console.log(p.name + "的驾驶年龄有：" + p.carAge + "年");//传入的person1中有carAge就显示没有就不显示
    console.log(p.name + "的性别是：" + p.sex);
    console.log(p.say());
    console.log(p.teach());
}

screenResume(person1);
getResume(person1);
