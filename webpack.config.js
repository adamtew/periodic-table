var webpack = require('webpack')


module.exports = {
	entry: "./entry.jsx",
	output: {
		path: __dirname,
		filename: "./index.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx$/,
			 	loader: 'babel',
			 	exclude: /node_modules/,
			 	include: __dirname,
			 	query: {
			 		presets: [ 'react', 'es2015' ]
			 	}
			 }
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
	]
}