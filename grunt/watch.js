'use strict';

module.exports = {

  'jshint.api': {
    files: [
      'api/**/*.js'
    ],
    tasks: ['jshint:apiFiltered'],
  },

  'jshint.assets': {
    files: ['assets/js/**/*.js'],
    tasks: ['jshint:assetsFiltered'],
  },

  'jshint.config': {
    files: [
      'Gruntfile.js',
      'grunt/**/*.js',
      'config/*.js',
      'test/**/*/js',
    ],
    tasks: ['jshint:configFiltered'],
  },

  jsonlint: {
    files: [
      'package.json',
      '.jshintrc',
      '{lib,examples,tests}/**/*.json',
    ],
    tasks: ['jsonlint:allFiltered'],
  },

  mochaTest: {
    files: [
      'lib/**/*.js',
      'tests/**/*.js',
    ],
    tasks: ['mochaTest:dot']
  }
};
