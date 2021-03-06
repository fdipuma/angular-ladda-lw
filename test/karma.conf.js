module.exports = function karmaConfig(config) {
  config.set({
    basePath: '../',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*.js': ['babel', 'coverage', 'coveralls'],
      'test/**/*.js': ['babel']
    },
    reporters: ['dots', 'coverage', 'coveralls'],
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/angular-ladda-lw.js',
      'test/index.js',
    ],
    phantomjsLauncher: {
      exitOnResourceError: true,
    },
    coverageReporter: {
      type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/'
    },
    singleRun: true,
  });
};
