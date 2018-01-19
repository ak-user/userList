// Karma configuration
// Generated on Mon Jan 15 2018 15:43:17 GMT+0200 (EET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        'index.js',
        'components/mainСomponent/main.comp.js',
        'components/mainСomponent/main.service.js',
        'components/userList/userList.comp.js',
        'components/userDataEdit/userDataEdit.comp.js',
        'components/userDataView/userDataView.comp.js',
        'test/main.srv.test.js',
        'test/userList.comp.test.js',
        'test/userDataEdit.comp.test.js',
        'test/userDataView.comp.test.js',
        'test/main.comp.test.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'components/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    coverageReporter: {
      dir:    '',
      reporters: [
          { type: 'html', subdir: 'reports/coverage-html' },
          { type: 'lcov', subdir: 'reports/coverage' }
      ]
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
