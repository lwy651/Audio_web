const webpack = require('webpack');

module.exports={
	entry: './src/app/app.jsx',
	output:{
		path: __dirname + "/build",
    	filename: "[name].js"
	},
	module:{
		loaders: [
		{
			test:/\.jsx$/,
			exclude: /node_modules/,
			loader:'babel',
			query:{
  				"presets": ["es2015", "react"]
			}
		}
		]
	}
}