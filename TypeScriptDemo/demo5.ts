
function getTotal(one: number, tow: number): number {//返回类型必须是number
    return one + tow;//如果变成类型就会报错，比如在后面接上 +'' 变成string类型就会报错
}
const total = getTotal(1, 2);


function sayHello(): void {//不能有返回值 如果写return 就会报错
    console.log("Hello");
    //return "";//报错
}

//返回never的函数必须有无法被执行到的终止点
//例子1【抛出异常】
function errorFunction(): never {
    throw new Error();
    console.log("是否执行这句话");//不会打印这句

}
//例子2【死循环】
function forNever(): never {
    while (true) { }
    console.log("是否执行这句话");//不会打印这句    
}



//参数类型注解

//普通参数 如：参数 (param1,param2,param3)==>类型注解：(param1:number,param2:string, param3:boolean)
function getNumber(num: number, num2: number) {
    return num;
}
const getNumber1 = getNumber(1, 2);


//对象参数 传入的参数为{param1,param2}==>类型注解为: {param1,param2}:{param1:number,param2:string}
function add({ one, tow }: { one: number, tow: number }) {
    return one + tow;
}
const add1 = add({ one: 1, tow: 2 })

