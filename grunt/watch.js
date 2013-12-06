'use strict';

var gruntfile = require('../Gruntfile');

var apiPath = gruntfile.api;
var configPath = gruntfile.config;
var jsAssetsPath = gruntfile.jsAssets;
var jsonPath = gruntfile.json;
var stylesPath = gruntfile.styles;
var testsPath = gruntfile.tests;
var viewsPath = gruntfile.views;

module.exports = {

  'css': {
    files: [stylesPath],
    tasks: ['css', 'clean:after'],
  },

  'jade': {
    files: [viewsPath],
    tasks: ['jade:compile', 'clean:after'],
  },

  'api': {
    files: [apiPath],
    tasks: ['jsbeautifier:api', 'jshint:api', 'mochaTest:dot'], 
  },

  'assets': {
    files: [jsAssetsPath],
    tasks: ['jsbeautifier:assets', 'jshint:assets'],
  },

  'config': {
    files: [configPath],
    tasks: ['jsbeautifier:config', 'jshint:config'],
  },

  'tests': {
    files: [testsPath],
    tasks: ['jsbeautifier:tests', 'jshint:tests'],
  },

  jsonlint: {
    files: [jsonPath],
    tasks: ['jsonlint:all'],
  },

  mochaTest: {
    files: [apiPath, testsPath],
    tasks: ['mochaTest:dot']
  }
};
