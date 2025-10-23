import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Simple POS Docs",
  description:
    "Documentation and user manual for Simple POS - Point of Sale Made Easy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/installation/" },
      // { text: "Live Demo", link: "https://sma4.tec.sh" },
      { text: "Support", link: "https://tecdiary.com/support" },
    ],

    sidebar: [
      {
        text: "",
        items: [
          { text: "Home", link: "/" },
          { text: "Installation", link: "/installation" },
          { text: "Features", link: "/features" },
          { text: "User Guide", link: "/guide" },
          { text: "Developer Guide", link: "/dev-guide" },
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/tecdiary/sma-guide" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" d="M8.136 45.956c3.271.266 8.463.544 15.864.544s12.593-.278 15.864-.544c3.288-.267 5.825-2.804 6.092-6.092c.266-3.271.544-8.463.544-15.864c0-3.71-.07-6.864-.173-9.5H1.673A244 244 0 0 0 1.5 24c0 7.401.278 12.593.544 15.864c.267 3.288 2.804 5.825 6.092 6.092"/><path fill="currentColor" fill-rule="evenodd" d="M1.815 11.5q.11-1.933.229-3.364c.267-3.288 2.804-5.825 6.092-6.092C11.407 1.778 16.599 1.5 24 1.5s12.593.278 15.864.544c3.288.267 5.825 2.804 6.092 6.092q.118 1.43.229 3.364zM7.5 7A1.5 1.5 0 0 1 9 5.5h2a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 7M17 5.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"/></svg>',
        },
        link: "https://spos5.tec.sh",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19h12.32a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0m4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5M7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0z" clip-rule="evenodd"/></svg>',
        },
        link: "https://tecdiary.com/products/simple-pos-point-of-sale-made-easy",
      },
    ],

    editLink: {
      pattern: "https://github.com/tecdiary/spos-guide/tree/main/:path",
      text: "Edit this page on GitHub",
    },
    // lastUpdated: true,
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    externalLinkIcon: true,

    footer: {
      // message: 'Released under the MIT License.',
      copyright:
        "Copyright © " +
        new Date().getFullYear() +
        ' <a href="https://tecdiary.com/">Tecdiary IT Solutions</a>',
    },
  },
});
