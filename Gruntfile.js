'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    autoprefixer: require('./grunt/autoprefixer'),
    clean: require('./grunt/clean'),
    concat: require('./grunt/concat'),
    connect: require('./grunt/connect'),
    copy: require('./grunt/copy'),
    csso: require('./grunt/csso'),
    jade: require('./grunt/jade'),
    jsbeautifier: require('./grunt/jsbeautifier'),
    jshint: require('./grunt/jshint'),
    jsonlint: require('./grunt/jsonlint'),
    karma: require('./grunt/karma'),
    'merge-conflict': require('./grunt/merge-conflict'),
    mochaTest: require('./grunt/mocha-test'),
    protractor: require('./grunt/protractor'),
    release: require('./grunt/release'),
    styl: require('./grunt/styl'),
    uglify: require('./grunt/uglify'),
    watch: require('./grunt/watch'),
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.registerTask('install-git-hook', 'copy:install-git-hook');

  // Lint all files
  grunt.registerTask('lint', [
    'jsbeautifier',
    'jshint:api',
    'jshint:assets',
    'jshint:config',
    'jshint:test',
    'jsonlint:all',
  ]);

  // Build views
  grunt.registerTask('css', [
    'styl',
    'autoprefixer',
    'csso:optimize',
  ]);

  // Build html
  grunt.registerTask('views', [
    'jade',
  ]);

  // Build css, html & js
  grunt.registerTask('build', [
    'clean:before',
    'css',
    'jade:compile',
    'concat',
    'uglify:compile',
    'clean:after'
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
    'lint',
    'build',
    'test',
  ]);

  // Build, lint, test and server
  grunt.registerTask('default', [
    'lint',
    'build',
    'test',
    'watch'
  ]);
};
