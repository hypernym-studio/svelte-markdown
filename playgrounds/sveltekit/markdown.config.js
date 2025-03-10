import { defineConfig } from '../../packages/svelte-markdown/dist/index.mjs'

export const markdownConfig = defineConfig({
  frontmatter: {
    defaults: {
      layout: 'default',
      author: {
        name: 'Ivo Dolenc',
        url: 'https://github.com/ivodolenc',
      },
    },
  },
  layouts: {
    default: {
      path: 'src/content/layouts/default/layout.svelte',
    },
  },
})
