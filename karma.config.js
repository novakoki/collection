module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        files: [
            './test/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            "./test/*.spec.js": ["webpack"]
        },
        // webpack configuration
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            stats: "errors-only"
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    })
}
