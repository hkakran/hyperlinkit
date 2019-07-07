// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')
let data = require('@begin/data')
// HTTP function
exports.handler = async function http(req) {
  console.log(req)
  let foundLink = await data.get({
    table: 'links',
    key: req.params.linkID
  })
  if (!foundLink) {
    return {
      statusCode: 404
    }
  }
  let url = foundLink.url
  // to redirect by simulating a click
  // window.location.href = url;
  let html = `
  <!doctype html>
  <html lang=en>
    <head>
      <meta charset=utf-8>
      <title>Hi!</title>
      <meta http-equiv="Refresh" content="0; url=` + url + `" />
      <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
      <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
    </head>
  </html>
  `
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html
  }
}
