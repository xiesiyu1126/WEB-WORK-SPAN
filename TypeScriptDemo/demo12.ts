//联合类型和类型保护
//只有在有联合类型的情况下才有类型保护（也叫类型守护）

interface Teacher {
    useable: boolean;
    teach: () => {}
}

interface Chef {
    useable: boolean;
    cook: () => {}
}

//job: Teacher | Chef【联合类型：不确定参数到底是什么类型的时候】
function judge_01(job: Teacher | Chef) {
    //类型保护方法一：类型断言
    if (job.useable) {
        (job as Teacher).teach();
    } else {
        (job as Chef).cook();
    }
}

function judge_02(job: Teacher | Chef) {
    //类型保护方法二：in方法断言
    if ('teach' in job) {
        (job as Teacher).teach();
    } else {
        (job as Chef).cook();
    }
}


function add(param1: string | number, param2: string | number) {
    //类型保护方法三：typeof判断
    if (typeof param1 === "string" || typeof param2 === "string") {
        return `${param1}${param2}`;
    }
    return param1 + param2;
}

class NumberObj {
    count: number;
}

function addObj(param1: object | NumberObj, param2: object | NumberObj) {
    //类型保护方法四：instanceof判断
    if (param1 instanceof NumberObj && param2 instanceof NumberObj) {
        return param1.count + param2.count;
    }
    return 0;

}