'use strict';

module.exports = {
  api: {
    src: [
      'api/**/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    }
  }, 

  assets: {
    src: [
      'assets/js/**/*.js',
      'assets/js/app.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    }
  },

  config: {
    src: [
      'Gruntfile.js',
      'grunt/**/*.js',
      'config/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    }
  },

  test: {
    src: [
      'test/**/*.js',
      'test/karma.conf.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    }
  }
};
