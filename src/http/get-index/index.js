let arc = require('@architect/functions')
/**
 * arc.proxy.public
 *
 * - a lambda function helper that serves files in /public
 * - very configurable! documented here: https://arc.codes/guides/spa
 */
// exports.handler = async function http(request) {
//   return {
//     type: 'text/html',
//     body: '<h1>Hello World! 🎉</h1>'
//   }
// }
exports.handler = arc.proxy.public({
  spa: false, //return 404 if route not found
  plugins:  {
    html: [
      '@architect/shared/layout',// layout is a custom plugin in src/shared
      // '@architect/proxy-plugin-html-urls',
    ],
    css: ['@architect/proxy-plugin-css-urls'],
    mjs: ['@architect/proxy-plugin-mjs-urls'],
  }
})
