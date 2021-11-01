const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: "./src/main.js", //入口文件 绝对路径 / 相对路径
  output: {
    //出口文件，
    path: path.resolve(__dirname, "dist") + "", //绝对路径 __dirname 是node "当前所在路径pwd" , 由于window 的目录分隔符是 '\', 而类nix是 '/'， 为了保持灵活性，使用了node 内置的path 对象方法,将自动将当前系统目录分隔符和目录名拼接
    filename: "bundle.js",
  },
  module: {
    //webpack 中一切皆模块
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      /**
       * 处理.vue 文件的加载, 写法可以指定
       * 单个依赖 - String，
       * 单个带配置的依赖 - {}
       * 多个不带配置的依赖 - []String ,
       * 多个带配置的依赖 []Object
       * { test: /\.vue$/, use: [{loader:'vue-loader',options:{}},{}...] },
       */
      {
        test: /\.s[ca]ss$/,
        use: ["style-loader", "css-loader", "scss-loader"],
      }, //要注意顺序，依次从后往前解析
      {
        test: /\.m?js$/, //.msj 是es6 的模块化js 文件
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        //图片处理
        // test: /\.(png|jpe?g|gif|svg|webp)$/,use: { laoder: "file-loader", options: { esModule: false } },//老语法
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    //插件用于增强模块
    // vue-template-compiler 的作用是解析.vue 文件内部时，遇到js 块和css 块时的处理方式，复用我们上面定义的规则
    new VueLoaderPlugin(),
  ],
  devServer: {
    static: "./dist",
    open: true,
    host: "local-ip", //启动地址为局域网ipv4 地址
    port: 3333, //手动指定地址，
    onListening(devServer) {
      //命令行自定义输出
      console.log(
        "Listening :http://",
        devServer.server.address().address,
        ":",
        devServer.server.address().port,
      );
    },
  },
};
