'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },

  api: {
    src: [
      'api/**/*.js'
    ]
  },

  assets: {
    src: [
      'assets/js/**/*.js',
      'assets/js/app.js'
    ]
  },

  config: {
    src: [
      'Gruntfile.js',
      'grunt/*.js',
      'config/*.js'
    ]
  },

  test: {
    src: [
      'test/**/*.js',
      'test/karma.conf.js'
    ]
  }
};
