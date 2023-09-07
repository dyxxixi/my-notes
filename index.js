/* globals Docute */

new Docute({
  target: "#docute",
  title: "Notes",
  highlight: ["typescript", "bash", "json", "markdown", "java", "js"],
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: "./notes/",
  cssVariables: { sidebarWidth: "230px" },
  // router: { mode: 'history' },
  nav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Github",
      link: "https://github.com/d-yx/my-notes",
    },
  ],
  //
  //各笔记路径设置
  //
  sidebar: [
    {
      title: "JS面试",
      children: [
        {
          title: "let、var、const的区别",
          link: "/frontend-interview-javascript/01",
        },
        {
          title: "值和引用",
          link: "/frontend-interview-javascript/02",
        },
        {
          title: "包装类型",
          link: "/frontend-interview-javascript/03",
        }, {
          title: "数据类型的转换",
          link: "/frontend-interview-javascript/04",
        }, {
          title: "运算符",
          link: "/frontend-interview-javascript/05",
        }, {
          title: "原型和原型链",
          link: "/frontend-interview-javascript/06",
        }, {
          title: "执行栈和执行上下文",
          link: "/frontend-interview-javascript/07",
        }, {
          title: "作用域和作用域链",
          link: "/frontend-interview-javascript/08",
        }, {
          title: "this指向",
          link: "/frontend-interview-javascript/09",
        }, {
          title: "垃圾回收与内存泄漏",
          link: "/frontend-interview-javascript/10",
        }, {
          title: "闭包",
          link: "/frontend-interview-javascript/11",
        }, {
          title: "事件的注册和移除",
          link: "/frontend-interview-javascript/12",
        }, {
          title: "DOM事件的传播机制",
          link: "/frontend-interview-javascript/13",
        }, {
          title: "阻止事件默认行为",
          link: "/frontend-interview-javascript/14",
        }, {
          title: "递归",
          link: "/frontend-interview-javascript/15",
        }, {
          title: "属性描述符",
          link: "/frontend-interview-javascript/16",
        }, {
          title: "class和构造函数区别",
          link: "/frontend-interview-javascript/17",
        }, {
          title: "浮点数精度问题",
          link: "/frontend-interview-javascript/18",
        }, {
          title: "严格模式",
          link: "/frontend-interview-javascript/19",
        },
        {
          title: "函数防抖和节流",
          link: "/frontend-interview-javascript/20",
        },
        {
          title: "WeakSet和WeakMap",
          link: "/frontend-interview-javascript/21",
        }, {
          title: "深浅拷贝",
          link: "/frontend-interview-javascript/22",
        }, {
          title: "函数柯里化",
          link: "/frontend-interview-javascript/23",
        }, {
          title: "Node事件循环",
          link: "/frontend-interview-javascript/24",
        }, {
          title: "eval",
          link: "/frontend-interview-javascript/25",
        }, {
          title: "尺寸和位置",
          link: "/frontend-interview-javascript/26",
        }, {
          title: "更多知识",
          link: "/frontend-interview-javascript/27",
        },
        {
          title: "JS面试题汇总",
          link: "/frontend-interview-javascript/28",
        },
      ],
    },
    {
      title: "个人博客系统",
      children: [
        {
          title: "介绍",
          link: "/blog-system/introduction",
        },
        {
          title: "前台设计",
          link: "/blog-system/C-design",
        },
        {
          title: "后台设计",
          link: "/blog-system/B-design",
        },
        {
          title: "后端设计",
          link: "/blog-system/S-design",
        },
        { title: "前台实现", link: "/blog-system/C-implement" },
        { title: "后台实现", link: "/blog-system/B-implement" },
        { title: "后端实现", link: "/blog-system/S-implement" },
        { title: "项目部署", link: "/blog-system/deploy" },
      ],
    },
    {
      title: "JAVA学习",
      children: [
        {
          title: "第一次作业",
          link: "/java-learn/hw1",
        },
        {
          title: "第二次作业",
          link: "/java-learn/hw2",
        },
        {
          title: "第三次作业",
          link: "/java-learn/hw3",
        },
        {
          title: "第四次作业",
          link: "/java-learn/hw4",
        }
      ],
    },
    {
      title: "Python学习",
      children: [
        {
          title: "依赖汇总",
          link: "/python-learn/dependencies-collect",
        },
      ],
    },
    {
      title: "Vercel's笔记",
      children: [
        {
          title: "使用代理",
          link: "/vercel-notes/use-proxy",
        },
      ],
    },
    {
      title: "TS学习",
      children: [
        {
          title: "枚举的位运算",
          link: "/ts-learn/bit-operation",
        },
      ],
    },
    {
      title: "JS小技巧",
      children: [
        {
          title: "壹",
          link: "/js-tips/01.md",
        },
        {
          title: "贰",
          link: "/js-tips/02.md",
        },
      ],
    },
    {
      title: "React学习",
      children: [
        {
          title: "React基本介绍",
          link: "/react-learn/1-1.md",
        },
        {
          title: "JSX基础语法",
          link: "/react-learn/1-2.md",
        },
        {
          title: "组件与事件绑定",
          link: "/react-learn/1-3.md",
        },
      ],
    },

  ],
  footer: `
  <a
      target="_blank"
      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      style="color: inherit"
  >
  CC BY-NC-SA 4.0
  </a>2020-PRESENT © Joseph`,
});
