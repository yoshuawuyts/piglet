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
    'jsbeautifier:all',
    'jshint:all',
    'jsonlint:all',
  ]);

  // Build views
  grunt.registerTask('styles', [
    'styl',
    'autoprefixer',
    'csso:optimize',
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
    'styles',
    'views',
    'js',
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
