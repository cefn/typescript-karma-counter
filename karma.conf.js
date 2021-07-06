// Bypass strictness for karma config which is commonjs
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
    basePath: "",
    mode: "development",
    plugins: [
      require("karma-jasmine"),
      require("karma-webpack"),
      require("karma-chrome-launcher"),
      require("karma-firefox-launcher"),
      require("karma-safari-launcher"),
      require("karma-spec-reporter"),
    ],
    frameworks: ["jasmine"],
    client: {
      jasmine: {
        random: false,
      },
    },
    files: ["test/**/*.test.ts", "test/**/*.test.tsx"],
    preprocessors: {
      "test/**/*.test.ts": ["webpack"],
      "test/**/*.test.tsx": ["webpack"],
    },
    webpack: webpackConfig,
    reporters: ["spec"],
    concurrency: Infinity,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    browserNoActivityTimeout: 30000,
    retryLimit: 0,
  });
};
