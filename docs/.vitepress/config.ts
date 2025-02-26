import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue3 Tailwindcss4 VitePress",
  description: "Configuration test",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Buttons example', link: '/buttons-example' },
        ]
      }
    ],

    socialLinks: [    ]
  }
})
