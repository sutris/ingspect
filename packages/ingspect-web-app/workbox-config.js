module.exports = {
  globDirectory: ".",
  globPatterns: [
    "build/index.html",
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/static/media/**.svg"
  ],
  swDest: "./build/service-worker.js",
  modifyURLPrefix: {
    "build/": ""
  },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/gh\/naptha\/([a-zA-Z0-9\s_\\.\-\(\):@]+\/)*[a-zA-Z0-9\s_\\.\-\(\):]+\.js$/,
      handler: "CacheFirst",
      options: {
        cacheName: "ocr-lib"
      }
    },
    {
      urlPattern: /^https:\/\/tessdata\.projectnaptha\.com\/3.02\/[a-zA-Z0-9\s_\\.\-\(\):]+\.gz$/,
      handler: "CacheFirst",
      options: {
        cacheName: "ocr-lib"
      }
    }
  ]
};
