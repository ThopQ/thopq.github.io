export default {
  title: "Knowledgebase",
  description: "For personal documentation purpose...",

  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/ThopQ/thopq.github.io" }],
    sidebar: [
      {
        text: "General",
        items: [{ text: "About", link: "/about" }],
      },
      {
        text: "GitHub",
        items: [
          {
            text: "Level 2",
            items: [
              {
                text: "Level 3",
                items: [{ text: "About", link: "/about" }],
              },
            ],
          },
        ],
      },
    ],
  },
};
