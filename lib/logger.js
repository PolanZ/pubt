const chalk = require('chalk')
const format = require('util').format

const sep = '  '

/**
 * log on error `message` to the console and exit.
 * @param { String } message
 */

exports.fatal = function (...args) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim()
  const msg = format.apply(format, args)
  console.error(sep, chalk.red(msg))
  process.exit(1)
}

/**
 * Log on Success `message` to thie console and exit
 * @param { String } message
 */

exports.success = function (...args) {
  const msg = format.apply(format, args)
  console.log(sep, chalk.green(msg))
}
