# 依赖汇总

> 对于Python项目，生成和使用requirements.txt是十分必要的。通过requirements.txt可以一次性保存和安装项目所需要的所有库，尤其是在不同电脑操作时。

## 介绍
requirements.txt中会列出项目所需的依赖，其格式如下：
```txt
requests==2.28.1
pandas==1.1.0
```

## 使用
### 1.安装pipreqs
`
pip install pipreqs
`
### 2.生成requirements.txt
在项目目录下运行：
`
pipreqs --force ./ --encoding=utf-8
`
### 3.安装项目所需依赖
将requirements.txt放入项目目录中，运行：
`
pip install -r requirements.txt
`
