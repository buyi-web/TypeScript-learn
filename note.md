# TypeScript

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
        "target": "es2016"
    }
}
```

使用了配置文件后，再使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件。

@types是一个ts官方的类型库，其中包含了很对对js代码的类型描述。

>jQuery：用js写的，没有类型检查
>安装@types/jquery，为jQuery库添加类型定义