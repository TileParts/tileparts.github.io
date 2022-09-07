import { defineConfig } from 'vuepress/config';

export default defineConfig(ctx => ({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TileParts',
      description: '模块化硬件原型开发方案',
    },
  },
}));
