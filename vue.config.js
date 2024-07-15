"use strict";
const { defineConfig } = require("@vue/cli-service");

const path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir);
}
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const port = 80;

const target = "http://localhost:8080";
module.exports = defineConfig({
  lintOnSave: false, //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,

  devServer: {
    client: {
      overlay: false, //关闭Uncaught runtime errors弹窗页面
    },
    port,
    proxy: {
      // 当请求以process.env.VUE_APP_BASE_API开头时，触发代理
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器地址，即真正处理请求的后端服务器地址
        target,
        // 是否改变原始主机头为目标URL，默认为false
        changeOrigin: true,
        // 是否重写请求路径，去掉/api前缀，默认为false
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
      [process.env.IMAGE_PREFIX]: {
        target,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin(), // 使用compression插件来打包gzip格式的文件，提高传输速度和性能
      new CompressionWebpackPlugin({
        test: /\.(js|css)/,
        threshold: 10240, // 只处理大于10kb的文件，默认为0
        deleteOriginalAssets: false, // 是否删除原文件，默认为false
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        modules: true,
        //旧版本用prependData，新版比如cli5本用additionalData
        //注意：sass-loader将文件引用写入每个组件，适合全局引入变量，但不适合在单页面应用中添加样式，如果是全局样式（非变量），建议在main.js里引入
      },
    },
  },
  css: {},
  chainWebpack: (config) => {
    // config
    //   .plugin("webpack-bundle-analyzer")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);


    // 使用代码分割，将每个路由组件分成一个单独的块
    config.optimization.splitChunks({
      // 指定要分割的代码块类型，all表示所有类型（同步和异步）
      chunks: "all",
      // 定义缓存组，用于控制不同类型的模块如何分割和打包
      cacheGroups: {
        // 定义一个缓存组，用于打包来自node_modules目录的模块
        vendors: {
          // 给打包后的文件取一个名字
          name: "chunk-vendors",
          // 定义匹配规则，只有符合这个规则的模块才会被打包到这个文件中
          test: /[\\/]node_modules[\\/]/,
          // 定义优先级，数字越大表示优先级越高
          priority: -10,
          // 定义在哪些代码块中寻找需要打包的模块，默认有三种可选值：initial（初始代码块）、async（按需加载代码块）、all（所有代码块）
          chunks: "initial",
        },
        // 定义另一个缓存组，用于打包公共模块，即被多次引用的模块
        common: {
          // 给打包后的文件取一个名字
          name: "chunk-common",
          test: resolve("src/components"),
          // 定义最少被引用次数，只有被引用次数大于等于这个值的模块才会被打包到这个文件中
          minChunks: 2,
          // 定义优先级，数字越大表示优先级越高
          priority: -20,
          // 定义在哪些代码块中寻找需要打包的模块，默认有三种可选值：initial（初始代码块）、async（按需加载代码块）、all（所有代码块）
          chunks: "initial",
          // 如果当前模块已经被打包过了，则直接复用之前已经打包好的模块，而不是再生成一个新的文件
          reuseExistingChunk: true,
        },
        elementUI: {
          name: "chunk-elementUI", // split elementUI into a single package
          chunks: "initial",
          priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
        },
      },
    });
  },
});
