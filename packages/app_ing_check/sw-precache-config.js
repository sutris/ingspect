module.exports = {
  staticFileGlobs: [
    "build/index.html",
    "build/static/css/**.css",
    "build/static/js/**.js"
  ],
  swFilePath: "./build/service-worker.js",
  stripPrefix: "build/",
  handleFetch: false,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/gh\/naptha\/([a-zA-Z0-9\s_\\.\-\(\):@]+\/)*[a-zA-Z0-9\s_\\.\-\(\):]+\.js$/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /^https:\/\/tessdata\.projectnaptha\.com\/3.02\/[a-zA-Z0-9\s_\\.\-\(\):]+\.gz$/,
      handler: "cacheFirst"
    }
  ]
};
