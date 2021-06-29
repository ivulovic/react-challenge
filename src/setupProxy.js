const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/bitfinex',
    createProxyMiddleware({
      target: 'https://api.bitfinex.com/v1',
      changeOrigin: true,
      pathRewrite: {
        "^/bitfinex": "/"
      }
    })
  );
};