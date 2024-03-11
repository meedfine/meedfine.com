import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MeedFine",
  description: "A Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/index" },
    ],

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "index", link: "/docs/index" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/meedfine/meedfine.com" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备19009226号-1</a>',
    },
  },
});
