const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  { filename: 'index.html', pageTitle: 'Todo List', activePage: 'inbox' },
  { filename: 'today.html', pageTitle: 'Todo List - Today', activePage: 'today' },
  { filename: 'this-week.html', pageTitle: 'Todo List - This Week', activePage: 'this-week' },
  { filename: 'this-month.html', pageTitle: 'Todo List - This Month', activePage: 'this-month' },
  { filename: 'this-quarter.html', pageTitle: 'Todo List - This Quarter', activePage: 'this-quarter' },
  { filename: 'this-year.html', pageTitle: 'Todo List - This Year', activePage: 'this-year' },
];

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
    ],
  },
  plugins: pages.map(page => new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: page.filename,
    pageTitle: page.pageTitle,
    activePage: page.activePage,
  })),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};