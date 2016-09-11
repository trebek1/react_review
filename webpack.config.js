module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname, 
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Greeter: 'app/components/Greeter.jsx',
			GreeterForm: 'app/components/GreeterForm.jsx',
			GreeterFormMessage: 'app/components/GreeterFormMsg.jsx',
			GreeterMessage: 'app/components/GreeterMessage.jsx'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader', 
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules| bower_components)/
		}
		]
	}
};