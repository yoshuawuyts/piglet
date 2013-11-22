'use strict';

module.exports = {
  api: {
    src: ['api{/, /**/, /**/**}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  assets: {
    src: ['assets/js{/, /**/, /**/**/}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  config: {
    src: ['*.js', 'grunt/*.js', 'config/*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  tests: {
    src: ['tests{/, /**/, /**/**}*.js'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  verify: {
    src: ['*.js', 'assets{/, /**/, /**/**}*.js', 'api{/, /**/, /**/**}*.js', 'tests{/, /**/, /**/**}*.js'],
    options: {
      mode: 'VERIFY_ONLY',
      config: '.jsbeautifyrc'
    }
  }
};
