// Karma configuration
// Generated on Thu Sep 28 2017 14:05:07 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'index.js'
    ],
    preprocessors: {
        'index.js': ['webpack']
    },
    webpack: {
        module: {
            loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' }
            ]
        },
        watch: true,
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': __dirname + '/../src'
            }
        },
    },
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
