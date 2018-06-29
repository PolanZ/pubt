const path = require('path')
const existsSync = require('fs').existsSync

/**
 * Read metadata
 * @return {Object} metadata
 */

module.exports = function () {
  const opts = getMetadata()

  return opts
}

/**
 * Gets the metadata from .pubtrc.js
 * 
 * @return {Object}
 */

function getMetadata() {
  const file = path.join(process.cwd(), '.pubtrc.js')
  let opts = {}

  if (!existsSync(file)) {
    throw new Error('.pubtrc.js 不存在.')
  } else {
    const req = require(path.resolve(file))
    if (req !== Object(req)) {
      throw new Error('.pubtrc.js 需要输出Object类型')
    }
    opts = req
  }

  return opts
}