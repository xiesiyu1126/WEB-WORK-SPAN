
// class Person {
//     public name: string;
//     constructor(name: string) {//构造函数
//         this.name = name;
//     }
// }


//简明写法
class Person {
    //构造函数
    constructor(public name: string) { }
}

const person = new Person("詹姆斯");
console.log(person.name);

//类有默认的构造函数，不过是无参的
//如果父类有带参的构造函数，之类必须实现构造函数，构造函数内要用super
class Teacher extends Person {

    constructor(public age: number, public name: string) {//子类的构造方法
        super(name);//父类的构造方法传入的是string类型，所以这里要有字符串
    }
}

const teacher = new Teacher(18, '谢尔顿');
console.log(teacher.age);
console.log(teacher.name);