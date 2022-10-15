# <center>第二次作业</center>
> [在线阅读](https://notes.dengyuxi.me/#/java-learn/hw2)

## 一、找素数
### 0.需求
判断101-200之间有多少个素数，并输出所有素数。

### 1.分析
- 101-200之间的数据可以采用循环依次拿到; 每拿到一个数，判断该数是否是素数；
- 判断规则是：从2开始遍历到该数的一半的数据，看是否有数据可以整除它，有则不是素数，没有则是；
- 如果最终判定是素数，即可输出展示，并且计数。

### 2.完整代码
```java
package com.cque.dengyuxi.homework;

public class Main {
    public static void main(String[] args) {
        int count = 0;
        System.out.println("101-200之间的素数有：");
        for (int i = 101; i < 201; i++) {
            boolean flag = true;
            for (int j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                System.out.print(i + "\t");
                count++;
            }
        }
        System.out.println("\n个数为：" + count);
    }
}
```

### 3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw2-2.webp)


## 二、验证码
### 0.需求
定义方法实现随机产生一个指定位数的验证码，每位可能是数字、大小写字母。

### 1.分析
- 定义一个方法，生成验证码返回：返回值类型是String，需要形参接收位数。
- 在方法内部声明一个数组，使用for循环依次往数组中存入随机字符。
- 把随机字符数组转为String型返回。

### 2.完整代码
```java
package com.cque.dengyuxi.homework;

import java.security.SecureRandom;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        System.out.println(generateRandomCode(6));  //生成6位验证码
    }

    public static String generateRandomCode(int n) {
        String RANDOM_CODE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        Random RANDOM = new SecureRandom();
        char[] code = new char[n];
        for (int index = 0; index < code.length; index++) {
            code[index] = RANDOM_CODE.charAt(RANDOM.nextInt(RANDOM_CODE.length()));
        }
        return new String(code);
    }
}
```

### 3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw-3.webp)


## 三、数字加密
### 0.需求
加密：某系统的数字密码：比如1983，采用加密方式进行传输，规则如下：先得到每位数，然后每位数都加上5，再对10求余，最后将所有数字反转，得到一串新数。

解密：将上述方法加密后的数字进行解密。

### 1.分析
- 考虑到有0开头的密码，决定密码类型为String
- 循环遍历密码字符串，将每一位转为数字再进行相应规则运算
- 拼接到一个新的字符串中，然后反转操作并返回
- 解密操作类似加密，与加密不同的是规则运算，减去运算时要考虑负数的情况

### 2.完整代码
```java
package com.cque.dengyuxi.homework;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入系统密码：");
        String inputPwd = scanner.next();
        System.out.println("加密后的系统密码：" + getEncryptPwd(inputPwd));
        System.out.println("解密后的系统密码：" + getDecryptPwd(getEncryptPwd(inputPwd)));
    }

    //  加密
    public static String getEncryptPwd(String str) {
        String newStr = "";
        for (int i = 0; i < str.length(); i++) {
            int n = str.charAt(i) - '0';
            newStr += (n + 5) % 10;
        }
        return new StringBuffer(newStr).reverse().toString();
    }

    //  解密
    public static String getDecryptPwd(String str) {
        String newStr = "";
        for (int i = 0; i < str.length(); i++) {
            int n = str.charAt(i) - '0';
            newStr += ((n + 10) - 5) % 10;
        }
        return new StringBuffer(newStr).reverse().toString();
    }
}

```

### 3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw2-4.webp)
