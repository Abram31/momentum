const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    contentBase: path.join(__dirname, 'public'),
  },
};

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js'] }) ];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/script/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset',
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'assets/img',
        //       publicPath: ''
        //     },
        //   }
        // ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset',
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'assets/fonts',
        //       publicPath: '',
        //     },
        //   }
        // ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath:(resourcePath, context) => {
              return path.relative(path.dirname(resourcePath),context) + '/';
            }
          }
        },
           'css-loader', 
           'sass-loader'
          ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              type: 'asset',
              outputPath: 'assets/audio',
              publicPath: '',
            },
          }
        ]
      },
    ],
  },
  plugins: [
    ...esLintPlugin(development),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets' ),
        noErrorOnMissing: true,
      }],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    },
  ...devServer(development)
});
