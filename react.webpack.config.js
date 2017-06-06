var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'React', 'index.js'),
	output: {
		path: __dirname,
		filename: './assets/react.bundle.js'
	},
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devtool: 'inline-source-map',
	module: {
		rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              'es2015',
              {
                modules: false,
                loose: true
              }
            ],
            'react'
          ],
          'plugins': [
            ['transform-object-rest-spread', { 'useBuiltIns': true }]
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
		]
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'React'),
			'node_modules'
		]
	}
};
