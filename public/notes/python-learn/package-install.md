# 库的安装

> 对于Python项目，生成和使用requirements.txt是十分必要的。通过requirements.txt可以一次性保存和安装项目所需要的所有库，尤其是在不同电脑操作时。

## 介绍
requirements.txt的样式如下：
```txt
requests==2.28.1
pandas==1.1.0
```

## 使用
1.安装pipreqs
```
pip install pipreqs
```
2.生成requirements.txt
```
pipreqs --force ./ --encoding=utf-8
```
3.使用requirements.txt
```
pip install -r requirements.txt
```
