const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const webpack = require('webpack')

module.exports = (env,argv)=>{


if(argv.mode === 'production'){
   console.log("PRODUCTION")
}

var config = {
  entry: './src/main.js',
  plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'RubiksCube',
       template: path.resolve(__dirname, 'src/index.ejs')
     })
   ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
   module: {
     rules: [
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env']
           }
         }
       },
       {
         test: /\.scss$/,
         use: [
          argv.mode !== 'production' ? 'style-loader' :MiniCssExtractPlugin.loader, // creates style nodes from JS strings
           {loader:'css-loader', options: { importLoaders: 1 }}, // translates CSS into CommonJS
           'postcss-loader',
           'sass-loader' // compiles Sass to CSS, using Node Sass by default
         ]
       },
       {
          test: /\.svg$/,
          loader:'svg-inline-loader'
        },
        {
         test: /\.(png|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   },
   resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
    }
  }
};

if (argv.mode !== 'production') {
   config.devtool= 'inline-source-map',
   config.devServer= {contentBase: './docs'}
 }else{
    config.plugins.push(new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }));
    config.plugins.push(new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }));
 }

 return config;
};
