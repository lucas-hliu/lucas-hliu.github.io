import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "面试集锦",
      icon: "laptop-code",
      prefix: "interview/",
      link: "interview/",
      children: [
        "1 c++basic.md",
        "2 process.md",
        "3 thread.md"
      ],
    },
    {
      text: "数据结构",
      icon: "book",
      prefix: "algo/",
      link: "algo/",
      children: [
        "1 array_and_list.md",
        "2 queue_and_stack.md",
        "3 hash_map.md",
      ],
    },
    {
      text: "架构设计",
      icon: "network-wired",
      prefix: "design/",
      link: "design/",
      children: [
        "1 design_patterns.md",
        "2 observer_pattern.md",
        "3 strategy_pattern.md",
      ],
    },
    {
      text: "书籍推荐",
      icon: "book",
      link: "/books/share_books",
    },
  ],
});
