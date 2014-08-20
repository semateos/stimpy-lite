/**
* Dependencies.
*/
var path = require('path'),
rootPath = path.normalize(__dirname + '/..');

// Defaults that you can access when you require this config.
module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    hapi: {
        options: {
            views: {
                path: rootPath + '/public',
                engines: {
                    html: require('swig')
                }
            }
        }
    },
    plugins: [
        {
            plugin: require("good"),
            options: {
                subscribers: {
                    console: ['ops', 'request', 'log', 'error'],
                    'tmp/logs/': ['ops', 'request', 'log', 'error']
                }
            }
        },
        {
            plugin: require("hapi-assets"),
            options: require('./assets')
        },
        {
            plugin: require("hapi-named-routes")
        },
        {
            plugin: require("hapi-cache-buster")
        }
    ]
}