const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/kobis/business/mast/mvie/searchMovieDtl.do",
    createProxyMiddleware({
      target: "https://kobis.or.kr",
      changeOrigin: true,
    })
  );

  app.use(
    "/openapi-data2/wisenut/search_api/search_json2.jsp",
    createProxyMiddleware({
      target: "https://api.koreafilm.or.kr",
      changeOrigin: true,
    })
  );

  app.use(
    "/db/main",
    createProxyMiddleware({
      target: "https://kmdb.or.kr",
      changeOrigin: true,
    })
  );
};
