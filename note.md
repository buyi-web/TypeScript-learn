# TypeScript

[中文文档](https://www.tslang.cn/docs/home.html)

## JS开发中的问题

- js语义本身的特性，决定了该语言无法适应大型项复杂的项目
- 弱类型：某个变量，可以随时更换类型
- 解释型：错误发生的时间是在运行时

## 在node中搭建TS开发环境

### 安装TypeScript

默认情况下，TS会做出下面几种假设：

1. 假设当前执行环境是dom
2. 如果代码中没有使用模块化语句（import，export），便认为该代码全局是执行
3. 编译的目标代码是ES3

### TypeScript配置

```json
{
    "compilerOptions": {
        "target": "es5",
        "strictNullChecks": "true", //更加严格的空类型检查
    }
}
```

使用了配置文件后，再使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件。

@types是一个ts官方的类型库，其中包含了很对对js代码的类型描述。

>jQuery：用js写的，没有类型检查
>安装@types/jquery，为jQuery库添加类型定义

## 类型

基本类型：

- number
- string
- boolean
- number[] 或者 `Array<number>`
- object

其他类型：

- void类型：通常用于约束函数的返回值，表示该函数没有任何返回

- nerver类型：通常用于约束函数的返回值， 表示该函数永远不会结束

```ts
function fn(): nerver {
    while (true) {
        ...
    }
}
```

- 字面量类型：使用一个值进行约束

```ts
let sex: "男"|"女"
```

- 元组类型（Tuple）：一个固定长度的数组，并且数组每一项的类型确定

```ts
let arr: [number, string, boolean] = [1, "2", false]
```

- any类型：any类型会绕过类型检查，any类型可以赋值给任意类型

## 类型别名

对已知的类型定义名称

`type 类型名称 =  ...`

```ts
type User = {
    name: string,
    sex: "男"|"女",
    age: number
}
```

## 函数的约束

函数重载：在函数实现之前，对函数调用的多种情况进行声明

```TypeScript
function combine(a:number, b: number):number;
function combine(a:string, b: string):string;
function combine(a:number|string, b: number|string): number|string {
    if(typeof a === 'number' && typeof b === 'number') {
        return a * b
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a + b
    }else {
        throw new Error("params type error");
    }
}
```

可选参数：可以下某些参数后面加上`?`表示该参数可以不用传递，可选参数只能出现在函数参数列表最后

## 枚举类型

枚举通常用于约束某个变量的取值范围。

字面量和联合类型配合使用，也可以达到同样的效果

### 字面量类型的问题

- 在类型约束位置，会产生重复的代码。 （可以使用类型别名解决）
- 逻辑含义和真实的值产生了混淆，会导致修改真是的值的时候产生大量修改
- 字面量类型不会进入编译结果

```ts
type Sex = "男" | "女"
let sex1: Sex = "男"
//...
let sex2: Sex = "男"
//当某天需要修改"男"为"帅哥"时，会造成大量修改
```

### 使用枚举

```
enum 枚举名 {
    枚举字段1 = 枚举值
    枚举字段2 = 枚举值
}
```

```ts
enum Sex{
    male = '男',
    famale = '女'
}

let sex1: Sex = Sex.male
```

枚举类型会出现在编译结果中，编译结果会表现为对象

枚举的规则：

- 枚举的字段值可以是字符串和数字
- 数字枚举值会自动自增

## 接口和类型兼容性

typescript的接口：用于约束类，对象，函数的契约（标准）



