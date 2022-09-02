const path = require("path");
const htmlWebpackPlugin = require( "html-webpack-plugin" );
const miniCssExtractPlugin = require( "mini-css-extract-plugin" );
const removeEmptyScripts = require( "webpack-remove-empty-scripts" )

let model_name = "Alkan Grey";

module.exports = {
  mode: "development",
  entry: {
    index: {
      import: ["./src/index.js"],
      filename: "js/index.bundle[contenthash].js"
    },
    photography:{
      import: "./src/photography.js",
      filename: "js/photography.bundle[contenthash].js"
    },
    commercial:{
      import: "./src/commercial.js",
      filename: "js/commercial.bundle[contenthash].js"
    },
    about:{
      import: "./src/about.js",
      filename: "js/about.bundle[contenthash].js"
    },
    contact:{
      import: "./src/contact.js",
      filename: "js/contact.bundle[contenthash].js"
    }
  },
  output: {
    path: path.resolve( __dirname, "dev" ),
    clean: true,
  },
  // watch: true,
  watchOptions: {
    // ignored: ["/node_modules/","/dev"],
    aggregateTimeout: 1500
  },
  devServer:{
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          // "style-loader",
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]"
        }
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]"
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Home | " + model_name,
      filename: "index.html",
      template: "./src/html_templates/index.html",
      chunks: [ "index" ],
      chunksSortMode: "manual",
    }),
    new htmlWebpackPlugin({
      title: "Photography | " + model_name,
      filename: "photography.html",
      template: "./src/html_templates/photography.html",
      chunks: [ "photography" ],
      chunksSortMode: "manual",
    }),
    new htmlWebpackPlugin({
      title: "Commercial | " + model_name,
      filename: "commercial.html",
      template: "./src/html_templates/commercial.html",
      chunks: [ "commercial" ],
      chunksSortMode: "manual",
    }),
    new htmlWebpackPlugin({
      title: "About | " + model_name,
      filename: "about.html",
      template: "./src/html_templates/about.html",
      chunks: [ "about" ],
      chunksSortMode: "manual",
    }),
    new htmlWebpackPlugin({
      title: "Contact | " + model_name,
      filename: "contact.html",
      template: "./src/html_templates/contact.html",
      chunks: [ "contact" ],
      chunksSortMode: "manual",
    }),

    new miniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new removeEmptyScripts({})
  ]
}