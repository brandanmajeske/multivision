var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 8080

	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://brandan:work4now@ds027779.mongolab.com:27779/multivision',
		port: process.env.PORT || 80
	}
}
