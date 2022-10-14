# <center>第一次作业</center>
> [在线阅读](https://notes.dengyuxi.me/#/java-learn/hw1)

## 一、算数运算符
### 0．需求
用户输入两个四位数，将这两个数拆分为个十百千位，求这八位数的总和。

### 1.实现输入
使用Scanner

```java
  Scanner scanner = new Scanner(System.in);
  System.out.println("请输入第一个四位正整数:");
  int input1 = scanner.nextInt();
  System.out.println("请输入第二个四位正整数:");
  int input2 = scanner.nextInt();
```


### 2.实现整数的拆分求和方法
主要利用数字的取余取模操作实现拆分，该方法适用于任意长度的正整数。

```java
  private static int SplitSum(int n) {
        int s = 0;
        int len = (n + "").length();
        for (int i = 0; i < len; i++) {
            s += n % 10;
            System.out.print(n % 10 + "\t");
            n /= 10;
        }
        System.out.println(",");
        return s;
    }
```

### 3.完整代码
```java
package com.cque.dengyuxi.homework;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入第一个四位正整数:");
        int input1 = scanner.nextInt();
        System.out.println("请输入第二个四位正整数:");
        int input2 = scanner.nextInt();
        System.out.println("拆分：");
        System.out.println("总和为：\n" + (SplitSum(input1) + SplitSum(input2)));
    }

    private static int SplitSum(int n) {
        int s = 0;
        int len = (n + "").length();
        for (int i = 0; i < len; i++) {
            s += n % 10;
            System.out.print(n % 10 + "\t");
            n /= 10;
        }
        System.out.println(",");
        return s;
    }
}

```

### 4.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw1-4.webp)


## 二、拼接运算符
### 0．需求
用户输⼊自己的姓名、年龄、性别、地址、邮箱，拼接成如下字符串：我的名字是张三，今年22岁，性别为男，住在重庆工商大学江北校区，我的联系方式是：952271030@qq.com。

### 1.实现输入
使用Scanner

### 2.拼接
使用`+`号拼接

### 3.完整代码
```java
package com.cque.dengyuxi.homework;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入您的姓名、年龄、性别、地址、邮箱:");
        String input1 = scanner.next();
        int input2 = scanner.nextInt();
        String input3 = scanner.next();
        String input4 = scanner.next();
        String input5 = scanner.next();
        System.out.println("我的名字是" + input1 + "，今年" + input2 + "岁，性别为" + input3 + "，住在" + input4 + "，我的联系⽅式是：" + input5 + "。");
    }
}

```

### 4.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw1-5.webp)


## 三、自增自减过程分析
### 0.需求
根据如下代码进行步骤分析
```java
    int a,b,c;
    a=4;b=5;c=6;
    boolean x=((a++)==b);
    boolean y=((b++)==(--c));
    System.out.println(a==b);
    System.out.println((!x&y));
```

### 1.分析

- `a++`先运算后自增,`(a++)==b`中a使用之前的值为4，b值为5，4不等于5，所以x为`false`；（这之后a=5，b=5,c=6)
- `b++`先运算后自增,而`--c`先自减后运算，`(b++)==(--c)`中b使用之前的值为5，c使用自减后的值为5，5当然等于5，所以y为`true`；（这之后a=5，b=6,c=5)
- 显然a不等于b，打印`false`
- !x为`true`,y也为`true`,又操作符`&`表示：如果相对应位都是1，则结果为1，否则为0，所以`!x&y`为`true`,即打印`true`
- 综上，先打印`false`,再打印`true`


## 四、switch实现用户登录
### 0.需求
在switch语句中定义n个用户名和密码，从键盘录⼊用户名和密码，进行用户名密码匹配。

### 1.实现输入
使用Scanner

### 2.编写switch语句
```java
switch (name) {
    case "admin":
        if (pwd.equals("123abc")) {
            System.out.println(name+"登录成功!");
        } else {
            System.out.println("密码错误！");
        }
        break;
    case "evan":
        if (pwd.equals("abc123")) {
            System.out.println("name+登录成功!");
        } else {
            System.out.println("密码错误！");
        }
        break;
    case "jason":
        if (pwd.equals("hello")) {
            System.out.println("name+登录成功!");
        } else {
            System.out.println("密码错误！");
        }
        break;
    default:
        System.out.println("用户名不存在！");
}
```

### 3.完整代码
```java
package com.cque.dengyuxi.homework;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入用户名和密码:");
        String name = scanner.next();
        String pwd = scanner.next();

        switch (name) {
            case "admin":
                if (pwd.equals("123abc")) {
                    System.out.println(name+"登录成功!");
                } else {
                    System.out.println("密码错误！");
                }
                break;
            case "evan":
                if (pwd.equals("abc123")) {
                    System.out.println("name+登录成功!");
                } else {
                    System.out.println("密码错误！");
                }
                break;
            case "jason":
                if (pwd.equals("hello")) {
                    System.out.println("name+登录成功!");
                } else {
                    System.out.println("密码错误！");
                }
                break;
            default:
                System.out.println("用户名不存在！");
        }
    }
}

```

### 4.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw1-6.webp)

![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw1-7.webp)
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw1-8.webp)

