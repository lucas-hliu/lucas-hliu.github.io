import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "面试集锦",
      icon: "laptop-code",
      prefix: "interview/",
      link: "interview/",
      children: "structure",
    },
    {
      text: "数据结构",
      icon: "book",
      prefix: "algo/",
      link: "algo/",
      children: "structure",
    },
    {
      text: "架构设计",
      icon: "network-wired",
      prefix: "design/",
      link: "design/",
      children: "structure",
    },
    {
      text: "架构设计",
      icon: "network-wired",
      prefix: "design/",
      link: "design/",
      children: "structure",
    },
    {
      text: "书籍推荐",
      icon: "book",
      link: "/books/share_books",
    },
  ],
});
