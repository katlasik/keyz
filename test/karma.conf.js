var webpackConfig = require('../webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'index.js'
    ],
    preprocessors: {
        'index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    },
    reporters: ['progress'],
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
