const path = require('path');

module.exports = function(env) {
  return require(path.resolve(__dirname, 'config', `${env}.webpack.config.js`))(env);
}
