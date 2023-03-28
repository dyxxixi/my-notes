# 枚举的位运算

## 需求
在TypeScript中，假如我们需要定义这样一个枚举，用于判定获取资源的权限，如下：
```ts
enum Permission{
  Read,     //可读
  Write,    //可写
  Create,   //可创建
  Delete   //可删除
}
```
但是，通常我们需要对这些权限进行组合，我们首先想到的是可以这样操作：
```ts
enum Permission{
  Read,
  Write,
  Create,
  Delete,
  ReadAndWrite,
  ReadAndWriteAndCreate,
  ...
}
```
显然，这样做会很繁琐，这时候就可以考虑使用位运算

## 位运算
一、首先这样改写：
```ts
enum Permission{
  Read = 1,   //0001
  Write = 2,  //0010
  Create = 4, //0100
  Delete = 8 //1000
}
```

二、然后组合权限就可以像这样：
- 表示可读可写：`Permission.Read | Permission.Write`；
- 表示可读可写可删除：`Permission.Read | Permission.Write | Permission.Delete`
- 以此类推。。。

实际上这是进行了或运算（使用`|`符号），`0001`和`0010`进行`或运算`得`0011`，即**可读可写**可以使用**可读和可写进行或运算**来表示

三、那如何判断是否拥有某个权限呢？，那就可以使用且运算（使用`&`符号），例如：
我们可以写这样一个函数：
```ts
let p:Permission = Permission.Read | Permission.Write;
function hasPermission(target:Permission,pre:Permission){
  return (target & pre) === pre;
}
hasPermission(p,Permission.Read); //true
hasPermission(p,Permission.Create) //false
```

四、那假如要删除某个权限呢？那就可以使用异或运算（使用`^`符号），例如：
```ts
p = p ^ Permission.Write;
hasPermission(p,Permission.Write) //false
```

## 总结
无
