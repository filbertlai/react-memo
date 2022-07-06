const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      type: 'asset/resource',
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./public/index.html"
    }),
  ],

  devServer: {
    static: {
      directory: './dist',
      publicPath: '/',
    },
    compress: true,
    port: 9000,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }   

}
