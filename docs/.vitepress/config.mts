import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Estimate Generator Docs",
  description: "Documentation for Estimate Genertor app.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Quick Start",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "API",
        items: [
          { text: "Profiles", link: "/api-profiles" },
          { text: "Users", link: "/api-users" },
          { text: "Customers", link: "/api-customers" },
          { text: "Estimates", link: "/api-estimates" },
          { text: "Change Orders", link: "/api-change-orders" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MikeLautensack/Estimate-Generator",
      },
    ],
  },
});
