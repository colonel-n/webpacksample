module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            'src/app.js',
            'test/*Spec.js'
        ],
        preprocessors: {
            'src/app.js': ['coverage'],
        },
        browsers: ['Chrome'],
        reporters: ['mocha', 'coverage', 'junit'],
        junitReporter: {
            outputDir: 'report'
        },
        logLevel: config.LOG_DEBUG
    })
}