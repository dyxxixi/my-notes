# <center>第三次作业</center>
> [在线阅读](https://notes.dengyuxi.me/#/java-learn/hw3)

## 一、商品管理（类的使用）
### 0.需求
- 编写⼀个商品类，包含商品ID、商品名、商品描述、价格，并重写方法可以返回有关商品的信息。
- 编写⼀个货架类，需要：货架ID、货架名、商品列表（使用商品类数组)，需要重写方法对货架的信息和商品列表进行内容输出。
- 编写⼀个管理员类，需要：用户名、密码两个属性，重写方法输出管理员信息。
- 为管理员类添加商品排序方法，需要将货架类对象作为方法的参数，对货架中商品数组的商品单价进行降序,输出排序后的商品数组。
- 创建⼀个测试类，创建多个商品类对象（自行赋值），创建货架类对象（自行赋值），将这些商品类对象作为对象数组传给货架类对象中的“商品列表”这个属性，创建管理员对象（自行赋值），调用商品排序方法，将货架类对象作为参数输入，在控制台上显示输出结果。

### 1.分析
弄清楚各个类之间的逻辑后编写，商品价格排序使用冒泡排序思想，使用了lombok库来简写。

### 2.完整代码
商品类：
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Goods {
    private int id;
    private String name, describe;
    private int price;

    @Override
    public String toString() {
        return "id:" + id +
                ", name:'" + name + '\'' +
                ", describe:'" + describe + '\'' +
                ", price:" + price;
    }
}
```

货架类:
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

@Getter
@Setter
@AllArgsConstructor
public class Shelf {
    private int id;
    private String name;
    private Goods[] goodsList;

    @Override
    public String toString() {
        return "id:" + id +
                ", name:'" + name + '\'' +
                ", goodsList:" + Arrays.toString(goodsList);
    }
}
```

管理员类:
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Admin {
    private String userName, userPwd;
    public Goods[] sortGoods(Shelf shelf) {
        Goods[] lists = shelf.getGoodsList();
        for (int i = 0; i < lists.length - 1; i++) {
            for (int j = i + 1; j < lists.length; j++) {
                if (lists[j].getPrice() > lists[i].getPrice()) {
                    Goods temp;
                    temp = lists[j];
                    lists[j] = lists[i];
                    lists[i] = temp;
                }
            }
        }
        return lists;
    }

    @Override
    public String toString() {
        return "userName:'" + userName + '\'' +
                ", userPwd:'" + userPwd + '\'';
    }
}
```

测试类:
```java
package com.cqcet.dengyuxi.homework;

public class TestMain {
    public static void main(String[] args) {
        Goods good1 = new Goods(10001, "手机", "Iphone14", 8999);
        Goods good2 = new Goods(10002, "电脑", "MacBook", 14999);
        Goods good3 = new Goods(10003, "手表", "Apple Watch", 2999);
        Goods good4 = new Goods(10004, "平板", "Ipad9", 4999);

        Shelf shelf = new Shelf(20001, "电子产品", new Goods[]{good1, good2, good3, good4});
//        System.out.println(shelf);

        Admin admin = new Admin("andmin", "123abc");
        Goods[] goods = admin.sortGoods(shelf);
        for (Goods good : goods) {
            System.out.println(good);
        }
    }
}
```
### 3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw3-2.webp)


## 二、库存管理系统（集合的使用）
### 0.需求
- 像商城和超市这样的地方，都需要有自己的库房，并且库房商品的库存变化有专人记录，这样才能保证商城和超市正常运转。
- 要求编写一个程序，模拟库存管理系统。该系统主要包括系统首页、商品入库、商品显示和删除商品功能。每个功能的具体要求如下：
- 系统的首页：用于显示系统所有的操作，并且可以选择使用某一个功能。
- 商品入库功能：首先提示是否要录入商品，根据用户输入的信息判断是否需要录入商品。如果需要录入商品，则需要用户输入商品的名称、颜色、价格和数量等信息。录入完成后，提示商品录入成功并打印所有商品。如果不需要录入商品，则返回系统首页。
- 商品显示功能：用户选择商品显示功能后，在控制台打印仓库所有商品信息。
- 删除商品功能：用户选择删除商品功能后，根据用户输入的商品编号删除商品，并在控制台打印删除后的所有商品。
- 要求使用Collection集合存储自定义的对象，并用迭代器、foreach循环遍历集合。

### 1.分析
弄清楚各个功能之间的逻辑后编写,商品类使用了lombok库。

### 2.完整代码
SMS类:
```java
package com.cqcet.dengyuxi.homework;

import java.util.ArrayList;
import java.util.Scanner;

public class SMS {
    //    定义商品数组集合
    ArrayList<Goods> goodsList = new ArrayList<>();

    Scanner scanner = new Scanner(System.in);

    //   首页
    public void index() {
        while (true) {
            System.out.println("请输入您使用的功能：1---添加商品；2---显示商品；3---删除商品");
            int inputNum = scanner.nextInt();
            switch (inputNum) {
                case 1:
                    addGoods();
                    break;
                case 2:
                    showGoods();
                    break;
                case 3:
                    deleteGoods();
                    break;
                default:
                    return;
            }
        }
    }

    //   添加商品
    public void addGoods() {
        System.out.println("---请输入商品信息---");
        System.out.println("请输入商品的编号：");
        int idInput = scanner.nextInt();
        System.out.println("请输入商品的名称：");
        String nameInput = scanner.next();
        System.out.println("请输入商品的颜色：");
        String colorInput = scanner.next();
        System.out.println("请输入商品的价格：");
        int priceInput = scanner.nextInt();
        System.out.println("请输入商品的数量：");
        int countsInput = scanner.nextInt();

        Goods goods = new Goods(idInput, nameInput, colorInput, priceInput, countsInput);
        goodsList.add(goods);
        System.out.println("添加商品成功！");
        showGoods();
    }

    //   展示商品
    public void showGoods() {
        System.out.println("当前商品列表：");
        goodsList.forEach(goods -> {
            System.out.println(goods);
        });
    }

    //   删除商品
    public void deleteGoods() {
        System.out.println("请输入要删除的商品编号：");
        int removeIdInput = scanner.nextInt();

        //使用removeIf()  removeIf() 方法用于删除所有满足特定条件的数组元素
        goodsList.removeIf(e -> e.getId() == removeIdInput);

        System.out.println("删除商品成功！");
        showGoods();
    }
}
```

商品类:
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Goods {
    private int id;
    private String name;
    private String color;
    private int price;
    private int counts;

    @Override
    public String toString() {
        return "商品编号：" + id +
                ",商品名：'" + name + '\'' +
                ", 商品颜色：'" + color + '\'' +
                ", 商品价格：" + price + "元" +
                ", 商品数量：" + counts;
    }
}
```

测试类:
```java
package com.cqcet.dengyuxi.homework;

public class TestMain {
    public static void main(String[] args) {
        SMS sms=new SMS();
        sms.index();
    }
}
```

3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw3-3.webp)
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw3-4.webp)
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw3-5.webp)
