// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['public/script.js'],
        css: ['public/styles.css']
    },
    production: {
        js: ['public/script.min.js'],
        css: ['public/styles.min.css']
    }
}
