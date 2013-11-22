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

  grunt.registerTask('install-git-hook', 'copy:install-git-hook');

  grunt.registerTask('server', [
    'build',
    'watch',
  ]);

  grunt.registerTask('lint', [
    'jsbeautifier',
    'jshint:api',
    'jshint:assets',
    'jshint:config',
    'jshint:test',
    'jsonlint:all',
  ]);

  grunt.registerTask('css', [
    'styl',
    'autoprefixer',
    'csso:optimize',
  ]);

  grunt.registerTask('views', [
    'styl',
    'autoprefixer',
    'csso:optimize',
  ]);

  grunt.registerTask('build', [
    'clean:before',
    'css',
    'jade:compile',
    'concat',
    'uglify:compile',
    'clean:after'
  ]);

  grunt.registerTask('test', [
    'mochaTest',
    'karma:unit',
  ]);

  grunt.registerTask('default', [
    'merge-conflict',
    'lint',
    'build',
    'test',
    'watch'
  ]);
};
