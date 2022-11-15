# <center>第四次作业</center>
> [在线阅读](https://notes.dengyuxi.me/#/java-learn/hw4)

## 一、创建学生表
### 0.需求
添加数据库，并创建表t_student。

### 1.分析
使用Navicat Premium软件连接MySQL数据库，创建数据库和学生表，或者用cmd控制台使用sql语句创建，这里使用的是前者。

### 2.sql语句
```bash
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student`  (
  `sid` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES (1, '张三', 10, '男');
INSERT INTO `t_student` VALUES (2, '李四', 12, '男');
INSERT INTO `t_student` VALUES (3, '王五', 13, '女');

SET FOREIGN_KEY_CHECKS = 1;
```

### 3.效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw4-1.webp)

## 二、创建学生类(Student)
### 0.需求
学生类中属性的类型和名称需要和数据库t_student中对应。

### 1.分析
按照需求创建,使用lombok简化代码。

### 2.完整代码
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Student {
    private Integer sid;
    private String name;
    private Integer age;
    private String sex;
}
```

## 三、创建数据库操作类(DBOptions)
### 0.需求
- 创建⼀个静态方法getStuList，返回的是Student的集合类型；
- 在方法中加载数据库驱动建立连接，如果连接失败则提示用户，并返回null；
- 在方法中执行查询的sql语句，获取全部数据；
- 先创建学生集合studentList，然后遍历sql语句执行的结果集合，每⼀次遍历都new Student对象出来，进行赋值后（构造赋值）添加到studentList中；
- 关闭数据库连接，返回studentList。

### 1.分析
按照需求创建。

### 2.完整代码
```java
package com.cqcet.dengyuxi.homework;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBOptions {
    public static List<Student> getStuList() {
        List<Student> studentList = new ArrayList<>();
        try {
            //  连接数据库
            Class.forName("com.mysql.cj.jdbc.Driver");
            String address = "jdbc:mysql://127.0.0.1:3306/java_learn?serverTimezone=Asia/Shanghai";
            String username = "root";
            String password = "123456";
            Connection connection = DriverManager.getConnection(address, username, password);

            if (connection == null) {
                System.out.println("数据库连接失败！");
                return null;
            }
            //  获取全部数据的sql语句
            String sql = "select * from t_student";
            Statement statement = connection.createStatement();
            //  执行sql语句
            ResultSet resultSet = statement.executeQuery(sql);
            //  遍历sql语句执行的结果集合
            while (resultSet.next()) {
                Integer id = resultSet.getInt("sid");
                String name = resultSet.getString("name");
                Integer age = resultSet.getInt("age");
                String sex = resultSet.getString("sex");
                //  new一个student对象，并添加到studentList中
                Student student = new Student(id, name, age, sex);
                studentList.add(student);
            }
            //  关闭连接
            statement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return studentList;
    }
}
```

## 四、创建文件操作类(FileOptions)
### 0.需求
- 需要使用File变量作为私有属性，利用构造方法，输入文本文件路径，并创建出File对象；
- 创建一个void方法writeIn，需要以Student对象集合作为形参，并判断文件对象是否存在，如果不存在则创建新文件；
- 在writeIn内部使用字节输出流，先将表头（学号 姓名 年龄 性别）写入文本文件中，然后换行；
- 在writeIn内部遍历Student集合，将数据拼接成字符串的形式，合理的调整字符串内部数据的布局；
- 在writeIn内部将上述字符串写入文件中，并且每写一行就换行；
- 关闭字节输出流。

### 1.分析
按照需求创建。

### 2.完整代码
```java
package com.cqcet.dengyuxi.homework;

import lombok.AllArgsConstructor;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@AllArgsConstructor
public class FileOptions {
    //  定义私有属性
    private File file;

    public void writeIn(List<Student> studentList) throws IOException {
        //  判断文件对象是否存在
        if (!file.exists()) {
            file.createNewFile();
        }

        //  将表头（学号 姓名 年龄 性别）写入文本文件中
        OutputStream output = new FileOutputStream(file);
        output.write("学号 姓名 年龄 性别\n".getBytes("UTF-8"));

        //  遍历Student集合，将数据拼接成字符串的形式，并写入文件中
        studentList.forEach(stu -> {
            String stuStr = stu.getSid().toString() + "   " + stu.getName() + "  " + stu.getAge().toString() + "  " + stu.getSex() + "\n";
            try {
                output.write(stuStr.getBytes("UTF-8"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
        //  关闭字节输出流
        output.close();
    }
}
```

## 五、创建测试类(TestMain)
### 0.需求
- 先从数据库中获取到学生信息的集合；
- 创建FileOptions对象，指定一个“相对路径”；
- 调用有关方法，将学生集合写入文件中。

### 1.分析
- new一个DBOptions对象，调用getStuList()方法获得学生信息的集合；
- new一个FileOptions对象，指定路径为该项目文件夹下的data.txt文件；
- 调用writeIn()方法将学生集合写入文件中。

### 2.完整代码
```java
package com.cqcet.dengyuxi.homework;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class TestMain {
    public static void main(String[] args) {
        DBOptions dbOptions = new DBOptions();
        List<Student> stuList = dbOptions.getStuList();
//        System.out.println(stuList);
        FileOptions fileOptions = new FileOptions(new File("Course09\\src\\main\\java\\com\\cqcet\\dengyuxi\\homework\\data.txt"))
        try {
            fileOptions.writeIn(stuList);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### 3.最终效果图
![alt](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/java-learn-hw4-2.webp)
