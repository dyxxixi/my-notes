# 项目部署

## 一、网站运行机制

### （一）名词解释

##### 1.域名

> * www.baidu.com
> * www.taobao.com
> * www.qq.com

> 域名俗称网址，是由一串用点分隔的名字组成，用于标识互联网上的计算机。
>
> 原本用于标识互联网上计算机使用的是 IP 地址，但是由于 IP 地址不便于记忆，所以人们便设计出来比较容易记忆的域名，然后通过 DNS 将域名和 IP 地址关联，这样人们便可以通过记忆域名直接访问到对应的计算机。

##### 2.DNS 服务器

> DNS (Domain Name System)，可以理解为互联网上的一项服务，他可以将域名转换成其对应的 IP 地址。
>
> 可以将其理解为字典，字典中存储的就是域名和 IP 地址一一对应的键值对。
>
> 本地 hosts 文件
>
> windows: c:\windows\system32\drivers\etc\hosts
>
> mac: /etc/hosts

##### 3.服务器

> 服务器其实就是一台计算机，但是这台计算机并和我们自己的的 PC 不一样，不是日常使用的，而是提供某项互联网服务的。
>
> 比如 web 服务器，能为我们提供网页服务，email 服务器，能为我们提供电子邮件服务，FTP 服务器能为我们提供文件存储服务等等。
>
> 为计算机安装不同的服务应用程序，即可提供相应的服务。
>
> 常见的web 服务应用程序： Apache、Nginx、IIS、Node.js

<img src="https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/server.jpeg" style="zoom:75%;" />

![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/server-list.jpeg)

### （二）网站请求流程（简化版）

##### 1.静态页面

网页只请求和响应简单的 HTML、CSS、JavaScript 文件，未和服务端进行任何数据通信。这样的页面叫做静态页面。

##### 2.动态页面

页面内有和服务器进行数据通信，这样的页面叫做动态页面。

##### 3.前后端分离的页面

> 前后端分离的项目中，页面中的数据渲染是在浏览器中完成的。

前后端分离的页面请求分为两部分： 静态页面请求 + ajax 数据请求

<img src="https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/网站运行机制-静态网页请求.png" style="zoom:50%;" />

<img src="https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/网站运行机制-接口请求.png" style="zoom:50%;" />



##### 4.前后端不分离的页面

> 前后端不分离的项目中，页面中的数据渲染操作是在服务器端完成的。

前后端不分离的页面一次请求就能完成。

<img src="https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/网站运行机制-动态网页.png" style="zoom:50%;" />





## 二、网站上线部署流程

### （一）服务器购买

国内服务器： 阿里云 ECS(Elastic Compute Service)，腾讯云 CVM(Cloud Virtual Machine) 等

国外服务器： 日本 [Vultr](https://www.vultr.com/), 美国 Linode, 谷歌云，微软 Azure，亚马逊 AWS 等

这一步需要创建好服务器实例，分配好外网 IP 地址。

### （二）域名购买

国内： 万网（阿里）、腾讯等

国外： Godaddy

### （三）域名解析（配置 DNS）

注册好域名之后需要将域名映射到自己服务器对应的 IP 地址，这样别人才能通过域名访问到我们的服务器。

这个步骤叫做域名解析，通过域名服务商提供的后台就可以操作，一般域名解析都会有延迟，不是即时生效的。

### （四）服务器环境搭建

配置服务器，Mac系统或Win11系统直接用终端就ok

##### 1.需要用到的 Linux 系统操作命令

```shell
# 远程连接命令
ssh root@域名

# 切换文件夹目录
cd 目录路径

# 展示当前文件夹中内容
ls

# 展示当前文件夹路径
pwd

# 清屏
clear

# 创建文件
touch

# 创建文件夹
mkdir

# 移动目录或者文件
mv 

# 要删除的目录或者文件名
rm -rf 

# 编辑文件
vim 文件路径

# 传输文件 
scp 本地文件路径 root@域名:远程路径

# 解压文件命令
unzip 

# 查看进程的 PID：
lsof -i:端口号

# 停止进程
kill -9 PID
```

##### 2.需要用到的 Linux 文件目录
```shell
/etc/nginx/conf.d       nginx的配置文件，在这里配置每一个nginx服务器	

/home                   放项目的地方

/usr/local			    mongodb存放位置

/root			        .ssh存放位置

```



##### 3.安装 CentOS 开发人员相关包

```shell
yum groupinstall 'Development tools'
```

##### 4.配置免密登陆

```shell
# 在自己电脑上 生成本地 秘钥对
ssh-keygen -t rsa 

# 生成的位置
# mac 在 ~/.ssh
# windows 在 C:\users\你的用户名\.ssh

# 在服务器找到.ssh文件夹

# 没有就创建了一个.ssh 文件夹
mkdir .ssh

# 切换到这个文件夹
cd .ssh

# 创建了一个文件
touch authorized_keys

# 我们把自己电脑上的 id_rsa.pub 文件中的内容复制到 authorized_keys文件中
echo "cqHuvyGI2EXH5EOT/wsjIlNqH6kRaGRzLOcYAoYyn+0nsPhEfFOkv1cii9Ax9naeJuw78LapaXxmGgkcBWdk2W1KXkL5tPIZUIZAfwJ4PihDQ+0rUj5Yar741NvZYNYZ+xa1RBeziR3gbwdTLPV22Et9TTiLVEY0bNXxgvI1GGvT87f+sFB5hEB0HyQpDFyjDN+UyxTKf/Zf/7Z2z/Qz2kWTFI6oaCNfScdhjEUO8qzSsjR+9X5hE6dxmz8EII0jvAumnBy0kcIv9BaQ6TCQrijh0TWWkih2HRq8prmBzCWxb3a2A/f9PM+E6kdDBZ9lJTgB4ww8IQDxVXxhg5B14pR7ULA0rpT4ITPNFzzkVt5mo2m1bF0VH3HFiJWATaLCHZoKm8Qij6LbDL20dr4StE4zJ2fEKhi7c4CU= Ryan@panmings-MBP.lan" >> authorized_keys

# 退出服务器，下次直接就能免密登陆了
exit

# 注：若重置过服务器后，需重置密钥连接
ssh-keygen -R 你要访问的IP地址

```

### （五）安装Node.js

```shell
# yum自带源中没有Node.js,所以首先要获取Node.js资源：
curl --silent --location https://rpm.nodesource.com/setup_14.x | bash -

# 安装 Node.js
yum install -y nodejs

# 安装完成之后使用如下指令测试安装是否成功
node -v
npm -v

```

### （六）进程守护

#### 1. 使用pm2
```shell
# 安装pm2 node.js程序管理工具
npm i pm2 -g

# 使用pm2 启动node.js项目
pm2 start 文件名

# 停止
pm2 stop 文件名或者id

# 从pm2的管理列表中删除
pm2 delete 文件名或者id
```

#### 2. 使用Linux命令
在 Linux 中，可以输入：

```js
nohup command &
```
来把进程挂起，这样即使我们退出了远程连接，也能够继续保持进程。使用示例：

```js
nohup npm start &
```

注意：挂起进程之后，使用 `exit` 命令来退出远程连接。

### （七）安装数据库

##### 1. 安装 MongoDB数据库

* 在官网获取下载链接(注意要选择与服务器匹配的)：https://www.mongodb.com/try/download/community
![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/mongodb.png)

* 下载:
```wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel80-4.4.8.tgz```

* 解压:
```tar -zxvf mongodb-linux-x86_64-rhel80-4.4.8.tgz```

* 移动：`mv mongodb-linux-x86_64-rhel80-4.4.8/ /usr/local/mongodb`

* 创建数据文件夹、日志文件和mongo配置文件:
```js
mkdir -p  /usr/local/mongodb/data/db
touch /usr/local/mongodb/mongod.log
touch /usr/local/mongodb/mongodb.conf
```

* 在配置文件中加入如下代码：
```js
dbpath=/usr/local/mongodb/data/db
logpath=/usr/local/mongodb/log/mongod.log
logappend = true
port = 27017
fork = true
auth = true
```

* 切换到 mongodb 的 bin目录 下,启动：`nohup command ./mongod --dbpath /usr/local/mongodb/data/db &`

* 数据库加密：
  - 首先进入bin目录下，启动mongo命令行界面```./mongo```
  - 为了权限接入可用，必须确保有一个用户是 *userAdmin* 或者 *userAdminAnyDatabase* 的角色在 *admin* 数据库里。因此，我们首先创建用户 *root* 用户在 *admin* 数据库里，代码如下：
    ```shell
    use admin # 切换 admin 数据库
    db.createUser({user:"root",pwd:"123456",roles:[{role:"userAdminAnyDatabase",db: "admin"}]})
    ```
        > 注：db 可以查看当前所使用的数据库
    ![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/2021-08-12-013119.png)
    ![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/2021-08-12-013151.png)
  - 接下来在其他数据库上面创建用户，但是`一定要注意先在 *admin* 数据库上面使用刚才的超级管理员登录，`再进行其他数据库用户创建的创建。对应代码如下： 
    ```js
    use amdin
    db.auth("root","123456")
    ```
  - 在 *mongodb* 中 *admin* 数据库是一个特别的数据库，这个数据库的用户，可以访问 *mongodb* 中的所有数据库。如果要为其他数据库设置用户，步骤也是一样的，首先切换到其他数据库，然后创建用户:
    ```js
    use 数据库名
    db.createUser({user:"用户名",pwd:"密码",roles:[{role:"read",db: "数据库名"},{role:"readWrite",db:"数据库名"}]})
    ```
    ![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/2021-08-12-013226.png)
  - 最后执行
    ```js
    db.auth("用户名","密码")
    ```
    ![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/2021-08-12-013307.png)
  - 返回 *1*，说明登录成功。至此，我们就在数据库上面添加了一个用户，并且设置了账号和密码。
  - 修改 *mongodb* 的配置文件：
    ```shell
    systemLog:
    destination: file #日志输出方式。file/syslog,如果是file，需指定path，默认是输出到标准输出流中
    path: /usr/local/mongodb/mongod.log  #日志路径
    logAppend: true #启动时，日志追加在已有日志文件内还是备份旧日志后，创建新文件记录日志, 默认false

    net:
    port: 27017 #监听端口，默认27017
    bindIp: 0.0.0.0 #绑定监听的ip，设置为127.0.0.1时，只会监听本机
    maxIncomingConnections: 65536 #最大连接数，可接受的连接数还受限于操作系统配置的最大连接数
    wireObjectCheck: true #校验客户端的请求，防止错误的或无效BSON插入,多层文档嵌套的对象会有轻微性能影响,默认true
    
    processManagement:
    fork: true  # 后台运行

    security:
    authorization: enabled  # enabled/disabled #开启客户端认证

    storage:
    dbPath: /usr/local/mongodb/data/db  # 数据库地址
    journal: 
        enabled: true #启动journal,64位系统默认开启，32位默认关闭
    ```

  - 然后在启动 *mongodb* 的时候，指定读取配置文件：
    ```js
    ./mongod --config /usr/local/mongodb/mongodb.conf
    ``` 
  - 远程数据库连接时，需要输入账号以及密码。
  - 接下来就是在你的服务器端代码里面，使用*mongoose*的时候，连接的是有权限的数据库，所以需要修改连接字符串：
    ```js
    连接字符串修改为：mongodb://username:password@ip:port/database?authSource=admin

    例如：mongodb://testadmin:testadmin123@88.888.88.888:27017/testmongodb?authSource=admin
    # 参数说明
    # testadmin 用户名称
    # testadmin123 用户密码
    # 88.888.88.888 服务器地址
    # 27017 端口号码
    # testmongodb 连接的数据库
    # ?authSource=admin 权限来源
    # 至此，可以通过 mongoose 连接数据库
    ```

##### 2. 安装MySQL数据库
```shell
# 下载并安装 MySQL 源
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
sudo yum localinstall mysql80-community-release-el7-3.noarch.rpm

# 安装 MySQL
sudo yum install mysql-community-server -y

# 如果上一步报错 执行下面的语句 之后 再次执行一下上面的安装Mysql的语句
sudo yum module disable mysql

# 启动MySQL
sudo systemctl start mysqld

# 找到默认密码
# MySQL安装完毕之后会自动设置一个默认密码，我们需要找到默认密码
grep 'temporary password' /var/log/mysqld.log

# 连接到MySQL数据库，修改密码
mysql -uroot -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Dboss666..';

# 修改mysql数据库 密码规则
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'Dboss666.' PASSWORD EXPIRE NEVER;
ALTER USER 'root'@'localhost' IDENTIFIED WITHmysql_native_password BY 'Dboss666..';

# 查看是否已经修改成功
select user,host,plugin from user where user='root'; 

# 创建新的数据库
create database vuesql;

```

### （八）安装Nginx

```shell
# 添加 Nginx 源
sudo yum install epel-release

# 安装 Nginx
sudo yum install nginx

# 启动 Nginx
nginx

# 配置防火墙规则
sudo firewall-cmd --permanent --zone=public --add-service=http 
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```
> 重启nginx:
`nginx -s reload`
> 停止nginx：
`nginx -s stop`


### （九）Nginx配置
在/etc/nginx/conf.d文件夹里添加配置文件,例如创建pc前台页面的配置文件：
```shell
cd /etc/nginx/conf.d

# 创建一个mysite-client.conf配置文件，
touch mysite-client.conf

# 进行编辑
vim mysite-client.conf

# 写入以下配置
server {
    listen       80;
    server_name  dboss.icu;

    if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
             rewrite ^(.*) http://m.dboss.icu$1 permanent;
        }

    location / {
        root   /home/mysite/mysite-client;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api {
         proxy_pass http://127.0.0.1:7001;
    }

    location /res {
         proxy_pass http://127.0.0.1:7001;
    }

    location /static {
        proxy_pass http://127.0.0.1:7001;
    }
}
```
同理，创建移动端页面和后台页面的配置文件。

### （十）上传网站资源

可以使用 `scp` 命令，也可以安装 FTP （vsftpd）工具。

```shell
上传到/home目录下
```
