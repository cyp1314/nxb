module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '京东内销宝',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '{{escape description }}'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
  plugins: [
    {
    src: "~plugins/elementui",
    ssr: true,
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#c9302c'},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/proxy',
  ],
  axios:{
    proxy:true,
    prefix:'/union/',
    credential:true,
  },
  proxy:{
    '/union/':{
      target:'https://api.sunofbeach.net/shop/',
      pathRewrite:{
        changeOrigin:true,
        '^/union/':''
      }
    }
  },
}

