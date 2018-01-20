const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'shyamcom'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/shyamcom-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'shyamcom'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/shyamcom-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'shyamcom'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/shyamcom-production'
  }
};

module.exports = config[env];
