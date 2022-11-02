# <center>第三次作业</center>
> [在线阅读](https://notes.dengyuxi.me/#/java-learn/hw3)

## 一、类的使用
### 0.需求
- 编写⼀个商品类，包含商品ID、商品名、商品描述、价格，并重写方法可以返回有关商品的信息。
- 编写⼀个货架类，需要：货架ID、货架名、商品列表（使用商品类数组)，需要重写方法对货架的信息和商品列表进行内容输出。
- 编写⼀个管理员类，需要：用户名、密码两个属性，重写方法输出管理员信息。
- 为管理员类添加商品排序方法，需要将货架类对象作为方法的参数，对货架中商品数组的商品单价进行降序,输出排序后的商品数组。
- 创建⼀个测试类，创建多个商品类对象（自行赋值），创建货架类对象（自行赋值），将这些商品类对象作为对象数组传给货架类对象中的“商品列表”这个属性，创建管理员对象（自行赋值），调用商品排序方法，将货架类对象作为参数输入，在控制台上显示输出结果。

### 1.分析
弄清楚各个类之间的逻辑后编写，商品价格排序使用冒泡排序思想。

### 2.完整代码
商品类：
```java
package com.cque.dengyuxi.homework;

public class Goods {
    private int id, price;
    private String name, describe;

    public Goods(int id, String name, String describe, int price) {
        this.id = id;
        this.name = name;
        this.describe = describe;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

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
package com.cque.dengyuxi.homework;

import java.util.Arrays;

public class Shelf {
    private int id;
    private String name;
    private Goods[] goodsList;

    public Shelf(int id, String name, Goods[] goodsList) {
        this.id = id;
        this.name = name;
        this.goodsList = goodsList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Goods[] getGoodsList() {
        return goodsList;
    }

    public void setGoodsList(Goods[] goodsList) {
        this.goodsList = goodsList;
    }

    @Override
    public String toString() {
        return "id=" + id +
                ", name:'" + name + '\'' +
                ", goodsList:" + Arrays.toString(goodsList);
    }
}
```

管理员类:
```java
package com.cque.dengyuxi.homework;

public class Admin {
    private String userName, userPwd;

    public Admin(String userName, String userPwd) {
        this.userName = userName;
        this.userPwd = userPwd;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

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
package com.cque.dengyuxi.homework;

public class MainTest {
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
