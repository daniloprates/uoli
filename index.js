#!/usr/bin/env node

'use strict';

var switchProject = require('./modules/switch');
var createProject = require('./modules/create');

if (process.argv.length < 3) {
  return console.error('Project not defined.');
}

var project = process.argv[2];

if (project === '-c' || project === 'create') {
  createProject(process.argv[3], process.argv[4]);
} else {
  switchProject(project, process.argv[3]);
}
