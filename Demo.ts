//tsconfig.json这个文件的生成方式
//执行命令：tsc -init


//如何验证tsconfig.json这个配置文件起作用
//1、打开tsconfig.json中被注释掉的"removeComments": true的选项[作用：生成的js文件不会有注释]
//2、如果使用 tsc xxx.ts 生成的 js文件还是会有注释                                                            
//3、直接使用tsc 命令 
//              直接使用tsc 不指定文件，会将所有的ts文件编译为js文件,所以需要在json文件中配置include选项
//              【配置了哪些文件，就编译哪些文件】
// "exclued":["xxx.ts"]==>不编译的文件
// "files":["xxxx.ts"]==>与include的作用相似

const person: string = 'Lalala'