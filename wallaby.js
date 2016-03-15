/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * wallaby.js
 */
var config = require('./config/config.js');

module.exports = function(wallaby) {

  var app = config.vendor_files.jskarma.concat(config.app_files.js);

  return {
    files: app,

    tests: config.app_files.jsunit,
    testFramework: 'jasmine'
  }
};
