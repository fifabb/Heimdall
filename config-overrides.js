const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  // config = injectBabelPlugin(['import', {}], config)
  
  config = rewireLess.withLoaderOptions({
    modifyVars: {},
  })(config, env)

  return config
}
