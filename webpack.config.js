const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.js',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 4200,
		hot: true
	},
	plugins: [
		new HTMLWebpackPlugin({
			//template: './index.html'
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|svg|gif|webp)$/i,
				use: ['file-loader', 'webp-loader']
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/i,
				use: ['file-loader']
			},
			{
				test: /\.(mp[4|3]|webm)$/i,
				use: ['file-loader']
			},
			//{
			//	// convert all imported images to have max width 1000px
			//	test: /\.(png|jpe?g|webp|tiff?)$/i,
			//	use: [
			//		//'file-loader',
			//		{
			//			loader: 'webpack-image-resize-loader',
			//			options: {
			//				scale: 2,
			//			},
			//		},
			//	],
			//},

			//{
			//	test: /\.(png|jpe?g|webp|git|svg|)$/i,
			//	use: [
			//		{
			//			loader: 'img-optimize-loader',
			//			options: {
			//				compress: {
			//					//,Вариант1 без Деталей регулировки
			//					//// This will take more time and get smaller images.
			//					//mode: 'lossless', // 'lossless', 'low', 'high'
			//					//webp: true,
			//					//gifsicle: true,
			//					//disableOnDevelopment: false,
			//					//,Вариант2 без Деталей регулировки
//
			//					//// loseless compression for png
			//					//optipng: {
			//					//	optimizationLevel: 4,
			//					//},
			//					//// lossy compression for png. This will generate smaller file than optipng.
			//					//pngquant: {
			//					//	quality: [0.2, 0.8],
			//					//},
			//					//// Compression for webp.
			//					//// You can also tranform jpg/png into webp.
			//					//webp: {
			//					//	quality: 100,
			//					//},
			//					//// Compression for svg.
			//					//svgo: true,
			//					//// Compression for gif.
			//					//gifsicle: {
			//					//	optimizationLevel: 3,
			//					//},
			//					//// Compression for jpg.
			//					//mozjpeg: {
			//					//	progressive: true,
			//					//	quality: 80,
			//					//},
			//				},
			//			},
			//		},
			//	],
			//},
		]
	}
}