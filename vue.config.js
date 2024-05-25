export const devServer = {
  proxy: {
    '/api': {
      target: 'https://127.0.0.1:8080',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
};
  