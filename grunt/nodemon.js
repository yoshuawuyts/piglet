'use strict';

module.exports = {
  dev: {
    options: {
      file: 'app.js',
      args: [''],
      nodeArgs: ['--debug'],
      watchedFolders: ['api/'],
      delayTime: 1,
      legacyWatch: true,
      env: {
        PORT: '8181'
      },
      cwd: __dirname
    }
  },
};
