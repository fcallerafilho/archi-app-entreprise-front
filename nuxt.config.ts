// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  // routeRules:{
  //   '/api/**': {
  //     proxy: {
  //         to: 'http://localhost:8080',
  //         rewrite: path => path.replace(/^\/api/, ''),
        
  //     },
  //  },
  // },
  nitro:{
    devProxy: {
      "/api/" : {
        target:'http://localhost:8080',
        changeOrigin: true,
        prependPath:true,
      }
    }
  }
});
