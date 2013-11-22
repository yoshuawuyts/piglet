'use strict';

module.exports = {
  beautify: {
    src: ['*.js', 'assets{/, /**/, /**/**}*.js', 'api{/, /**/, /**/**}*.js', 'grunt/*.js', 'config/*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  verify: {
    src: ['*.js', 'assets{/, /**/, /**/**}*.js', 'api{/, /**/, /**/**}*.js'],
    options: {
      mode: 'VERIFY_ONLY',
      config: '.jsbeautifyrc'
    }
  }
};
