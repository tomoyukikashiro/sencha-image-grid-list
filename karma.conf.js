// Karma configuration
// Generated on Thu Sep 19 2013 12:45:15 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/lib/expect.js',
      'test/lib/sinon-1.4.2.js',
      'touch/sencha-touch-all-debug.js',
      'ux/touch/ImageGridList/model/Image.js',
      'app/model/Image.js',
      'app/store/Images.js',
      'ux/touch/ImageGridList/view/Image.js',
      'ux/touch/ImageGridList/view/ImageOuter.js',
      'ux/touch/ImageGridList/view/List.js',
      'ux/touch/ImageGridList/view/Panel.js',
      'test/spec/ImageGridList/view/ImageSpec.js',
      'test/spec/ImageGridList/view/ListSpec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
