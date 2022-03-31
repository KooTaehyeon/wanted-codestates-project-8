const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/chungbuk', {
      // proxy할 주소, 즉, 백단의 주소를 적어줍니다.
      target: 'https://www.chungbuk.go.kr',
      changeOrigin: true,
      pathRewrite: {
        '/chungbuk': '',
      },
    })
  );
};
