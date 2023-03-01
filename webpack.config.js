const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  // 打包的入口文件地址
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].[contenthash:4].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        // 对项目中.js结尾的文件，使用babel-loader进行转义处理
        test: /\.(ts|tsx|js|jsx)$/,
        // loader: "babel-loader",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        // 排除node_modules
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 开启css模块化
              modules: false,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "index.css", // 自定义生成的css文件名
      filename: "[name].[fullhash:3].css?v=[fullhash]",
      chunkFilename: "[id].[fullhash:3].css?v=[fullhash]",
      ignoreOrder: false,
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin({ template: "public/index.html" }),
  ],
  resolve: {
    // 要解析的文件的扩展名
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".less", "css"],
    // 解析目录时要使用的文件名
    mainFiles: ["index"],
    // 路径别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  //一般不需要配置 就用默认就行
  // entry: "./src/index.js", //默认"./src/index.js"
  // output: {
  //   //默认输出到"./dis/main.js"文件中
  //   filename: "fasfd.js", //若只设置filename，则默认输出到"./dist/${filename}"文件中
  //__dirname 私有变量 nodejs中才有的变量
  //   path: path.resolve(__dirname, "fang"),
  // },
};
