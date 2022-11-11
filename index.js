/* globals Docute */

new Docute({
  target: "#docute",
  title: "Notes",
  highlight: ["typescript", "bash", "json", "markdown", "java", "js"],
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: "./notes/",
  cssVariables: { sidebarWidth: "200px" },
  // router: { mode: 'history' },
  nav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Github",
      link: "https://github.com/d-yx",
    },
  ],
  //
  //各笔记路径设置
  //
  sidebar: [
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
        }
      ],
    },
    {
      title: "Python学习",
      children: [
        {
          title: "库的安装",
          link: "/python-learn/package-install",
        },
      ],
    },
    {
      title: "Vercel笔记",
      children: [
        {
          title: "使用代理",
          link: "/vercel-notes/use-proxy",
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
  </a>2020-PRESENT © Deng Yuxi`,
});
