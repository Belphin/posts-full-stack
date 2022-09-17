const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV == 'production';

module.exports = {
	entry: { myAppName: path.resolve(__dirname, './src/index.js') },
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: production ? '[name].[contenthash].js' : '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: !production,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: !production,
						},
					},
				],
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				exclude: /node_modules/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Webpack & React',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: production ? '[name].[contenthash].css' : '[name].css',
		}),
	],
	devServer: {
		port: 3000,
	},
	mode: production ? 'production' : 'development',
};
