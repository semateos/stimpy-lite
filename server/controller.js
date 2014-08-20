// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
var path = require('path'),
rootPath = path.normalize(__dirname + '/..');

module.exports = {
    index: {
        handler: function(request, reply){
            // Render the view with the custom greeting
            reply.view('index', {
                title: 'Stimpy, you eediot!'
            });
        }
    },
    missing: {
        handler: function(request, reply){
            reply.view('layout', {
                title: '404 error!'
            }).code(404);
        }
    },
    public: {
        handler: {
            directory: { path: rootPath + '/public' }
        }
    },
    bower: {
        handler: {
            directory: { path: rootPath + '/bower_components' }
        }
    }
}