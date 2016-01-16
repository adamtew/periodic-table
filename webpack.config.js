var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: "./entry.jsx",
	output: {
		path: __dirname,
		filename: "index.js"
		// publicPath: '/static/'
	},
	module: {
		loaders: [
			{ 
				test: /\.(js|jsx)$/,
			 	loader: 'babel',
			 	exclude: /node_modules/,
			 	include: __dirname,
			 	query: {
			 		presets: [ 'react', 'es2015' ]
			 	}
		 	}
		 	// },
		 	// {
		 	// 	test: /\.scss$/,
		 	// 	loader: ExtractTextPlugin.extract('css!sass')
		 	// }
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
    // new ExtractTextPlugin('[name].css')
			// disable: false,
			// allChunks: true
		// })
	]
}