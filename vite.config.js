const { name } = require('./package.json')

module.exports = {
  outDir: ['dist', name].join('/')
}
