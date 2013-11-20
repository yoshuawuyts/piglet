'use strict';

module.exports = {
	options: {
    runnerPort: 9999,
	},
  continuous: {
    singleRun: true,
    browsers: ['PhantomJS']
  },
  unit: {
    background: true,
    browsers: ['PhantomJS', 'Chrome'],
    reporters: 'dots'
  },
};