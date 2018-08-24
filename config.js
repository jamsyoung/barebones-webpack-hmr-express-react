'use strict';

const nconf = require('nconf');
const pkg = require('./package.json');
const requiredEnvVars = ['ENVIRONMENT', 'PORT'];
const optionalEnvVars = ['WEBPACK_HMR'];

// register whitelisted env vars
nconf.env([...requiredEnvVars, ...optionalEnvVars]);

if (requiredEnvVars.some(item => nconf.get(item) === undefined || nconf.get(item).length === 0)) {
  console.error(`Startup config incomplete:`);
  requiredEnvVars.forEach(item => {
    console.error(`${item}: ${nconf.get(item) || 'undefined'}`);
  });
  process.exit(1);
}

const config = {
  default: {app: {pkg}},
  prod: {}
};

switch (nconf.get('ENVIRONMENT').toLowerCase()) {
  case 'prod':
    nconf.defaults(config.prod);
    break;

  default:
    nconf.defaults(config.default);
}

nconf.overrides(config.default);

module.exports = nconf;
