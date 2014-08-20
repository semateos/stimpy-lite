//controller for default routes
var controller = require('./controller');

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: controller.index
    },
    {
        method: 'GET',
        path: '/public/{path*}',
        config: controller.public
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.missing
    },

]