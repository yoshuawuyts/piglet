'use strict';

var insecure = require('../var/insecure');

var src = [
  'tests/lib/parser/*.js',
  'tests/lib/context/*.js',
  'tests/lib/compiler/*.js',
  'tests/integration/*.js',
].concat(insecure ? ['tests/lib/*/insecure/*.js'] : []);

module.exports = {
  dot: {
    options: {
      reporter: 'dot',
      require: 'should',
    },
    src: src,
  },
};
