// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '村长的技术空间',
      meta: [
        {name: 'description', content: '专注前端技术分享'},
        {name: 'keywords', content: 'nuxt,vue,ts,frontend'},
      ]
    }
  },
  runtimeConfig: {
    // 只能用于服务端key
    apiSecret: '',
    public: {
      apiBase: ''
    }
  },
  imports: {
    dirs: ['store']
  },
  // ssr: false, // spa
  nitro: {
    preset: 'vercel'
  },
  // 默认vite
  // builder: 'webpack', // 需要安装依赖：@nuxt/webpack-builder
  // webpack: {},
  // postcss: {},
  // vite: {},
  modules: [
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ]
})
