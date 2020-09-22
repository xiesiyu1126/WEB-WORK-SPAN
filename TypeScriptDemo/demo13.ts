//创建枚举
enum Subject {
    MATH,
    Chinese,
    English
}

function getSubject(subject: any) {
    if (subject === Subject.MATH) {
        return "数学";
    } else if (subject === Subject.Chinese) {
        return "语文";
    } else if (subject === Subject.English) {
        return "英语";
    }
}
//const result = getSubject(Subject.English);
const result = getSubject(0);
console.log(`我选了${result}`);

console.log(Subject.MATH)
console.log(Subject.Chinese)
console.log(Subject.English)
console.log(Subject[0])
console.log(Subject[1])
console.log(Subject[2])