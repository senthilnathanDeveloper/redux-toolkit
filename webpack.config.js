const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "./build"),
        filename:"static/js/[name].[contenthash].js",
        clean:true,
        chunkFilename: "static/js/[name].[contenthash].js",
        assetModuleFilename: 'static/media/[name][ext]',
        publicPath: '/'
    },
    devtool:"source-map",
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                },   
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset",
            },
            {
              test: /\.(scss|sass)$/,
              exclude: /node_modules/,
              use: [
               
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  }
                }
              ],
            },
            {
              test: /\.(css)$/,
              use: ['style-loader','css-loader']
            },
            {
              test: /\.svg$/i,
              issuer: /\.[jt]sx?$/,
              use: ['@svgr/webpack', 'url-loader'],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".scss"],
      },
  

    plugins:[
        new CleanWebpackPlugin({
            protectWebpackAssets: false,
            cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
          }),
        new HtmlWebpackPlugin({
            template:"public/index.html",
            // favicon: path.resolve(__dirname, `src/assets/images/Favicon.ico`),
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "css/[id].css"
          }),
        new CaseSensitivePathsPlugin(),
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
      },
       stats: {
      errorDetails: true,
    },
}