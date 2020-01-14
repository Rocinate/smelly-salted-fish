module.exports = {
  publicPath: '/',
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  }
}