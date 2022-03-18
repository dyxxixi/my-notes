/* globals Docute */

new Docute({
  target: "#docute",
  title: "项目笔记",
  highlight: ["typescript", "bash", "json", "markdown"],
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: "./notes/",
  nav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Github",
      link: "https://github.com/geekevan",
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
  ],
  // footer: ` © 2020 - 2021 -
  // <a
  //     target="_blank"
  //     href="https://beian.miit.gov.cn"
  //     style="color: inherit"
  // ></a>`,
});
