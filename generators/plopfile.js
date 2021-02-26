const componentConfig = require('./config/component')
const pageConfig = require('./config/page')
const utilConfig = require('./config/util')
const hookConfig = require('./config/hook')
const contextConfig = require('./config/context')


module.exports = (
	/** @type {import('plop').NodePlopAPI} */
  plop) => {
  plop.setGenerator('component', componentConfig);

  plop.setGenerator('page', pageConfig);

  plop.setGenerator('util', utilConfig);

  plop.setGenerator('hook', hookConfig);

  plop.setGenerator('context', contextConfig);
}
