module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/app.js',
            'test/*Spec.js'
        ],
        browsers: ['Chrome'],
        reporters: ['mocha'],
        logLevel: config.LOG_DEBUG
    })
}