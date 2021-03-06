const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/main.js'
  },
	output: {
		filename: 'bundle.js',
	},
  module: {
    rules: [
			{
				test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
			}
    ]
  },
	devServer: {
		contentBase: ['src'],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "src/index.html",
			filename: "./index.html"
		})
  ]
};
