function buildConfig(env) {
  return require(`./webpack.${env}.config.js`)()
}

module.exports = buildConfig;