// This is the hapi plugin version to be included in other projects

// Dependencies
var Hapi = require('hapi');

// Server Config
var config = require('./server/config');

exports.register = function(plugin, options, next) {

	plugin.register(config.plugins, function(err) {
        if (err) throw err;
    });

	plugin.route(require('./server/routes'));

	plugin.views(config.hapi.options.views);
	
	next();
};

exports.register.attributes = {
    pkg: require("./package.json")
}