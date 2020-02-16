const path = require('path');
const UglifyESPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'ezdo.min.js',
    path: path.resolve(__dirname, './ez'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new UglifyESPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
        output: {
          // 最紧凑的输出
          beautify: false,
          // 删除所有的注释
          comments: false,
        }
      }
    }),
  ],
};
