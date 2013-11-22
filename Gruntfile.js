'use strict';

module.exports = function (grunt) {
  var fs = require('fs'),
    // These are pairs [task, target] for which a copied tasks with an additional
    // filter option are created. Those tasks are then passed to the watch task
    // to be fired on file changes; the filter option makes sure tasks are fired
    // only on changed files, making them a lot faster. Unfortunately, we can't
    // just apply a filter to the basic configuration as no files would be
    // processed during initial runs.
    filteredTasks = [
      ['jshint', 'api'],
      ['jshint', 'assets'],
      ['jshint', 'config'],
      ['jshint', 'test'],
      ['jsonlint', 'all'],
    ];

  function filterNewFiles(src) {
    // Returns a function that tells if a file was recently modified;
    // it's used by jshint & defs tasks so that they run only on changed files.
    var srcTime = fs.statSync(src).mtime.getTime();
    // Don't watch files changed before last 10 seconds.
    return srcTime > Date.now() - 10000;
  }

  grunt.initConfig({
    autoprefixer: require('./grunt/autoprefixer'),
    clean: require('./grunt/clean'),
    concat: require('./grunt/concat'),
    connect: require('./grunt/connect'),
    copy: require('./grunt/copy'),
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

  // Add copies of watched tasks with an added filter option.
  filteredTasks.forEach(function (taskAndTarget) {
    var newTaskAndTarget = taskAndTarget.slice(0);
    newTaskAndTarget[newTaskAndTarget.length - 1] =
      newTaskAndTarget[newTaskAndTarget.length - 1] + 'Filtered';

    grunt.config(newTaskAndTarget, grunt.config(taskAndTarget));
    grunt.config(newTaskAndTarget.concat(['filter']), filterNewFiles);
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('install-git-hook', 'copy:install-git-hook');

  grunt.registerTask('server', [
    'build',
    'watch',
  ]);

  grunt.registerTask('lint', [
    'jsbeautifier:beautify',
    'jshint:api',
    'jshint:assets',
    'jshint:config',
    'jshint:test',
    'jsonlint:all',
  ]);

  grunt.registerTask('build', [
    'clean:before',
    'styl',
    'autoprefixer',
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
