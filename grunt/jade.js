'use strict';

module.exports = {
  compile: {
    options: {
      client: true,
      compileDebug: false
    },
    files: [{
      expand: true,
      cwd: 'assets/views/',
      src: ['{**/, **/**/}*.jade', '*.jade'],
      dest: '.tmp/',
      ext: '.js',
    }]
  }
};