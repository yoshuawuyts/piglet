'use strict';

module.exports = {
  compile: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      ".build/views.html": ["assets/views/*.jade", "assets/views/**/*.jade"]
    }
  }
};