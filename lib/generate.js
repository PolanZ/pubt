const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const path = require('path')
const rm = require('rimraf').sync
const async = require('async')
// const multimatch = require('multimatch')
const render = require('consolidate').handlebars.render

const getOptions = require('./get-options')
const logger = require('../lib/logger')

/**
 * Generate a template given a `src` and `dest`.
 *
 * @param {String} name
 * @param {String} src
 * @param {String} dest
 * @param {Function} done
 */
module.exports = function generate(key, src, dest, done) {
  rm(dest)
  
  const opts = getOptions()
  let opt = opts[key] || {}

  const metalsmith = Metalsmith(src)

  Object.keys(opt).forEach(item => {
    if (opt[item] === '') logger.fatal(item + '的值不允许为空')
  })

  Object.assign(metalsmith.metadata(), opt)

  metalsmith
    .use(renderTemplateFiles(opts.renderFiles))
  

  metalsmith.clean(false)
    .source('.') // start from template root instead of `./src` which is Metalsmith's default for `source`
    .destination(dest)
    .build((err, files) => {
      // console.log(err, files)
      done(err)
    })
}

/**
 * Template in place plugin
 */
function renderTemplateFiles (renderFiles) {
  renderFiles = typeof renderFiles === 'string'
    ? [renderFiles]
    : renderFiles
  return (files, metalsmith, done) => {
    const meta = metalsmith.metadata()
    // const filesArr = Object.keys(files).filter(x => /(app.)[^]+(.js)$/g.test(x))

    async.each( Object.keys(files), (file, next) => {
      if (!/(.js)$/g.test(file)) {
        return next()
      }

      const str = files[file].contents.toString()

      if (!/{{([^{}]+)}}/g.test(str)) {
        return next()
      }

      render(str, meta, (err, res) => {
        if (err) {
          err.message = `[${file}] ${err.message}`
          return next(err)
        }
        files[file].contents = new Buffer(res)
        next()
      })
    }, done)
  }
}