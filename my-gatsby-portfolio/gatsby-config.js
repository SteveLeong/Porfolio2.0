const path = require('path');

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-eslint`,
		{
			resolve: 'gatsby-plugin-polyfill-io',
			options: {
				features: [
					'Number.isInteger',
					'Array.prototype.find',
					'NodeList.prototype.forEach',
					'String.prototype.endsWith',
				],
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: `gatsby-plugin-root-import`,
			options: {
				src: path.join(__dirname, 'src'),
				components: path.join(__dirname, 'src/components'),
				data: path.join(__dirname, 'src/data'),
				assets: path.join(__dirname, 'src/assets'),
				store: path.join(__dirname, 'src/store'),
				static: path.join(__dirname, 'src/static'),
				utilities: path.join(__dirname, 'src/utilities'),
				hooks: path.join(__dirname, 'src/hooks'),
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		`gatsby-plugin-gatsby-cloud`,
	],
};
