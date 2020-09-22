class Human {
    constructor(private _age: number) { }

    //获取age
    get age() {
        return this._age;
    }
    //设置age
    set setAge(num: number) {
        this._age = num + 2;
    }

    static sayWorld() {
        return 'hello,world'
    }
}

const human = new Human(16);
//console.log(human._age);//因为_age私有化了，所以不能直接调用
console.log("获取结果：" + human.age);//通过get 方法获取 _age


human.setAge = 28;//通过set 方法给age赋值
console.log("设置结果：" + human.age)

console.log("静态方法的调用：" + Human.sayWorld());