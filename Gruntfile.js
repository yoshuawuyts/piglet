'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    // configurable paths
    vars: {
      apiPath: 'api{/, /**/, /**/**}*.js',
      configPath: ['Gruntfile.js', 'grunt/**/*.js', 'config/*.js'],
      stylesPath: 'assets/styles{/, /**/, /**/**/}*.styl',
      jsAssetsPath: 'assets/js{/, /**/, /**/**/}*.js',
      jsonPath: ['./*.json', '.jshintrc', '.jsbeautifyrc', 'tests/**/*.json'],
      testsPath: 'tests{/, /**/, /**/**}*.js',
      viewsPath: 'assets/views{/, /**/, /**/**/}*.jade',
      tmpPath: '.tmp',
      buildPath: 'build'
    },

    // load task configuration
    autoprefixer: require('./grunt/autoprefixer'),
    clean: require('./grunt/clean'),
    concat: require('./grunt/concat'),
    concurrent: require('./grunt/concurrent'),
    connect: require('./grunt/connect'),
    copy: require('./grunt/copy'),
    csslint: require('./grunt/csslint'),
    csso: require('./grunt/csso'),
    jade: require('./grunt/jade'),
    jsbeautifier: require('./grunt/jsbeautifier'),
    jshint: require('./grunt/jshint'),
    jsonlint: require('./grunt/jsonlint'),
    karma: require('./grunt/karma'),
    mochaTest: require('./grunt/mocha-test'),
    'node-inspector': require('./grunt/node-inspector'),
    nodemon: require('./grunt/nodemon'),
    protractor: require('./grunt/protractor'),
    release: require('./grunt/release'),
    styl: require('./grunt/styl'),
    uglify: require('./grunt/uglify'),
    watch: require('./grunt/watch'),
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Lint all files
  grunt.registerTask('lint', [
    'jsbeautifier:all',
    'jshint:all',
    'jsonlint:all',
  ]);

  // Build views
  grunt.registerTask('styles', [
    'styl',
    'autoprefixer',
    'csso:optimize',
    'csslint',
  ]);

  // Build html
  grunt.registerTask('views', [
    'jade:compile',
  ]);

  // Build js
  grunt.registerTask('js', [
    'concat',
    'uglify:compile',
  ]);

  // Build css, html & js
  grunt.registerTask('build', [
    'clean:before',
    'concurrent:build',
    'clean:after',
  ]);

  // Execute tests
  grunt.registerTask('test', [
    'mochaTest',
    'karma:unit',
  ]);

  // Check the performance of all tasks
  grunt.registerTask('time', [
    'lint',
    'build',
    'test',
  ]);

  // Commit your changes
  grunt.registerTask('commit', [
    'mergeConflict',
    'lint',
    'build',
    'test',
  ]);

  // Build, lint, test and server
  grunt.registerTask('default', [
    'lint',
    'build',
    'test',
    'concurrent:dev',
  ]);
};
