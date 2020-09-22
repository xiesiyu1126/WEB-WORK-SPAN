class Lady {
    content = 'hello'
    sayHello() {
        return this.content
    }
}

const lady1 = new Lady();
console.log(lady1.sayHello())

//类的继承
class Girl extends Lady {
    sayBye() {
        return 'bye-bye'
    }
}

const girl1 = new Girl();
console.log(girl1.sayHello());//继承了父类的方法
console.log(girl1.sayBye());//自己定义的方法

class Woman extends Lady {
    sayHello() {//重写父类的方法
        return super.sayHello() + "，被我重写了";
    }
}

const woman1 = new Woman();
console.log(woman1.sayHello());//重写父类的方法