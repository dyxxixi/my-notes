# 前台实现

## 一、项目初始化

### （一）关键技术
技术：Vue框架（vue-cli、vuex、vue-router）、axios、mockjs、less、nodejs、npm。

### （二）项目搭建
在Nodejs环境下,使用Node.js官方提供的包管理工具npm安装好vue官方脚手架vue-cli，使用vue-cli搭建项目，并且预装好vue官方的路由器vue-router,vue状态管理模式vuex,动态样式表语言less。其中，less用于整个项目的css部分的编写。

## 二、组件的实现

### （一）Layout组件
该组件作为整个项目的页面布局组件，利用了`vue`的插槽，即使用`<slot>`标签，考虑到页面的布局有两栏布局和三栏布局两种，于是使用了具名插槽，选择几栏布局由父组件决定,内容由父组件提供。

### （二）Avatar组件
该组件为头像组件，用于项目中的左侧导航栏头像，以及用户评论时生成的头像。用到了`prop`——父组件中通过`v-bind`定义一个动态值，子组件通过`prop`接收该值。即图片路径和大小值由父组件传递给Avatar组件。

### （三）Icon组件
为了方便在项目中使用图标，同时避免自创图标的繁琐性，于是决定使用阿里巴巴矢量库，使用`font-class`引用,根据相应图标类名获取图标。为了将来父组件方便传递易读性类名，最好有类名映射，于是选择直接声明一个类名映射的对象，再利用计算属性完成匹配。组件的根节点样式受自身和父组件影响,且父组件优先级较高。

### （四）SiteAside组件
该组件为整个项目页面左侧的导航栏部分，由`Contact`组件和`Menu`组件构成，并且使用了Avatar组件。其中，Menu组件需要根据路径判断是否选中时，文章页需要模糊匹配，及只要路径以`blog`开头都能匹配，于是利用字符串的`startsWith`方法判断路径是否以"blog"开头即可。

### （五）Pager组件
作为项目的分页组件，当数据量过多时，使用分页分解数据。首先，编写pager组件的样式，即使用简单的CSS完成。其次，定义current(当前页码)、total(总数据量)、limit(页容量)、visibleNumber（可见页码数）四个属性，定义计算属性，完成动态样式的展示判断。最后，定义事件抛给父组件，控制页码改变。
```js
computed: {
    pageNumber() {  // 总页数
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {    // 得到显示的最小数字
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {   // 得到显示的最大数字
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {    //页码
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
```

### （六）其他组件
ImageLoader组件，该组件可以实现一个渐进式图片，主要用于主页的多功能轮播图。该组件的整体逻辑：两张图片重合，一张是原图（较大且清晰），一张是占位图（较小且模糊），原图加载完成前透明度为0，加载完成后一段时间透明度为1，即可呈现一种渐进式效果。ToTop组件：回到顶部按钮。

![Alt text](https://cdn.staticaly.com/gh/d-yx/my-images@main/notes/top组件.png "Top组件")

## 三、功能的实现
暂无

## 四、页面的实现   
暂无
